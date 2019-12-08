import React from "react";
import {Card,Button,Media,Item,Heading,Image,Content,Modal,OpenModal,Container,Section} from "react-bulma-components";




const Projects = props => {
return(

<div id="projectcontainer">
  <Card id="proj">
      <Card.Image size="4by3" src="/images/capstone1.png"/>
        
      <Card.Content>
        <Media>
         <h3><strong>{props.name}</strong></h3>
       
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
         
        </Content>
        <div class="buttonproj">
        <Button>Visit my website</Button>
        </div>
      </Card.Content>
    </Card>


  <Card id="proj">
      <Card.Image size="4by3" src="/images/capstone2.png"/>
        
      <Card.Content>
        <Media>
         <h3><strong>{props.name}</strong></h3>
       
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
   
        </Content>
        <div class="buttonproj">
        <Button>Visit my website</Button>
        </div>
      </Card.Content>
    </Card>

     <Card id="proj">
      <Card.Image size="4by3" src="/images/capstone3.png"/>
        
      <Card.Content>
        <Media>
         <h3><strong>{props.name}</strong></h3>
       
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        
        </Content>
        <div class="buttonproj">
        <Button >Visit my website</Button>
        </div>
      </Card.Content>
    </Card>


    </div>


	);
};



export default Projects;