import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Isaac from'../assets/Isaac1.png';

class Landingpage extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={Isaac} alt='avater' className='avatar-img' />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>
                HTML/CSS|JavaScrip|React|DataBase|NodeJs
              </p>
              <div className='social-links'>
                <a href='https://www.linkedin.com/in/katongole-isaac-2b27b6170/' rel='noopener noreferrer' target='_blank'><i className='fab fa-linkedin' aria-hidden='true' /></a>
                <a href='http://google.com' rel='noopener noreferrer' target='_blank'><i className='fab fa-google' aria-hidden='true' /></a>
                <a href='https://www.facebook.com/' rel='noopener noreferrer' target='_blank'><i className='fab fa-facebook' aria-hidden='true' /></a>
                <a href='https://www.freecodecamp.org/katsisaac50' rel='noopener noreferrer' target='_blank'><i className='fab fa-free-code-camp' aria-hidden='true' /></a>
                <a href='https://github.com/katsisaac50' rel='noopener noreferrer' target='_blank'><i className='fab fa-github' aria-hidden='true' /></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )}
}

export default Landingpage
