import React from "react";

export default function Question(props){
    return (
        <li className="todo stack-small">
        <div >
          <label className="todo-label" htmlFor={props.id}>
           {props.name}
          </label>
        </div>
      </li>
    );
}