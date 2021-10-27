import React from "react";
import { Route } from "react-router";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";


export default function StarterPage(){
    const history = useHistory();
    const handleClick = () => history.push(ROUTES.QUIZPAGE);

    return(
        <div>
            <h1>Buzz Lightyear!</h1>
            <button
            type="button"
            onClick={handleClick}
            >
            Start
            </button>
        </div>
    )
}