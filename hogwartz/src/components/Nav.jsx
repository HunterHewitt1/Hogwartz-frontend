import AllStudents from './AllStudents'
import Search from './Search'
import { Link } from 'react-router-dom'

const Nav = () => {
const navstyle = {
  backgroundColor: 'red'
}
  return (
  <div style={navstyle}>
    <Link to={'/allstudents'}>All Students</Link>
    <Link to={'/addstudent'}>Add Student</Link>
    <Link to={'/'}>Home</Link>
  </div>
)
}
export default Nav