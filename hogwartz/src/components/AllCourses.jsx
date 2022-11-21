import {useState} from 'react'
import Search from './Search'
import {  useNavigate } from 'react-router-dom'

const AllCourses = () => {
  const allcoursesstyle = {
    backgroundColor:'pink'
  }
  const navigate = useNavigate()
  const [searchQuery,setSearchQuery] = useState('')
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    const searchQueryCourses = searchQuery
    setSearchQuery('')
    navigate(`/search-results/${searchQueryCourses}`)
  }
  
  const handleChange =(e)=>{
    setSearchQuery(e.target.value.toLowerCase())
  }
return(
  <div style={allcoursesstyle}>
    <p>List of all courses</p>
    <Search onSubmit={handleSubmit}handleChange={handleChange} value={searchQuery}/>
  </div>
)
}

export default AllCourses