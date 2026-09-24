import { assets } from '../../assets/frontend_assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experiance download<br /> Tomato App</p>
        <div className="app-down-platform">
            <img src={assets.play_store} alt="playstore" />
            <img src={assets.app_store} alt="appstore" />
        </div>
      
    </div>
  )
}

export default AppDownload
