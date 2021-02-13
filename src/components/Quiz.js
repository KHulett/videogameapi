import React, { Component } from 'react';
import {generalQuestions} from '../questions';
import apicalypse from "apicalypse";

const client = process.env.REACT_APP_API_KEY;

const requestOptions = {
  queryMethod: 'body',
  method: 'POST',
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/',
  headers: {
      'Accept': 'application/json',
      "user-key": client,
  },
  responseType: 'json',
  // timeout: 10000,
}

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform:this.props.match.params.platform,
      genre:null,
      age:null,
      year:null,
      data:[]
      }
  }

 
  
  handleSubmit = async(event) => {
    event.preventDefault()
    const response = await apicalypse(requestOptions)
      .fields("name, platforms.name, genres.name, release_dates.y, age_ratings.rating")
      .limit(5)
      // .search(this.state.query)
      .where(`platforms = ${this.state.platform} & genres = ${this.state.genre} & age_ratings = ${this.state.age} & release_dates < ${this.state.year}`)
      .request('/games')
      // console.log(response)
      this.setState({
        data: response.data
      })
      console.log(this.state)
    }
  // API call goes here


  handleChange=(event)=>{
    this.setState({[event.target.name]: event.target .value})
  }


  render() { 
    // console.log(this.state)
    return (<div>
      <h1>Quiz </h1>
      <form onSubmit={this.handleSubmit}>
      <label>
      Year?
          <select name = 'year' onChange={this.handleChange}>
          {generalQuestions.year.answers.map(answer=>
          <option value ={answer.type}> {answer.content}</option>
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

      <div>
            <ul>
              {this.state.data.map(el => (
                <li key={el.id}>
                  <div><h1>{el.name}</h1></div>
                  {/* <div><img src="//images.igdb.com/igdb/image/upload/t_cover_big/skv3lqtyi00jpuxqx7ca.jpg" alt="cover"/></div> */}
                  <div>{el.platforms && el.platforms[0].name}</div>
                  <div>{el.genres && el.genres[0].name}</div>
                  <div>{el.release_dates && el.release_dates[0].y}</div>
                  <div>{el.age_ratings && el.age_ratings[0].rating}</div>
                </li>
              ))}
            </ul>
          </div>

      </div>  );
  }
}
 
export default Quiz;