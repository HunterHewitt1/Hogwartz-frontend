import { BASE_URL } from '../globals'
import axios from 'axios'
import { useParams, useState } from 'react'
import { useEffect } from 'react'
import StudentCourseCard from './StudentCourseCard'
import Nav from './Nav'

const StudentProfile = () => {
  let id = window.location.href.split('/').reverse()[0]
  const [student, setStudent] = useState('')

  const viewStudent = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/students/${id}`)
      setStudent(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  
  useEffect(() => {
    viewStudent()
  }, [])


  
// console.log(student.courses)
// const courseList = student.courses
// console.log(courseList)
const ff = {
  color:'white'
}
  return(
    <div style={ff}>
            <Nav />

<h1>{student.name}</h1>
<h3>{student.email}</h3>
<StudentCourseCard courses={student.courses} />
</div>
  )

}

export default StudentProfile