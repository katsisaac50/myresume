import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Landingpage extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png' alt='avater' className='avatar-img' />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>
                HTML/CSS|JavaScrip|React|DataBase|NodeJs
              </p>
              <div className='social-links'>
                <a href='http://google.com' rel='noopener noreferrer' target='_blank'><i className='fab fa-google' aria-hidden='true' /></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )}
}

export default Landingpage
