import { assets } from '../../assets/frontend_assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <img src={assets.logo} alt="Logo" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus soluta aspernatur fuga quam sed, eaque sint ad consectetur aperiam totam?</p>
            <div className="social-icon">
                <img src={assets.facebook_icon} alt="FB" />
                <img src={assets.linkedin_icon} alt="Linkedin" />
                <img src={assets.twitter_icon} alt="Twitter" />
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Our Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-62021-83832</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
