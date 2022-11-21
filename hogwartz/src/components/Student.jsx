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



    return (
        <div style={studentCardStyle}>
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
            <button onClick={()=>props.viewStudent(props.studentid)}>
                see student details
            </button>
        </div>
    )
}
export default Student