import Nav from './components/Nav'
import Home from './components/Home'
import AllStudents from './components/AllStudents'
import { Form, Route, Routes } from 'react-router-dom'
import SearchResults from './pages/SearchResults'
import AddStudent from './components/AddStudent'
import AddCourse from './components/AddCourse'
import AllCourses from './components/AllCourses'
import StudentProfile from './components/StudentProfile'
import { BASE_URL } from './globals'
import axios from 'axios'
import { useParams, useState } from 'react'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results/:search" element={<SearchResults />} />
        <Route path="/allstudents" element={<AllStudents />} />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/studentprofile/:id" element={<StudentProfile />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </div>
  )
}

export default App
