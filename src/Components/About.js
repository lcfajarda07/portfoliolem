import React from "react";
import {Table,Progress, Section,Box,Tile, Container,Heading,Columns,Button,Card,Media,Itam,Content,Image} from "react-bulma-components";
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
              <h5 className="about2">    Thanks for visiting my website. My name is Lem, and I'm 23 years old. if you are interested in finding more about me, my interests, projects or skills, -please browse around.</h5>
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
             <Heading>
        <div className="table is-fullwidth is-bordered">
                <table striped bordered hover className="table is-fullwidth is-bordered">
                {/*loadingMessage*/}
                  <thead>
                    <th>Skills</th>
                    <th>Percentage</th>
                
                    

                  </thead>
                  <tbody>
                 
                  
                  
                    <tr>
                      <td>
                          <i id="icon" class="devicon-bootstrap-plain"></i> Bootstrap
                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                      
                    </tr>

                      <tr>
                      <td>
                          <i class="devicon-babel-plain"></i> Babel
                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                      
                    </tr>
                     <tr>
                      <td>
                           <i class="devicon-express-original"></i> Express
                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                      
                    </tr>


                    <tr>
                      <td>
                           <i class="devicon-git-plain"></i> Git
                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>
                     
                       <tr>
                      <td>
                           <i class="devicon-html5-plain"></i> HTML
                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>

                      <tr>
                      <td>
                           <i class="devicon-javascript-plain"></i> Javascript
                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>

                    <tr>
                      <td>
                           <i class="devicon-laravel-plain"></i> Laravel

                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>

                       <tr>
                      <td>
                           <i class="devicon-jquery-plain"></i> Jquery

                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>

                        <tr>
                      <td>
                           <i class="devicon-mysql-plain"></i> Mysql

                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>

                     <tr>
                      <td>
                           <i class="devicon-php-plain"></i> PHP

                      </td>
                      <td><Progress max={100} value={15} color="success" size="large" /></td>
                    </tr>

                  </tbody>
                </table>
              </div>
           
           </Heading>
    <Heading>
     
      <Progress max={100} value={15} color="success" size="medium" />
      <Progress max={100} value={15} color="error" size="large" />
    
     
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