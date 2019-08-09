import React, { Component } from 'react';
import {generalQuestions} from '../questions'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform:this.props.match.params.platform,
      genre:null,
      age:null,
      year:null
      }
  }

 
  
handleSubmit =(event) =>{
  event.preventDefault()

  // API call goes here
}

handleChange=(event)=>{
  this.setState({[event.target.name]: event.target.value})
}


  render() { 
    console.log(this.state)
    return (<div>
      <h1>Quiz </h1>
      <form onSubmit={this.handleSubmit}>
      <label>
      Year?
          <select name = 'year' onChange={this.handleChange}>
          {generalQuestions.year.answers.map(answer=>
          <option value ={answer.content}> {answer.content}</option>
          )}
          </select>
        </label>
        <label>
          Genre?
          <select name = 'genre'  onChange={this.handleChange}>
          {generalQuestions.genre.answers.map(answer=>

          <option value ={answer.type}> {answer.content}</option>
          )}
          </select>
        </label>
        <label>
          Age
          <select name = 'age' onChange={this.handleChange}>
          {generalQuestions.age.answers.map(answer=>
          <option value ={answer.type}> {answer.content}</option>
          )}
           </select>
        </label>
        <button type = 'submit'>Submit </button>   
      </form>

      </div>  );
  }
}
 
export default Quiz;