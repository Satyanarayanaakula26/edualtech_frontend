import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
 import {Link} from 'react-router-dom'

export default function Navbar(){
    const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };
    return(
    <header>
    <nav className="navbar">
    <div className="logo">
      <h1>EduAltTech</h1>
    </div>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li>
    <Dropdown
     show={show}
     onMouseEnter={showDropdown}
     onMouseLeave={hideDropdown}
     >
      <Dropdown.Toggle variant="primary" id="dropdown-users">
        Users
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/home">
          Students
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/home">
          Educators
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className='nav-right'>
    <i className='bi bi-cart-fill'></i>
      <Link to="/signin" id="nav-btn"><button className='btn btn-success'>Login</button></Link>
      </div>
      </nav>
      </header>
    );
}