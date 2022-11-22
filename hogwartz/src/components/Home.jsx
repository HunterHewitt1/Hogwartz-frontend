import Nav from './Nav'
import '../Style/index.css'
const Home = () => {

const homestyle = {
  backgroundSize: 'cover',
  top:'0',
  left:'0',
  color:'white',
  marginTop: '0',
  marginLeft: '0',
  position: 'fixed',
  left:'0',
  margin: '0',
  marginBlockStart: "0",
  marginBlockEnd: "0",
  outline: '0',
  height:'100%',
  width:'100%',
  // backgroundColor:'#55A9C1',
  // backgroundImage: `url(${Background})`
}
const pstyle = {
  // position: 'fixed',
  // top:'0',
  // left:'0',
  // margin: '0',
  // marginBlockStart: "0",
  // marginBlockEnd: "0"
}

  return (
    <div className="homebody" style={homestyle}>
      <Nav />
      <div className="container">
      <h1 className="homeh1">Welcome to Hogwartz</h1>
      <h2 className="homehp" style={pstyle}>"never tickle a sleeping dragon"</h2>
      </div>
    </div>
  )
}

export default Home