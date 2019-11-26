import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzas:[],
    pizzaToEdit:null

  }
  componentDidMount=()=>{
    fetch("http://localhost:3000/pizzas")
    .then(resp=>resp.json())
    .then(pizzas=>{
      this.setState({
        pizzas
      })
    })
  }

  handleEdit=(pizza)=>{
    this.setState({
      pizzaToEdit:pizza
    })
  }

  handleToppingChange=(event)=>{
    this.setState({
      pizzaToEdit:Object.assign({},this.state.pizzaToEdit,{topping:event.target.value})
    })
  }
  handleVegChange=(event)=>{
    this.setState({
      pizzaToEdit:Object.assign({},this.state.pizzaToEdit,{ vegetarian:(event.target.value==="Vegetarian"? true : false) })
    })
  }

  handleSizeChange=(event)=>{
    this.setState({
      pizzaToEdit:Object.assign({},this.state.pizzaToEdit,{size:event.target.value})
    })
  }

  handleSubmit=()=>{
    // set the state to the other pizzas and the editted pizza
    // patch the backend
    const configObj = {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state.pizzaToEdit)
    }
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`, configObj)
    .then(resp=>resp.json())
    .then(()=>{fetch(`http://localhost:3000/pizzas`)
    .then(resp=>resp.json())
    .then(pizzas=> {
      this.setState({
        pizzas, pizzaToEdit:null
      })
    })}) 
    
      
    
    
  }

  render() {
    return (
      <Fragment>
        <Header/>
        {this.state.pizzaToEdit && <PizzaForm handleSubmit={this.handleSubmit} handleSizeChange={this.handleSizeChange} handleVegChange={this.handleVegChange} handleToppingChange={this.handleToppingChange} pizzaToEdit={this.state.pizzaToEdit} />}
        {this.state.pizzas.length>0 && <PizzaList handleEdit={this.handleEdit} pizzas={this.state.pizzas}/>}
      </Fragment>
    );
  }
}

export default App;
