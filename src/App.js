import React, { Component } from 'react';
import axios from "axios";
import igdb from 'igdb-api-node';
import PlatformSelector from './components/PlatformSelector';

// const client = igdb(process.env.REACT_APP_API_KEY)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameslist: null
    }
  }

// async componentDidMount(){
//   axios({
//     // url: "https://api-v3.igdb.com/games?limit=25",
//     url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms/?search=playstation&fields=id,name,generation',
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'user-key': client
//     },
//     data: "fields abbreviation,alternative_name,category,created_at,generation,name,platform_logo,product_family,slug,summary,updated_at,url,versions,websites;"
//   })
//   .then(response => this.setState({games: response}))

//     .then(response => console.log(response))
//     .catch(err => {
//         console.error(err);
//     }) 
//   }

async componentDidMount(){
  const client = igdb(process.env.REACT_APP_API_KEY)
const response = await client.games({
  
  filters: {
      'release_dates.date-gt': '2010-12-31',
      'release_dates.date-lt': '2012-01-01'
  },
  limit: 5,
  offset: 0,
  order: 'release_dates.date:desc',
  search: 'zelda'
}, [
  'name',
  'release_dates.date',
  'rating',
  'hypes',
  'cover'
])
// .then(response => this.setState({gameslist: response}))
// .then(response => console.log(response))
    .catch(err => {
        console.error(err);
})
}

  render() { 

    if(!this.state.games){
      return <div>loading...</div>
    } else {
    return (
      <div>

        <ul> 
       {this.state.gameslist.data.map((names) => <li key={names.name}>{names.name}{names.release_date.date}</li>)}
        </ul>
      </div> 
    
    )
    }
  }
}
 
export default App;
