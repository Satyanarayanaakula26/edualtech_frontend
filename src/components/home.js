import react from 'react';
import '../App.css';
  import {Link} from 'react-router'

export default function Home(props){
  return(
    <>
      <section className="home-content">
      <div className="home-left">
        <h1> <span>Learn</span><span> Grow</span><span> Succeed</span></h1>
        <p>
          Get 24/7 live mentorship,flexible alternative education,and seamless communication support all in one powerful platform.We are here to close learning gaps and empower every student to succeed,their way.
        </p>
      </div>
      <div class="home-right">
      <img className="home-image"/>
      </div>
      <button className="btn btn-success">Get Started</button>
      <div class="highlight">
        <ul>
          <li>
            <img src="assets/learnerpic.png" height="50px" width="50px"/>
            <div class="highlight-matter">
            <h5>100+</h5>
            <h6>Learners</h6>
            <p>Who joined and finding ways to chase their dreams</p>
            </div>
          </li>
          <li>
            <img src="assets/coursespic.png" height="50px" width="50px"/>
            <div class="highlight-matter">
            <h5>Versatile </h5>
            <h6>Courses</h6>
            <p>Variety of courses for every section of Learners</p>
            </div>
          </li>
          <li>
            <img src="assets/educatorpic.png" height="50px" width="50px"/>
           <div class="highlight-matter">
            <h5>Skilled </h5>
            <h6>Educators</h6>
            <p>Who are crafting their identity by showcasing their skills</p>
            </div>
          </li>
        </ul>
        
      </div>
      </section>
      </>
  );
}