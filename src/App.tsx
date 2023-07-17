import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home'
import { BlogManager } from './components/BlogManager/BlogManager';
import { PostManager } from './components/PostManager/PostManager';
import { Header } from './components/Header/Header';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogManager />} />
        <Route path='/post/:postId' element={<PostManager />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
  </Router>
  )
}

export default App
