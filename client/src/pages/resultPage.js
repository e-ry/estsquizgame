import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

export default function ResultPage(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        console.log(props);
    }, []);

    return loading ?(
        <div> Loading...</div>) :
        (
        <div>
            <h1>RESULT </h1>
            <h1>Your score { props.location.state } </h1>

        </div>
        )
}