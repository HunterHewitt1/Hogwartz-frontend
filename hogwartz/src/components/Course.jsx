import { Link } from "react-router-dom"
import '../Style/index.css'

const Course = (props)=>{
    const courseCardStyle = {
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
        maxWidth: '268px',
        textAlign: 'left',
        color: 'black',
        backgroundColor:'#235789'  
    }

    return (
        <div style={courseCardStyle}>
            <div>
                <h1>{props.courseslist.name}</h1>
            </div>
            <div>
                <h1>grade = {props.courseslist.grade}</h1>
            </div>
            <button>
                <Link to={`/courseprofile/${props.courseslist.id}`}>get details</Link>
            </button>
        </div>
    )
}
export default Course