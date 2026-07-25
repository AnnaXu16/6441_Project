import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import clips from '../data/clips'
import ClipQuiz from '../components/ClipQuiz'
import NotFound from './NotFound'

const defaultAnalysisSections = [
  { title: 'What happens in the scene?' },
  { title: 'What security weakness is exploited?' },
  { title: 'Why does the attack work?' },
  { title: 'Attack breakdown' },
  { title: 'Real-world cybersecurity connection' },
  { title: 'How to defend against it' },
  { title: 'Key takeaway' },
]

// Analysis data can link technical terms directly to their glossary definitions.
function formatAnalysisText(text) {
  return text.split(/(\[\[.+?\|.+?\]\])/g).map((part, index) => {
    const match = part.match(/^\[\[(.+?)\|(.+?)\]\]$/)
    if (!match) return part

    const [, label, glossaryId] = match
    return (
      <Link className="glossary-term-link" to={`/glossary#${glossaryId}`} key={`${glossaryId}-${index}`}>
        {label}
      </Link>
    )
  })
}

export default function ClipPage() {
  const { clipId } = useParams()
  const clip = clips.find(item => item.id === clipId)
  const sections = clip?.analysisSections || defaultAnalysisSections

  // Moving between clips uses the same page component, so reset its scroll position.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [clipId])

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
          <h2 id="analysis-heading">Scene analysis</h2>
        </div>

        <div className="analysis-grid">
          {sections.map(section => (
            <article
              className={`analysis-card ${section.paragraphs?.length ? 'has-content' : ''}`}
              key={section.title}
            >
              <h3>{section.title}</h3>
              {section.paragraphs?.length > 0 && (
                <div className="analysis-copy">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph}>{formatAnalysisText(paragraph)}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <ClipQuiz key={clip.id} clipTitle={clip.title} />
    </section>
  )
}
