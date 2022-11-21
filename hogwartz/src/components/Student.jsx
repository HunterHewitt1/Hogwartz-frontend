const Student = (props)=>{
    console.log(props.studentsList)
    return (
        <div>
            <div>
                <h1>{props.studentsList.name}</h1>
            </div>
            {/* <div>
                <h2>house</h2>
            </div>
            <div>
                <h2>courses</h2>
            </div> */}
            <div>
                <h2>{props.studentsList.email}</h2>
            </div>
            {/* <div>
                <h3>gpa</h3>
            </div> */}
        </div>
    )
}
export default Student