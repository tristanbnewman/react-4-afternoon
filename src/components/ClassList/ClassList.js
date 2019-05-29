import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state={
      students: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3005/students?class='+this.props.computedMatch.params.class)
      .then(response =>{
        this.setState({students: response.data})
        console.log("Got the class data")
        console.log(response.data)
        }
      )
      .catch(error=>{
        console.log(error)
      })
    // console.log(this.props.computedMatch.params.class)
  }

  render() {
    const students = this.state.students.map((student, index)=>{
      // console.log(student.id)
      return <Link key={index} id={student.id} to={"/student/"+ student.id}><h3>{student.first_name + " " + student.last_name}</h3></Link>
    })
    return (
      <div className="box">
        <h1>{this.props.computedMatch.params.class}</h1>
        <h2>Class List:</h2>
        {students}

      </div>
    )
  }
}