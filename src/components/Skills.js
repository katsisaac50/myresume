import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

class Skills extends Component {
  render () {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>
            {this.props.skills}
            <ProgressBar style={{margin: 'auto',width: '75%'}} progress={this.props.progress} />
          </div>
          <p>
            {this.props.startYear}-
            {this.props.endYear}
          </p>
        </Cell>
        <Cell col={4}>
          <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
          <p>
            {this.props.jobDescription}
          </p>
        </Cell>
      </Grid>
    )
  }
}

export default Skills
