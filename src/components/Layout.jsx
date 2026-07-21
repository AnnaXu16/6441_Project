import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" to="/" aria-label="Security in Cinema home">
            <span className="wordmark-icon" aria-hidden="true">S</span>
            <span>Security in Cinema</span>
          </Link>
          <nav aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/concept-match">Concept Match</NavLink>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>Security in Cinema</span>
          <p>A university cybersecurity learning project.</p>
        </div>
      </footer>
    </div>
  )
}
