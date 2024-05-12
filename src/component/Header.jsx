import '../App.css'
import logo from '../assets/swiggy-1.svg'

function Header() {
  return (
    <div className='nav'>
        <div className='nav-items'> 
            <div className='logo'> 
            <img src={logo} alt="" />
            <div>Other</div>
            </div>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Header
