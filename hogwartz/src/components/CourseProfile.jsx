import { BASE_URL } from '../globals'
import axios from 'axios'
import { useParams, useState } from 'react'
import { useEffect } from 'react'
import Nav from './Nav'

const CourseProfile = () => {
  let id = window.location.href.split('/').reverse()[0]
  const [course, setCourse] = useState('')

  const viewCourse = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/courses/${id}`)
      setCourse(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    viewCourse()
  }, [])
const bbb = {
  color:'white'
}
  return(
    <div style={bbb}>
      <Nav/>
<h3>course name: {course.name}</h3>
<h3>grade: {course.grade}</h3>
<h3>students enrolled list</h3>

</div>
  )

}

export default CourseProfile