import { Link, useParams } from 'react-router-dom'
import clips from '../data/clips'
import NotFound from './NotFound'

export default function ClipPage() {
  const { clipId } = useParams()
  const clip = clips.find(item => item.id === clipId)

  if (!clip) return <NotFound />

  return (
    <section className="placeholder-page page-width">
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
            {clip.coverSource && <a href={clip.coverSource} target="_blank" rel="noreferrer">Cover image source</a>}
          </div>
        </>
      )}
      <div className="empty-content">
        <span>{clip.youtubeId ? 'Analysis coming later' : 'Content coming later'}</span>
        <p>This page is ready for the questions and analysis you provide next.</p>
      </div>
    </section>
  )
}
