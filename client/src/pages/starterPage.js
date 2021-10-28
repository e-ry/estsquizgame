import React from "react";
import { Route } from "react-router";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import logo from '../boid.png';

export default function StarterPage(){
    const history = useHistory();
    const handleClick = () => history.push(ROUTES.QUIZPAGE);

    return(
        <div className="h-screen w-96 bg-purple-100 font-mono">
            <div className="h-auto flex flex-col">
                <div className="w-2/5 mx-auto my-14">
                    <img src={logo}></img>
                </div>
            <h1 className="text-3xl text-center">Buzz Lightyear!</h1>
            <button
            className="mt-14 bg-white w-1/3 h-12 mx-auto text-2xl rounded"
            type="button"
            onClick={handleClick}
            >
            START
            </button>
            </div>
        </div>
    )
}