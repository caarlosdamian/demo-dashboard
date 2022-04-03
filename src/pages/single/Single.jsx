import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './single.scss'

const Single = () => {
  let location = useLocation()
  console.log(location)
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleConatiner">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={location.state.img} alt="user" className="itemImg" />
            </div>
            details
          </div>
          <div className="right">

          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single