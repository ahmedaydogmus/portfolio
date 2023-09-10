import './topbar.scss';
import {Person, Mail} from '@mui/icons-material';


const Topbar = ({menuOpen, setMenuOpen}) => {
  
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className="left">
          <a className='logo' href="#intro">genius.</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+90 546 840 8306</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>ahmedaydogmus0@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar