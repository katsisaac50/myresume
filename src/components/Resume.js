import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'

class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src='' alt='avater' style={{height: '200px'}} />
            </div>
            <h2 style={{paddingTop: '2em'}}>Katongole Isaac</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p></p>
            <hr style={{borderTop: '3px solid #833fh2', width: '50%'}} />
            <h5>Address</h5>
            <p>
              1 Hacker Way Menlo Park, 94025
            </p>
            <h5>Phone</h5>
            <p>
              (123) 45848
            </p>
            <h5>Email</h5>
            <p>
              katsisaac50@gmail.com
            </p>
            <h5>Web</h5>
            <p>
              mywebsite.com
            </p>
            <hr style={{borderTop: '3px solid #833fh2', width: '50%'}} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
