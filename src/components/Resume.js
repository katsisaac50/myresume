import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

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
            <Education
              startYear={2002}
              endYear={2006}
              schoolName='My university'
              schoolDescription='here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' />
            <hr style={{borderTop: '3px, solid #e22947'}} />
            <Experience
              startYear={2012}
              endYear={2013}
              jobName='Second Job'
              jobDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills skills='Javascript' progress={100} />
            <Skills skills='HTML/CSS' progress={80} />
            <Skills skills='NodeJS' progress={50} />
            <Skills skills='React' progress={50} />
            <Skills skills='Mysql' progress={40} />
            <Skills skills='ReactiveSearch' progress={40} />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
