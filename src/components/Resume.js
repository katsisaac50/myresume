import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Isaac from'../assets/Isaac1.png';

class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={Isaac} alt='avater' style={{height: '300px', borderRadius:'800px'}} />
            </div>
            <div></div>
            <h2 style={{paddingTop: '2em'}}>Katongole Isaac</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p></p>
            <hr style={{borderTop: '3px solid #833fh2', width: '50%'}} />
            <h5>Address</h5>
            <p>
              Avnstrup, Denmark
            </p>
            <h5>Phone</h5>
            <p>
              (45) 916-74160
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
            startYear={2018}
            endYear={2018}
            schoolName='Hack Your future'
            schoolDescription='Here, I obtained a Certificate in Web Development' />
            <hr style={{borderTop: '3px, solid #e22947'}} />

            <Education

              startYear={1994}
              endYear={2001}
              schoolName='Kisimbiri Primary School'
              schoolDescription='Here, I obtained a Primary Leaving Certificate' />
            
            <Education
              startYear={2001}
              endYear={2005}
              schoolName='Hawa Secondary school'
              schoolDescription='Here, I was awarded an ordinary certificate of education' />
              

            <h2>Skills</h2>
            <Skills skills='Javascript' progress={50} />
            <Skills skills='HTML/CSS' progress={80} />
            <Skills skills='NodeJS' progress={50} />
            <Skills skills='React' progress={50} />
            <Skills skills='Mysql' progress={40} />
            <Skills skills='ReactiveSearch' progress={60} />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
