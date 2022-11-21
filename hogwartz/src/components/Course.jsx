const Course = ({courses})=>{
    return (
        <div>
            <div>
                <h1>{courses.name}</h1>
            </div>
            <div>
                <h1>{courses.gpa}</h1>
            </div>
        </div>
    )
}
export default Course