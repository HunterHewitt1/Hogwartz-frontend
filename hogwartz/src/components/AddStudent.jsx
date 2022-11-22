import axios from 'axios'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {BASE_URL} from '../globals'
import Nav from './Nav'

const AddStudent =()=>{
    const navigate = useNavigate()
    const initialFormValues ={
        name: '',
        email:''
    }
  
    const [formValues,setFormValues]=useState(initialFormValues)



const handleChange =(e) =>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
}
const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(formValues)

    const newStudent = await axios.post(
        `${BASE_URL}/students/new`,formValues).then((response)=>{
        return response;
    })
    .catch((error)=>{
        console.error(error)
    })
    setFormValues(initialFormValues)
    navigate('/allstudents')
}
const inputStyle = {
    width: '400px',
    margin: '0.75rem 0',
    padding: '0.75rem 1.5rem',
    outline: 'none',
    fontSize: '1.5em',
    borderRadius: '10px',
    backgroundColor: 'black',
    border: 'none',
    color: 'white',
    borderBottom: '4px solid #515867'
}
const formStyle = {
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
  marginTop: '10px',
  backgroundColor: 'PaleGoldenRod'
}

return (
    <>
    <Nav />
    <div className="addStudentPage" style={formStyle}>
              

			<form onSubmit={handleSubmit}>
				<h1>Creating New Student</h1>
				<div>
					<label htmlFor="name"> Student Name: </label>
					<input
            style={inputStyle}
						type="text"
						name="name"
						onChange={handleChange}
						value={formValues.name}
					/>
				</div>
	
				<div>
					<label>Email: </label>
					<input
            style={inputStyle}
						type="email"
						name="email"
						onChange={handleChange}
						value={formValues.email}
					/>
				</div>

				<button>Submit</button>
			</form>
		</div>
        </>
)
}

export default AddStudent;