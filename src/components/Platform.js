import React, { Component } from 'react';
import {platformSelector} from '../questions'
import {Link} from 'react-router-dom'

class Platform extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <h1>{platformSelector.question} </h1>
            <div>
            <ul>
            {platformSelector.answers.map(question=>
            <button key = {question.content}><Link to ={`/quiz/${question.content}`} >{question.content} </Link>  </button>
            )}    
            </ul>        
            </div>    
            </div>  );
    }
}
 
export default Platform;