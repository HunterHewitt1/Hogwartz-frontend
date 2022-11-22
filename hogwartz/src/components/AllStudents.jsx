import {useState,useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import { useParams } from 'react-router-dom'
import Search from './Search'
import {  useNavigate } from 'react-router-dom'
import Student from './Student'
import Nav from './Nav'
import '../Style/index.css'


const AllStudents = ({viewStudent}) => {
  const allstudentsstyle = {
    backgroundColor:'#111'
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

const handleSubmit =(e)=>{
  e.preventDefault()
  const searchQueryStudent = searchQuery
  setSearchQuery('')
  navigate(`/search-results/${searchQueryStudent}`)
}

const handleChange =(e)=>{
  setSearchQuery(e.target.value.toLowerCase())
}
const sayHello = () => { console.log('hi')}
// console.log(viewStudent)

const pstyle = {
  fontSize: "1.2em",
  lineHeight: "150%",
  textAlign: "center",
  color: "MintCream",
  letterSpacing: ".5px"
}

return(
  <div style={allstudentsstyle}>
          <Nav />

    <Search onSubmit={handleSubmit}handleChange={handleChange} value={searchQuery}/>
    <p style={pstyle} >List of all students</p>
    {students.map((student) => (
                <Student
                  studentid={student.id}
                  studentsList={student}
                  key={student.id}
                  viewStudent={()=>viewStudent(student.id)}
                  />
            ))}
  </div>
)}

export default AllStudents