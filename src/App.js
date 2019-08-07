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
      playstation: null,
      xbox: null,
      nintendo: null,
      data: []
    };
  }

  async componentDidMount() {
    const response = await apicalypse(requestOptions)
      .fields("name, platforms.name, genres.name, release_dates.category, age_ratings")
      .limit(5)
      // .search('mortal kombat')
      .where('platforms = {48}' && 'genres = {14}')
      .request('/games')
      console.log(response.data)
      this.setState({
        data: response.data
      })
      
      // .offset(10) // offset results by 10

      // .sort("name") // default sort direction is 'asc' (ascending)

      // .search("mario") // search for a specific name (search implementations can vary)

      // .where(`first_release_date > ${new Date().getTime() / 1000}`) // filter the results

      // .request("/games"); // execute the query and return a response object

    

    //   url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com//release_dates/?fields=human,region,platform.name,game.name,game.cover.url&filter[game][eq]=38722&expand=platform,game',

    //   method: 'POST',
    //   headers: {
    //       'Accept': 'application/json',
    //       'user-key': client
    //   },
    //   // data: "fields *, *;",

    // })
    // console.log(playstation)
    // this.setState({
    //   playstation:playstation
    // })

    // const xboxone= await axios({
    //     url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms/?search=xbox one&fields=name,id,summary',

    //   method: 'POST',
    //   headers: {
    //       'Accept': 'application/json',
    //       'user-key': client
    //   },
    //   data: "fields *, *;",})

    //   console.log(xboxone)
    //   this.setState({
    //     xboxone:xboxone
    //   })

    //   const nintendo= await axios({
    //     url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms/?search=nintendo switch&fields=name,id,summary',

    //   method: 'POST',
    //   headers: {
    //       'Accept': 'application/json',
    //       'user-key': client
    //   },
    //   data: "fields *, *;",})

    //   console.log(nintendo)
    //   this.setState({
    //     nintendo:nintendo
    //   })
  }

  render() {
    if (!this.state.data) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <div>Which platform do you want to use?</div>
          <div>
            <ul>
              {this.state.data.map(el => (
                <li key={el.id}>
                  {el.name}
                  {/* {el.platforms.name} */}
                  {/* {el.genres.name} */}
                  {/* {el.release_dates.category} */}
                  {/* {el.age_ratings.category.rating.name} */}
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default App;
