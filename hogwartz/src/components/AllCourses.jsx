import {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import Search from './Search'
import axios from 'axios'
import Course from '../components/Course'
import { BASE_URL } from '../globals'

const AllCourses = () => {
  const allcoursesstyle = {
  }
  const navigate = useNavigate()
  const [searchQuery,setSearchQuery] = useState('')
  const [courses,setCourses]= useState([])

  const getAllCourses = async ()=>{
    const response = await axios.get(`${BASE_URL}/courses`)
    setCourses(response.data)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    const searchQueryCourses = searchQuery
    setSearchQuery('')
    navigate(`/search-results/${searchQueryCourses}`)
  }
  
  const handleChange =(e)=>{
    setSearchQuery(e.target.value.toLowerCase())
  }
  useEffect(()=>{
    getAllCourses()},[])
return(
  <div style={allcoursesstyle}>
  <Search onSubmit={handleSubmit}handleChange={handleChange} value={searchQuery}/>
    <p>List of all courses</p>
    {courses.map((course) => (
                <Course
                  courseslist={course}
                  key={course.id}
                />
            ))}
  </div>
)
}

export default AllCourses