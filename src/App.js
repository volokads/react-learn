import React from 'react'
import './App.css';
import { Button } from "./components/Button"
import { Card } from "./components/Card.jsx"
import { Form } from "./components/Form"

const teachers = [
  {
    id: "1",
    name: "Natalie"
  },
  {
    id: "2",
    name: "Kate"
  },
  {
    id: "3",
    name: "Eduard"
  },
  {
    id: "4",
  }
  
]
class App extends React.Component {
  state = {
    value: '',
  }
  handleChange = (e) => {
    console.log('value', e.target.value);
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <Form/>
        <input type='text' value={this.state.value} onChange={ this.handleChange}/>
        {teachers.map((teacher) => {
         return <Card key={teacher.id} id={teacher.id} name={teacher.name} />
        })}
        
        <Button name="Add teacher"/>
        <Button />
      </div>
    );

  }
}

export default App;
