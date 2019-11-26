import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "true":"false"}</td>
      <td><button onClick={()=>props.handleEdit(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
