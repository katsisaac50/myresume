import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Main'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='demo-big-content'>
          <Layout>
            <Header className='header-color' title={<Link style={{textDecoration:'none',color:'white'}} to='/myresume'>My Resume</Link>} scroll>
              <Navigation>
              <Link to='/myresume'> Home
                </Link>
                <Link to='/resume'> Resume
                </Link>
                <Link to='/projects'> Projects
                </Link>
                <Link to='/aboutme'> About Me
                </Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none',color:'black'}} to='/myresume'>My Resume</Link>}>
            <Navigation>
            <Link to='/myresume'> Home
              </Link>
              <Link to='/resume'> Resume
              </Link>
              <Link to='/projects'> Projects
              </Link>
              <Link to='/aboutme'> About Me
              </Link>
            </Navigation>
            </Drawer>
            <Content>
              <div className='page-content' />
              <Main/>
            </Content>
          </Layout>
        </div>
      </div>
    )
  }
}

export default App
