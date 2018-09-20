import React, { Component } from 'react';
import {Grid, Cell, ListItemContent, ListItem, List} from 'react-mdl';
import Isaac from'../assets/Isaac1.png';

class About extends Component {
  render () {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
        <h2>Katongole Isaac</h2>
        <img src={Isaac}
        alt="avatar"
        style={{height:'300px'}}
        />
        <p style={{width:'75', margin:'auto', paddingTop: '1em' }}>
        My name is Katongole Isaac, I live in Hvalsø, Denmark. I am a frontend developer and passionate about computers. I also enjoy playing football and keeping myself in good shape.
        </p>
        </Cell>
        <Cell col={6}>
        <h2>Contact Me</h2>
        <hr/>

        <div className="contact-list">
        <List>
  <ListItem>
    <ListItemContent style={{fontSize:'30px',fontfamily:'Anton'}}>
    <i className="fas fa-phone" aria-hidden="true"/>
    (45) 916-74160
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'30px',fontfamily:'Anton'}}>
    <i className="fab fa-skype" aria-hidden="true"/>
    Katongole Isaac
    </ListItemContent>
    
    </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'30px',fontfamily:'Anton'}}>
    <i className="fab fa-facebook-f" aria-hidden="true"/> 
    Katongole Isaac
    </ListItemContent>
    
    </ListItem>
</List>
        </div>
        </Cell>
        </Grid>
      </div>
    )}
}

export default About
