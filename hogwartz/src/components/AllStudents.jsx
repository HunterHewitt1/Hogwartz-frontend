import {useState} from 'react'
import Search from './Search'
import {  useNavigate } from 'react-router-dom'

const AllStudents = () => {
  const allstudentsstyle = {
    backgroundColor:'yellow'
  }
  const navigate = useNavigate()
const [searchQuery,setSearchQuery] = useState('')

const handleSubmit =(e)=>{
  e.preventDefault()
  const searchQueryStudent = searchQuery
  setSearchQuery('')
  navigate(`/search-results/${searchQueryStudent}`)
}

const handleChange =(e)=>{
  setSearchQuery(e.target.value.toLowerCase())
}
return(
  <div style={allstudentsstyle}>
    <p>List of all students</p>
    <Search onSubmit={handleSubmit}handleChange={handleChange} value={searchQuery}/>
  </div>
)
}

export default AllStudents