import React, { Component } from "react"
import { utils } from "react-bootstrap"
import api from "../../utils/api"

export default  class App extends Component {

    componentDidMount(){

    api.readAll().then((todos) => {
        if (todos.message === 'unauthorized') {
          if (isLocalHost()) {
            alert('FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
          } else {
            alert('FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct')
          }
          return false
        }
    
        console.log('all todos', todos)
        this.setState({
          todos: todos
        })
      })
    }
}

