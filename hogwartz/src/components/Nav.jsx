
import { Link } from 'react-router-dom'

const Nav = () => {
const navstyle = {
  backgroundColor: '#F57017',
  justifyContent: 'space-between',
  textAlign: 'center',
  padding: "40px 0"
}


  return (
  <div style={navstyle}>
    <Link to={'/'}>Home | </Link>
    <Link to={'/allstudents'}>All Students | </Link>
    <Link to={'/allcourses'}>All Coursess | </Link>
    <Link to={'/addstudent'}>Add Student | </Link>
    <Link to={'/addcourse'}>Add Course | </Link>
  </div>
)
}
export default Nav