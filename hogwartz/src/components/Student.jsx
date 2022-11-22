import { BASE_URL } from '../globals'
import axios from 'axios'
import { useParams, useState } from 'react'
import StudentProfile from './StudentProfile'
import { Link } from 'react-router-dom'
const Student = (props)=>{
    const studentCardStyle = {
        display: 'inlineBlock',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '16px',
        borderColor: '#eee #ddd #bbb',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
        margin: '0 auto 20px auto',
        padding: '0 16px 16px 16px',
        maxWidth: '468px',
        textAlign: 'left',
        color: 'black'       
    }

    const [student, setStudent] = useState('')

    const viewStudent = async (id) => {
        const res = await axios.get(`${BASE_URL}/students/${id}`)
        setStudent(res.data)
        console.log(student)
    }

    return (
        <div style={studentCardStyle}>
            <div>
                <h1>{props.studentsList.name}</h1>
            </div>
            <div>
                <h2>{props.studentsList.id}</h2>
            </div>
            <div>
                <h2>{props.studentsList.email}</h2>
            </div>
            <button onClick={()=>viewStudent(props.studentid)}>
                <Link to={`/studentprofile/${props.studentid}`}>get details</Link>
            </button>
        </div>
    )
}
export default Student