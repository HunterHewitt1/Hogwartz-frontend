const Course = ({courses})=>{
    return (
        <div>
            <div>
                <h1>{courses.name}</h1>
            </div>
            <div>
                <h1>{courses.studentId}</h1>
            </div>
            <div>
                <h1>{courses.grade}</h1>
            </div>
        </div>
    )
}
export default Course