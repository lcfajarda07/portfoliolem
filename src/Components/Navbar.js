import React,{useState} from "react";
import { Button, Navbar,Menu,Item,Dropdown,Container} from "react-bulma-components";
import { Link } from "react-scroll";


const Navbars = props => {

  //hooks
  // const [visible, setVisible] = useState(false);
  // const [about, setAbout] =useState(false);
  // const [projects, setProjects] =useState(false);
  // const [contact, setContact] =useState(false);
  // const [landing, setLanding] =useState(false);

  // const aboutClickHandler = () =>{
  //   console.log("you clicked the about tab");
  //   setVisible(true);
  //   setAbout(true);
  //   setProjects(false);
  //   setContact(false);
  //   props.about();
  // };
  // const projectsClickHandler = () =>{
  //   console.log("you clicked the projects tab");
  //   setVisible(true);
  //   setAbout(false);
  //   setProjects(true);
  //   setContact(false);
  //   props.projects();
  // };
  // const contactClickHandler = () =>{
  //   console.log("you clicked the contact tab");
  //   setVisible(true);
  //   setAbout(false);
  //   setProjects(false);
  //   setContact(true);
  //   props.contact();
  // };
  //  const landingClickHandler = () =>{
  //   setVisible(true);
  //   setAbout(false);
  //   setProjects(false);
  //   setContact(false)
  //   setLanding(true);
  //   props.landing();
  // };


    return (
      // <Navbar

      // >
      //   <Navbar.Brand>
      //     <Navbar.Item  active={visible && landing ? true : false}  onClick={landingClickHandler} >
      //       <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      //     </Navbar.Item>
      //     <Navbar.Burger />
      //   </Navbar.Brand>
      //   <Navbar.Menu >
      //     <Navbar.Container>
      //       <Navbar.Item dropdown hoverable href="#">
        
           
      //           <Navbar.Item  active={visible && about ? true : false}
      //                            onClick={aboutClickHandler}>
      //             About
      //           </Navbar.Item>
      //           <Navbar.Item active={visible && projects ? true : false}
      //              onClick={projectsClickHandler}>  
      //             Projects
      //           </Navbar.Item>
            
      //       </Navbar.Item>
      //       <Navbar.Item  active={visible && contact ? true : false}
      //              onClick={contactClickHandler}>
      //        Contact
      //       </Navbar.Item>
      //     </Navbar.Container>
      //     <Navbar.Container position="end">
      //       <Navbar.Item href="#">
             
      //       </Navbar.Item>
      //     </Navbar.Container>
      //   </Navbar.Menu>
      // </Navbar>

       // <Navbar

      // >
      <Navbar color="black" id="nav">
        <Navbar.Brand>
          <Navbar.Item  >
           <Link
                 activeClass="active"
                 to="bglanding"
                 spy={true}
                 smooth={true}  
                 offset={-70}
                 duration={500}>
              <h1>LCF</h1>
                 </Link>
           
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
        
           
         
                <Navbar.Item>  
                  <Link
          activeClass="active"
           to="aboutcontainer"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            About
            </Link>
                </Navbar.Item>
           
            </Navbar.Item>

            <Navbar.Item>
           
            </Navbar.Item>
            <Navbar.Item >
                <Link
          activeClass="active"
           to="projectcontainer"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            Projects
            </Link>

            </Navbar.Item>

               <Navbar.Item  >
                    <Link
          activeClass="active"
           to="contactcontainer"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            Contact
            </Link>
                </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">
                  <Button>Resume</Button>             
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>

  
    );

};

export default Navbars;