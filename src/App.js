
import Dropdown from 'react-bootstrap/Dropdown';
import{
  BrowserRouter as Router ,Routes,Route,Link
} from 'react-router-dom'
import './App.css';
import './components/topcourses.css'
import './components/profile.css';
import './components/coursedis.css';
import './components/team.css';
import './components/contact.css';
import './components/cart.css';
import './components/about.css';
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Edcourses from './components/Edcourses';
import Nonedcourses from './components/Nonedcourses';
import Courses from './components/courses';
import Services from './components/services';
import Navbar from './components/navbar';
import CourseDisplay from './components/coursedisplay';
import { Team } from './components/team';
import { TopCourses } from './components/Topcourses';
import { Contact } from './components/contact';
import { Cart } from './components/cart';
import { About } from './components/about';
import Profile from './components/profile';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    {/* <Home/>
    <Services/>
    <Courses/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/signin'element={<Signin/>}/>
    <Route path='/Edcourses'element={<Edcourses/>}/>
    <Route path='/Nonedcourses' element={<Nonedcourses/>}/>
    <Route path='/course_display'element={<CourseDisplay/>}/>
   </Routes>
   <Services/>
   <TopCourses/>
    <About/>
   <Team/>
   <Contact/>
   </Router>
   </>
  );
}

export default App;
