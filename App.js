import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Dropdown,Header } from 'semantic-ui-react'
import './App.css';


class App extends Component {
  state={
      optionsSem: [
          { key: '3', value: '3', text: '3rd Semester' },
          { key: '5', value: '5', text: '5th Semester' },
          { key: '7', value: '7', text: '7th Semester' }
      ],
      optionsBranch: [
          { key: 'cse', value: 'cse', text: 'Computer Science and Engineering' },
          { key: 'elex', value: 'elex', text: 'Electrical Engineering' },
          { key: 'mec', value: 'mec', text: 'Mechanical Engineering' }
      ],
    sem:'',
    branch: '',
      students: '0'
  };
    onSearchSem = (e) => {
        this.setState({sem: e.target.textContent});
        if(this.state.branch !== '' && this.state.sem !== ''){
          this.calculateStudents();
        }
    };
    onSearchBranch = (e) => {
        this.setState({branch: e.target.textContent});
        if(this.state.branch !== '' && this.state.sem !== ''){
          this.calculateStudents();
        }
    };
    calculateStudents(){
      var sem = this.state.sem;
      var branch = this.state.branch;
      if (sem === '3rd Semester' && branch === 'Computer Science and Engineering') this.setState({students: '80'});
      else if (sem === '3rd Semester' && branch === 'Electrical Engineering') this.setState({students: '70'});
      else if (sem === '3rd Semester' && branch === 'Mechanical Engineering') this.setState({students: '60'});
      else if (sem === '5th Semester' && branch === 'Computer Science and Engineering') this.setState({students: '85'});
      else if (sem === '5th Semester' && branch === 'Electrical Engineering') this.setState({students: '90'});
      else if (sem === '5th Semester' && branch === 'Mechanical Engineering') this.setState({students: '65'});
      else if (sem === '7th Semester' && branch === 'Computer Science and Engineering') this.setState({students: '95'});
      else if (sem === '7th Semester' && branch === 'Electrical Engineering') this.setState({students: '80'});
      else if (sem === '7th Semester' && branch === 'Mechanical Engineering') this.setState({students: '70'});
    }
  render() {
    return (
      <div className="App">
          <Menu>
              <Menu.Item name='Cedar Project 3' active={true} >
                  <a href="/" style={{ fontSize: 25  }}>Cedar Project 3</a>
              </Menu.Item>
          </Menu>
        <div style={{ display: 'flex', fontSize: 20 }}>
            <Dropdown placeholder='Select Semester'  style={{ margin:20, flex:1}} fluid search selection options={this.state.optionsSem} onChange={this.onSearchSem.bind()} />
            <Dropdown placeholder='Select Branch'  style={{ margin:20, flex:1 }} fluid search selection options={this.state.optionsBranch} onChange={this.onSearchBranch.bind()}/>
            <Header as='h2' style={{ margin:20, flex:1 }}>Number of Students: {this.state.students}</Header>
        </div>
      </div>
    );
  }
}

export default App;
