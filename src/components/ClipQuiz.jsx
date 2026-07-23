import { useState } from 'react'

const placeholderOptions = [
  'Answer option A',
  'Answer option B',
  'Answer option C',
  'Answer option D',
]

// The interaction is ready now; real questions and answers can be connected later.
export default function ClipQuiz({ clipTitle }) {
  const [started, setStarted] = useState(false)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function selectOption(index) {
    if (submitted) return
    setSelected(index)
  }

  function checkChoice() {
    if (selected === null) return
    setSubmitted(true)
  }

  function resetQuiz() {
    setSelected(null)
    setSubmitted(false)
  }

  if (!started) {
    return (
      <section className="clip-quiz-invitation" aria-labelledby="clip-quiz-invitation-title">
        <div className="quiz-orbit" aria-hidden="true">
          <span>?</span>
        </div>
        <div>
          <p className="eyebrow">QUICK CHALLENGE</p>
          <h2 id="clip-quiz-invitation-title">Test your knowledge</h2>
          <p>Start a short multiple-choice question based on this scene.</p>
        </div>
        <button type="button" className="clip-quiz-start" onClick={() => setStarted(true)}>
          Begin challenge <span aria-hidden="true">→</span>
        </button>
      </section>
    )
  }

  return (
    <section className="clip-quiz-panel" aria-labelledby="clip-quiz-title">
      <div className="clip-quiz-topbar">
        <div>
          <span>CLIP CHECK</span>
          <strong>{clipTitle}</strong>
        </div>
        <div className="clip-quiz-progress" aria-label="Question 1 of 1">
          <i className="active" />
          <span>1 / 1</span>
        </div>
      </div>

      <div className="clip-quiz-content">
        <p className="eyebrow">QUESTION PLACEHOLDER</p>
        <h2 id="clip-quiz-title">The multiple-choice question for this clip will appear here.</h2>

        <div className="clip-answer-list">
          {placeholderOptions.map((option, index) => (
            <button
              type="button"
              className={`clip-answer ${selected === index ? 'selected' : ''}`}
              key={option}
              onClick={() => selectOption(index)}
              disabled={submitted}
              aria-pressed={selected === index}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <strong>{option}</strong>
              <b aria-hidden="true">{selected === index ? '✓' : ''}</b>
            </button>
          ))}
        </div>

        {submitted && (
          <div className="clip-quiz-feedback" role="status">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>Response area ready</strong>
              <p>The correct answer and a short explanation will appear here once the final quiz content is added.</p>
            </div>
          </div>
        )}

        <div className="clip-quiz-actions">
          <button type="button" className="clip-quiz-secondary" onClick={() => setStarted(false)}>
            Close quiz
          </button>
          {!submitted ? (
            <button type="button" className="quiz-button" onClick={checkChoice} disabled={selected === null}>
              Check my choice
            </button>
          ) : (
            <button type="button" className="quiz-button" onClick={resetQuiz}>
              Try the structure again <span aria-hidden="true">↻</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
