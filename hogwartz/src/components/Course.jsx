const Course = (props)=>{
    return (
        <div>
            <div>
                <h1>{props.courseslist.name}</h1>
            </div>
            <div>
                <h1>grade = {props.courseslist.grade}</h1>
            </div>
        </div>
    )
}
export default Course