import axios from 'axios'
import { BASE_URL } from '../globals'
import { useParams, useState } from 'react'
import { useEffect } from 'react'

const StudentCourseCard = (props) => {
// console.log(props.courses)
let studentId = window.location.href.split('/').reverse()[0]
const [details, setDetails] = useState([])
const [scores, setScores] = useState([])
const [courses, setCourses] = useState([])
const [mean,setMean] = useState(null)


const viewdetails = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/theOne/${studentId}`)
    setDetails(res.data)
    setScores(res.data.gradeScore.map(({ score }) => score))
    setCourses(res.data)
  } catch (error) {
    console.log(error)
  }
}
console.log(details.courses)

useEffect(() => {
  viewdetails()
}, [])

let sum = 0;

for (const value of scores) {
  sum += value;
}

console.log(sum/scores.length); 

return(<div>
    <h1>{props.courses}</h1>
    <h1>gpa: {sum/scores.length}</h1>
  </div>)
}
export default StudentCourseCard