import {useState,useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'

import Search from './Search'
import {  useNavigate } from 'react-router-dom'
import Student from './Student'

const AllStudents = () => {
  const allstudentsstyle = {
    backgroundColor:'yellow'
  }
  const navigate = useNavigate()
const [searchQuery,setSearchQuery] = useState('')
const [students, setStudents] = useState([])

  const getAllStudents = async () => {
    const res = await axios.get(`${BASE_URL}/students/`)
    setStudents(res.data)
  }
  useEffect(() => {
    getAllStudents()
  }, [])
  // console.log(students)

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
    <Search onSubmit={handleSubmit}handleChange={handleChange} value={searchQuery}/>
    <p>List of all students</p>
    {students.map((student) => (
                <Student
                  studentsList={student}
                />
            ))}
  </div>
)}

export default AllStudents