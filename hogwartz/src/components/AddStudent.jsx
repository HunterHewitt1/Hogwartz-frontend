import axios from 'axios'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {BASE_URL} from '../globals'

const AddStudent =()=>{
    const navigate = useNavigate()
    const initialFormValues ={
        name: '',
        email:'',
       

    }
  
    const [formValues,setFormValues]=useState(initialFormValues)



const handleChange =(e) =>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
}
const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(formValues)

    const newStudent = await axios.post(
        `${BASE_URL}/student`,formValues).then((response)=>{
        return response;
    })
    .catch((error)=>{
        console.error(error)
    })
    setFormValues(initialFormValues)
    navigate(-1)
}
return (
    <div className="addStudentPage">
			<form onSubmit={handleSubmit}>
				<h1>Creating New Student</h1>
				<div>
					<label htmlFor="name"> Student Name: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={formValues.name}
					/>
				</div>
	
				<div>
					<label>Email: </label>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={formValues.email}
					/>
				</div>

				<button>Submit</button>
			</form>
		</div>

)
}

export default AddStudent;