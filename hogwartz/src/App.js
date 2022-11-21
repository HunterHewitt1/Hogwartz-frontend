import Nav from './components/Nav'
import Home from './components/Home'
import AllStudents from './components/AllStudents'
import { Route, Routes } from 'react-router-dom'
import SearchResults from './pages/SearchResults'
import AddStudent from './components/AddStudent'
import AddCourse from './components/AddCourse'
import AllCourses from './components/AllCourses'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search-results/:student" element={<SearchResults />} /> */}
        <Route path="/allstudents" element={<AllStudents />} />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </div>
  )
}

export default App
