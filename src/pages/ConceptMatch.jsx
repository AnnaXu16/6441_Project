import { useState } from 'react'
import { Link } from 'react-router-dom'
import securityConcepts from '../data/securityConcepts'

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5)
}

function createRound(excludedIds = []) {
  const freshConcepts = securityConcepts.filter(item => !excludedIds.includes(item.id))
  const terms = shuffle(freshConcepts.length >= 5 ? freshConcepts : securityConcepts).slice(0, 5)
  return { terms, definitions: shuffle(terms) }
}

export default function ConceptMatch() {
  const [round, setRound] = useState(() => createRound())
  const [selectedTerm, setSelectedTerm] = useState(null)
  const [matched, setMatched] = useState([])
  const [incorrectDefinition, setIncorrectDefinition] = useState(null)
  const [message, setMessage] = useState('Choose a term, then choose its matching definition.')

  const complete = matched.length === round.terms.length

  function chooseTerm(id) {
    if (matched.includes(id)) return
    setSelectedTerm(id)
    setIncorrectDefinition(null)
    setMessage('Now choose the definition that matches this term.')
  }

  function chooseDefinition(id) {
    if (matched.includes(id)) return
    if (!selectedTerm) {
      setMessage('Choose a term first, then select a definition.')
      return
    }

    if (id === selectedTerm) {
      const updated = [...matched, id]
      setMatched(updated)
      setSelectedTerm(null)
      setIncorrectDefinition(null)
      setMessage(updated.length === round.terms.length ? 'Great work — you matched all five concepts.' : 'Correct match. Choose another term to continue.')
    } else {
      setIncorrectDefinition(id)
      setMessage('That definition does not match. Try another one.')
    }
  }

  function loadNewSet() {
    setRound(createRound(round.terms.map(item => item.id)))
    setSelectedTerm(null)
    setMatched([])
    setIncorrectDefinition(null)
    setMessage('Choose a term, then choose its matching definition.')
  }

  return (
    <section className="match-page page-width">
      <Link className="back-link" to="/">← Home</Link>
      <div className="match-title">
        <div>
          <p className="eyebrow">LEARNING ACTIVITY</p>
          <h1>Concept Match</h1>
        </div>
        <p>Connect each cybersecurity term with its correct definition. Each set contains five concepts from the full collection.</p>
      </div>

      <div className="match-toolbar">
        <div><strong>{matched.length} / 5 matched</strong><span aria-live="polite">{message}</span></div>
        <button type="button" className="new-set-button" onClick={loadNewSet}>New set <span aria-hidden="true">↻</span></button>
      </div>

      <div className="match-board">
        <div className="match-column">
          <h2>Security terms</h2>
          <div className="term-list">
            {round.terms.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`term-choice ${selectedTerm === item.id ? 'selected' : ''} ${matched.includes(item.id) ? 'matched' : ''}`}
                onClick={() => chooseTerm(item.id)}
                disabled={matched.includes(item.id)}
                aria-pressed={selectedTerm === item.id}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.term}</strong>
                {matched.includes(item.id) && <b aria-label="Matched">✓</b>}
              </button>
            ))}
          </div>
        </div>

        <div className="match-column">
          <h2>Definitions</h2>
          <div className="definition-list">
            {round.definitions.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`definition-choice ${incorrectDefinition === item.id ? 'incorrect' : ''} ${matched.includes(item.id) ? 'matched' : ''}`}
                onClick={() => chooseDefinition(item.id)}
                disabled={matched.includes(item.id)}
              >
                <span>{String.fromCharCode(65 + index)}</span>
                <strong>{item.definition}</strong>
                {matched.includes(item.id) && <b aria-label="Matched">✓</b>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {complete && (
        <div className="match-complete" aria-live="polite">
          <span aria-hidden="true">✓</span>
          <div><strong>Set complete</strong><p>You matched all five terms. Choose “New set” to practise five different concepts.</p></div>
          <button type="button" className="quiz-button" onClick={loadNewSet}>Try a new set</button>
        </div>
      )}
    </section>
  )
}
