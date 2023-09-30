import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomMessage } from '../reducers';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.message); 
  const [message, setMessage] = useState(null);

  useEffect(() => {
    dispatch(fetchRandomMessage());
    console.log(greeting? greeting.message : "no greeting");
  }, [dispatch]);

  return (
    <div>
      {console.log(greeting)}
      <h1>{greeting? greeting.message : 'hello world!'}</h1>
    </div>
  );
};

export default Greeting;