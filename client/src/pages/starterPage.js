import React from "react";
import { useHistory } from "react-router-dom";
import logo from '../logo2.svg';
import boids from '../BoidGroup1.svg'
import * as ROUTES from "../constants/routes";

export default function StarterPage(){
    const history = useHistory();
    const handleClick = () => history.push(ROUTES.QUIZPAGE);

    return(
        <div className="h-screen w-full bg-purple-100 font-mono">
            <div className="h-auto flex flex-col">
                <div className="w-3/5 mx-auto my-14">
                    <img src={logo}></img>
                </div>
            <h1 className="text-1xl text-center">Catch the Buzz</h1>
            <button
            className="mt-14 bg-purple-500 text-white w-1/3 h-12 mx-auto text-2xl rounded"
            type="button"
            onClick={handleClick}
            >
            START
            </button>
            <img src={boids}></img>
            </div>
        </div>
    )
}