import React from "react";
import { Section,Box,Tile, Container,Heading,Columns,Button,Card,Media,Itam,Content,Image} from "react-bulma-components";
import ImageSlider from "./ImageSlider";


const About = props => {
return(

    <Container  id="aboutcontainer" className="has-text-centered">


<Columns>
  
    <Content id="color">
          <Heading size={5}>
          <h1 className="about1">About Me</h1>
            </Heading>
       
        </Content>
</Columns>

   <Columns>

     
   <Columns.Column size={1}>
           
         </Columns.Column>

          <Columns.Column id="container1" size={5}>
           <Heading size={1}>
           
            <Columns size={6}>
              
          <div class="flip-box">
              <div class="flip-box-inner">
              <div class="flip-box-front">
                  <img class="lcf" src="/images/lcf.jpg"/>
              </div>
              <div class="flip-box-back">
                   <img class="me" src="/images/me.jpg"/>
              </div>
             </div>
          </div>
            </Columns>
           </Heading>
          </Columns.Column>

          <Columns.Column id="container1" size={5}>
           <Heading size={5}>
           
            <Columns size={6}>
              <h1 className="about2">Hi I'm Lemuel C. Fajarda</h1>
              <h5 className="about2">      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
            </Columns>
           </Heading>
          </Columns.Column>

          <Columns.Column size={1}>
                 
         </Columns.Column>
          </Columns>


       
     


   <Columns>
          <Columns.Column size={1}>
                 
         </Columns.Column>

          <Columns.Column size={10}>
           <Heading size={1}>
           
              <Section>
      <Box>
        <Tile kind="ancestor">
          <Tile size={5} vertical>
            <Tile>
              <Tile kind="parent" vertical>
                <Tile renderAs="article" kind="child" notification color="dark" >
                  <Heading>Vertical...</Heading>
                  <Heading subtitle>Top tile</Heading>
                </Tile>
                <Tile renderAs="article" kind="child" notification color="info">
                  <Heading>Tiles...</Heading>
                  <Heading subtitle>Bottom Tile...</Heading>
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile renderAs="article" kind="child" notification color="info">
                  <Heading>Middle Tile...</Heading>
                  <Heading subtitle>With image Tile...</Heading>
                  <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
                </Tile>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="dark">
                <Heading>Wide tile</Heading>
                <Heading subtitle>Aligned with the right tile</Heading>
                <div className="content" />
              </Tile>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="dark">
              <div className="content">
                <Heading>Tall tile</Heading>
                <Heading subtitle>With even more content</Heading>
                <div className="content" />
              </div>
            </Tile>
          </Tile>
        </Tile>
      </Box>
    </Section>
           </Heading>
          </Columns.Column>

          <Columns.Column size={1}>
                 
         </Columns.Column>
          </Columns>



           <Columns>

     
   <Columns.Column size={1}>
           
         </Columns.Column>

          <Columns.Column id="container1" size={5}>
           <Heading size={1}>
           
            <Columns size={6}>
              
            <h1>heyyy</h1>
            </Columns>
           </Heading>
          </Columns.Column>

          <Columns.Column id="container1" size={5}>
           <Heading size={5}>
           
            <Columns size={6}>
              <h1 className="about2">Hi I'm Lemuel C. Fajarda</h1>
              <h5 className="about2">     The most inspiring words I ever heard come from the mind of Carl Sagan. He also wrote one of my favorite SciFi novels called "Contact". His reflections are inspired by a photograph of our planet, made by the Voyager 1 space probe as it was leaving our solar system. The photograph is famously known as the "Pale Blue Dot".

The text is too long to copy here, so here's   with him reading those words, as seen in the last scene of the 2014's "Cosmos: A SpaceTime Odyssey" documentary. Every time I watch it I get goosebumps. It inspires in me both humility and hope for a better tomorrow.</h5>
            </Columns>
           </Heading>
          </Columns.Column>

          <Columns.Column size={1}>
                 
         </Columns.Column>
          </Columns>


       <Columns>
        <Columns.Column size={1}>
                 
         </Columns.Column>
          <Columns.Column id="container" size={10}>
      <Card.Content>
        <Content id="color">
          <Heading size={1}>
          <h1 className="about">technologies</h1>
           <i id="icon" class="devicon-bootstrap-plain"></i>
           <i class="devicon-babel-plain"></i>
           <i class="devicon-express-original"></i>
           <i class="devicon-git-plain"></i>
           <i class="devicon-html5-plain"></i>
           <i class="devicon-javascript-plain"></i>
           <i class="devicon-laravel-plain"></i>
           <i class="devicon-jquery-plain"></i>
           <i class="devicon-mysql-plain"></i>
           <i class="devicon-php-plain"></i>
           <i class="devicon-react-original"></i>
           <i class="devicon-sass-original"></i>
           <i class="devicon-visualstudio-plain"></i>
           <i class="devicon-css3-plain"></i>
           <i class="devicon-mongodb-plain"></i>
           <i class="devicon-c-plain"></i>
           <i class="devicon-gitlab-plain"></i>
           <i class="devicon-heroku-original"></i>

            </Heading>
        </Content>
      </Card.Content>
          </Columns.Column>


         <Columns.Column size={1}>
                 
         </Columns.Column>
        </Columns>
        </Container>
	);
};

export default About;