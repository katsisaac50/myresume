import React, { Component } from 'react';
import {
  Tab,
  CardText,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  IconButton
} from 'react-mdl';
import rtprjoject from '../assets/FirstReactProject.png';
import rtprjoject2 from '../assets/reactproject.png';
import chatimage from '../assets/chat.png';
import Books from '../assets/books.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    console.log(this.state.activeTab);

    // if (this.state.activeTab=== 1) {
    //   /* do the right thing */
    //   console.log(this.state.activeTab)
    //  } else if (this.state.activeTab > 50) {
    //   /* do the right thing */
    //  } else {
    //   /* do the right thing */
    //  }
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${rtprjoject})center/cover`
                }}
              >
                React Project
              </CardTitle>
              <CardText>react</CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/katsisaac50/ReactProject"
                >
                  GitHub
                </Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
            </Card>

            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${rtprjoject2})center/cover`
                }}
              >
                React Project
              </CardTitle>
              <CardText>react</CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/katsisaac50/secondReactProject"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  href="https://katsisaac50.github.io/secondReactProject/#home"
                >
                  LiveDemo
                </Button>
              </CardActions>
            </Card>

            {
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: '#fff',
                    height: '176px',
                    background: `url(${chatimage})center/cover`
                  }}
                >
                  React Project
                </CardTitle>
                <CardText>react</CardText>
                <CardActions border>
                  <Button colored href="https://github.com/katsisaac50/ChatApp">
                    GitHub
                  </Button>
                  <Button colored href="https://katsisaac50.github.io/ChatApp/">
                    LiveDemo
                  </Button>
                </CardActions>
              </Card>
            }
          </div>
        );
      case 1:
        return (
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background: `url(${rtprjoject})center/cover`
                }}
              >
                NodeJS-Databases
              </CardTitle>
              <CardText>NodeJS</CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/katsisaac50/NodeJS-Databases"
                >
                  GitHub
                </Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
            </Card>

            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${rtprjoject2})center/cover`
                }}
              >
                express_server
              </CardTitle>
              <CardText>NodeJS</CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/katsisaac50/express_server"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  href="https://github.com/katsisaac50/express_server"
                >
                  LiveDemo
                </Button>
              </CardActions>
            </Card>

            {
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '176px',
                    background: `url(${chatimage})center/cover`
                  }}
                >
                  node-babel-master
                </CardTitle>
                <CardText>NodeJS</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/katsisaac50/node-babel-master"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://github.com/katsisaac50/node-babel-master"
                  >
                    LiveDemo
                  </Button>
                </CardActions>
              </Card>
            }
          </div>
        );
      case 2:
        return (
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background: `url(${rtprjoject})center/cover`
                }}
              >
                JavaScript
              </CardTitle>
              <CardText>JS</CardText>
              <CardActions border>
                <Button colored href="https://github.com/katsisaac50/homeweek4">
                  GitHub
                </Button>
                <Button colored href="https://katsisaac50.github.io/homeweek4/">
                  LiveDemo
                </Button>
              </CardActions>
            </Card>

            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${Books})center/cover`
                }}
              >
                Favorite Books
              </CardTitle>
              <CardText>JS</CardText>
              <CardActions border>
                <Button colored href="https://github.com/katsisaac50/week3Js">
                  GitHub
                </Button>
                <Button colored href="https://katsisaac50.github.io/week3Js/">
                  LiveDemo
                </Button>
              </CardActions>
            </Card>

            {
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '176px',
                    background: `url(${chatimage})center/cover`
                  }}
                >
                  Using Map, Filter, and Reduce
                </CardTitle>
                <CardText>JS</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/katsisaac50/week8-homework"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://katsisaac50.github.io/week8-homework/"
                  >
                    LiveDemo
                  </Button>
                </CardActions>
              </Card>
            }
          </div>
        );
      case 3:
        return (
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background: `url(${rtprjoject})center/cover`
                }}
              >
                MySQL
              </CardTitle>
              <CardText>Database</CardText>
              <CardActions border>
                <Button colored href="https://github.com/katsisaac50/mysql">
                  GitHub
                </Button>
                <Button colored href="https://github.com/katsisaac50/mysql">
                  LiveDemo
                </Button>
              </CardActions>
            </Card>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Database</Tab>
        </Tabs>

        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
