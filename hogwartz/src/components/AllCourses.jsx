import {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import Search from './Search'
import axios from 'axios'
import Course from '../components/Course'
import { BASE_URL } from '../globals'
import Nav from './Nav'

const AllCourses = () => {
  const allcoursesstyle = {
    backgroundColor:'#111'
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

    const pstyle = {
      fontSize: "1.2em",
      lineHeight: "150%",
      textAlign: "center",
      color: "MintCream",
      letterSpacing: ".5px"
    }
return(
  <div style={allcoursesstyle}>
          <Nav />

  <Search onSubmit={handleSubmit}handleChange={handleChange} value={searchQuery}/>
    <p style={pstyle}>List of all courses</p>
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