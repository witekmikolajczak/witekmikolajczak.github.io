import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App(): JSX.Element {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 py-6 md:py-10">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<ComingSoonPage />} />
          <Route path="/blog/:slug" element={<ComingSoonPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
