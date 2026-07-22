import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ClipPage from './pages/ClipPage'
import Quiz from './pages/Quiz'
import ConceptMatch from './pages/ConceptMatch'
import Glossary from './pages/Glossary'
import NotFound from './pages/NotFound'

// Main routes stay together so new learning pages are easy to find and update.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="clips/:clipId" element={<ClipPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="concept-match" element={<ConceptMatch />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
