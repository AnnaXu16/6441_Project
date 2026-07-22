import { Link, useParams } from 'react-router-dom'
import clips from '../data/clips'
import ClipQuiz from '../components/ClipQuiz'
import NotFound from './NotFound'

const analysisSections = [
  'What happens in the scene?',
  'What security weakness is exploited?',
  'Why does the attack work?',
  'Attack breakdown',
  'Real-world cybersecurity connection',
  'How to defend against it',
  'Key takeaway',
]

export default function ClipPage() {
  const { clipId } = useParams()
  const clip = clips.find(item => item.id === clipId)

  if (!clip) return <NotFound />

  return (
    <section className="clip-page placeholder-page page-width">
      <Link className="back-link" to="/">← All clips</Link>
      <p className="eyebrow">CLIP ANALYSIS · {clip.film.toUpperCase()}</p>
      <h1>{clip.title}</h1>
      {clip.youtubeId && (
        <>
          <div className="video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${clip.youtubeId}${clip.youtubeEnd ? `?end=${clip.youtubeEnd}` : ''}`}
              title={clip.videoTitle}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="media-credits">
            <a href={`https://www.youtube.com/watch?v=${clip.youtubeId}`} target="_blank" rel="noreferrer">Watch on YouTube</a>
          </div>
        </>
      )}

      {!clip.youtubeId && (
        <div className="clip-media-placeholder">
          <span aria-hidden="true">▶</span>
          <strong>Clip placeholder</strong>
          <p>A video can be added here later.</p>
        </div>
      )}

      <section className="clip-analysis" aria-labelledby="analysis-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">READ THE BREAKDOWN</p>
            <h2 id="analysis-heading">Scene analysis</h2>
          </div>
        </div>

        <div className="analysis-grid">
          {analysisSections.map((heading, index) => (
            <article className="analysis-card" key={heading}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{heading}</h3>
            </article>
          ))}
        </div>
      </section>

      <ClipQuiz key={clip.id} clipTitle={clip.title} />
    </section>
  )
}
