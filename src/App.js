import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('')

  const fetchData = async () => {
    const res = await axios.get('/.netlify/functions/daniciaEmail')
    setEmail(res.data.message)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <p>{email}</p>
    </div>
  );
}

export default App;
