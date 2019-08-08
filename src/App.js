import React, { Component } from "react";
import axios from "axios";
import igdb from "igdb-api-node";
import apicalypse from "apicalypse";
import PlatformSelector from "./components/PlatformSelector";
import generalQuestions from "./components/generalques";

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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: []
    };
  }

   queryFunction =async(event) => {
    event.preventDefault()
    const response = await apicalypse(requestOptions)
      .fields("name, cover.url, platforms.name, genres.name, release_dates.y, age_ratings.rating")
      .limit(5)
      .search(this.state.query)
      .where('platforms = {130} & genres = {14}' )
      .request('/games')
      console.log(response.data)
      this.setState({
        data: response.data
      })
    }

    handleChange = (event) => {
      this.setState({
        query: event.target.value
     
      })
    }
          

    

  render() {
    if (!this.state.data) {
      return <div>loading...</div>;
    } else {
      return (
        <div className='container'>
          <div>Which platform do you want to use?</div>
          <div>
            <ul>
              {this.state.data.map(el => (
                <li key={el.id}>
                  <div><h1>{el.name}</h1></div>
                  {/* <div><img src="//images.igdb.com/igdb/image/upload/t_cover_big/skv3lqtyi00jpuxqx7ca.jpg" alt="cover"/></div>
                  <div>{el.platforms[0].name}</div>
                  <div>{el.genres[0].name}</div>
                  <div>{el.release_dates[0].y}</div>
                  <div>{el.age_ratings && el.age_ratings[0].rating}</div> */}
                </li>
              ))}
            </ul>
          </div>
          <div>
              <form onSubmit={(event)=>this.queryFunction(event)}>
                <input
                  placeholder="Search for..."
                  ref={input => this.search = input}
                  onChange={this.handleChange}
                />
                <button type ="submit">submit</button>
                  <p>{this.state.query}</p>
              </form>
          </div>
        </div>
      );
    }
  }
}

export default App;
