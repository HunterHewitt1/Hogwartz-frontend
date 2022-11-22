import { BASE_URL } from '../globals'
import axios from 'axios'
import { useParams, useState } from 'react'
import { useEffect } from 'react'


const StudentProfile = () => {
  let id = window.location.href.split('/').reverse()[0]
  console.log(id)
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

console.log(student)
  return(
    <div>
<h1>{student.name}</h1>
<h3>{student.email}</h3>
<h3>courses</h3>
<h3>gpa</h3>
</div>
  )

}

export default StudentProfile