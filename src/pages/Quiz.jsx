import { useState } from 'react'
import { Link } from 'react-router-dom'
import quizQuestions from '../data/quizQuestions'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const item = quizQuestions[current]
  const isCorrect = selected === item.correctIndex

  function checkAnswer() {
    if (selected === null || revealed) return
    if (isCorrect) setScore(value => value + 1)
    setRevealed(true)
  }

  function nextQuestion() {
    if (current === quizQuestions.length - 1) {
      setFinished(true)
      return
    }
    setCurrent(value => value + 1)
    setSelected(null)
    setRevealed(false)
  }

  function restartQuiz() {
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setScore(0)
    setFinished(false)
  }

  return (
    <section className="quiz-page page-width">
      <Link className="back-link" to="/">← Home</Link>
      <div className="quiz-title">
        <p className="eyebrow">KNOWLEDGE QUIZ</p>
        <h1>Test your knowledge</h1>
        <p>Answer ten questions covering common cybersecurity concepts and safer decision-making.</p>
      </div>

      {finished ? (
        <div className="quiz-result" aria-live="polite">
          <span className="result-label">QUIZ COMPLETE</span>
          <strong>{score}<small> / {quizQuestions.length}</small></strong>
          <h2>{score >= 8 ? 'Excellent work.' : score >= 6 ? 'Good progress.' : 'Keep learning.'}</h2>
          <p>You can review the concepts and try again whenever you are ready.</p>
          <button type="button" className="quiz-button" onClick={restartQuiz}>Try again</button>
        </div>
      ) : (
        <div className="quiz-card">
          <div className="quiz-progress">
            <span>Question {current + 1} of {quizQuestions.length}</span>
            <span>Score {score}</span>
          </div>
          <div className="quiz-body">
            <h2>{item.question}</h2>
            <div className="answer-list">
              {item.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index)
                const classNames = ['answer-option']
                if (selected === index) classNames.push('selected')
                if (revealed && index === item.correctIndex) classNames.push('correct')
                if (revealed && selected === index && index !== item.correctIndex) classNames.push('incorrect')

                return (
                  <button
                    type="button"
                    className={classNames.join(' ')}
                    key={option}
                    onClick={() => !revealed && setSelected(index)}
                    disabled={revealed}
                    aria-pressed={selected === index}
                  >
                    <span>{letter}</span>
                    <strong>{option}</strong>
                  </button>
                )
              })}
            </div>

            {revealed && (
              <div className={isCorrect ? 'answer-feedback correct-feedback' : 'answer-feedback incorrect-feedback'} aria-live="polite">
                <strong>{isCorrect ? 'Correct' : `Not quite — the correct answer is ${String.fromCharCode(65 + item.correctIndex)}.`}</strong>
                <p>{item.explanation}</p>
              </div>
            )}

            <div className="quiz-actions">
              {!revealed ? (
                <button type="button" className="quiz-button" disabled={selected === null} onClick={checkAnswer}>Check answer</button>
              ) : (
                <button type="button" className="quiz-button" onClick={nextQuestion}>{current === quizQuestions.length - 1 ? 'See result' : 'Next question'} <span aria-hidden="true">→</span></button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
