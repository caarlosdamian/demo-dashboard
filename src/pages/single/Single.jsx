import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './single.scss'

const Single = () => {
  let params = useParams();
  console.log(params)
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
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
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