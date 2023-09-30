import React, { useEffect, useState } from 'react';

const Greeting = () => {
    const [message, setMessage] = useState(null);

  useEffect(() => {
    const loadMessage = async () => {
      const response = await fetch('/api/messages/random');
      const data = await response.json();
      console.log(data);
      setMessage(data.content)
    };
    loadMessage();
    console.log(message? message : "no message");
  }, []);

  return (<h1>{message? message : 'hello world!'}</h1>);
};

export default Greeting;