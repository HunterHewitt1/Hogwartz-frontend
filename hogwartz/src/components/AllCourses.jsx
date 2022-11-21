import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import axios from 'axios'
import Course from '../components/Course'
import { BASE_URL } from '../globals'

const AllCourses = () => {
  const allcoursesstyle = {
    backgroundColor: 'pink'
  }
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [courses, setCourses] = useState([])

  const getAllCourses = async () => {
    const response = await axios.get(`${BASE_URL}/courses`)
    setCourses(response.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchQueryCourses = searchQuery
    setSearchQuery('')
    navigate(`/search-results/${searchQueryCourses}`)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }
  useEffect(() => {
    getAllCourses()
  })
  return (
    <div style={allcoursesstyle}>
      <p>List of all courses</p>
      <Search
        onSubmit={handleSubmit}
        handleChange={handleChange}
        value={searchQuery}
      />
      {courses.map((course) => {
        <Course courses={course} />
      })}
    </div>
  )
}

export default AllCourses
