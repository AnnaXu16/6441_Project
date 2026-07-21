import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ClipPage from './pages/ClipPage'
import Quiz from './pages/Quiz'
import ConceptMatch from './pages/ConceptMatch'
import NotFound from './pages/NotFound'

// The site has a simple home, quiz, and one reusable page for all clips.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="clips/:clipId" element={<ClipPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="concept-match" element={<ConceptMatch />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
