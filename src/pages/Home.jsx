import { Link } from 'react-router-dom'
import clips from '../data/clips'

export default function Home() {
  return (
    <>
      <section className="home-hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">CYBERSECURITY THROUGH SCREEN STORIES</p>
          <h1>Security<br />in Cinema</h1>
        </div>
        <div className="hero-introduction">
          <p>Explore how familiar scenes from film and television can reveal real security risks involving trust, identity, privacy, attention, and decision-making.</p>
          <a className="text-link" href="#clips">Browse the clips <span aria-hidden="true">↓</span></a>
        </div>
        <a className="image-credit" href="https://teachprivacy.com/" target="_blank" rel="noreferrer">Image: TeachPrivacy</a>
      </section>

      <section className="clips-section page-width" id="clips" aria-labelledby="clips-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CLIP LIBRARY</p>
            <h2 id="clips-heading">Explore the scenes</h2>
          </div>
          <p>{clips.length} clips</p>
        </div>

        <div className="clip-grid">
          {clips.map((clip, index) => (
            <Link className="clip-card" to={`/clips/${clip.id}`} key={clip.id}>
              <div
                className={clip.cover ? 'clip-cover has-cover' : 'clip-cover'}
                style={clip.cover ? { backgroundImage: `url(${clip.cover})`, backgroundPosition: clip.coverPosition } : undefined}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="clip-card-content">
                <div><p>{clip.film}</p><h3>{clip.title}</h3></div>
                <span className="view-label">View clip page</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="activities-section page-width" aria-labelledby="activities-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LEARNING ACTIVITIES</p>
            <h2 id="activities-heading">Check your understanding</h2>
          </div>
        </div>
        <div className="activity-grid">
          <Link className="activity-card activity-quiz" to="/quiz">
            <span>01</span>
            <div><p>10 QUESTIONS</p><h3>Knowledge Quiz</h3><small>Test common cybersecurity concepts and safer decisions.</small></div>
            <b aria-hidden="true">→</b>
          </Link>
          <Link className="activity-card activity-match" to="/concept-match">
            <span>02</span>
            <div><p>5 TERMS PER SET</p><h3>Concept Match</h3><small>Connect security terms with their correct definitions.</small></div>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>
    </>
  )
}
