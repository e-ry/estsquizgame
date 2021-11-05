import React, { useEffect, useState } from 'react';
import boids from '../BoidGroup1.svg';

export default function ResultPage(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    console.log(props);
  }, []);

  return loading ? (
    <div> Loading...</div>
  ) : (
    <div className="bg-purple-100 h-screen w-full text-center font-mono">
      <h1 className="pt-48 text-3xl">Great Try! </h1>
      <h1 className="pt-8 text-xl">
        You scored {props.location.state} points{' '}
      </h1>
      <img
        alt="png of little boids flyin round"
        className="w-full"
        src={boids}
      ></img>
    </div>
  );
}
