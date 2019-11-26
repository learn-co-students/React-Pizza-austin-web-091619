import React from "react"

const PizzaForm = (props) => {

  let pizza = props.pizzaToEdit
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.handleToppingChange} type="text" className="form-control" placeholder="Pizza Topping" value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={props.handleSizeChange} value={pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleVegChange} type="radio" value="Vegetarian" checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleVegChange} type="radio" value="Not Vegetarian" checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
