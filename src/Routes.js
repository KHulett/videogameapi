import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Quiz, Platform} from './components'
import App from './App'

class Routes extends Component {
constructor(){
  super()
  this.state={}
}



render(){
  return (
    <Switch>
     <Route path ='/quiz/:platform' component ={Quiz}></Route>
     <Route path ='/platform' component = {Platform}></Route>
     <Route component ={App}> </Route>
    </Switch>
    )
  }
}

export default Routes