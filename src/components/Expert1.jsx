import React, { useEffect, useState } from 'react';
import Expert from './Expert';

function Expert1() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/utilisateurs')
      .then(response => response.json())
      .then(data => setExperts(data));
  }, []);

  return (
    <ul className="list-group">
      {experts.map(expert => (
        <Expert key={expert.id} expert={expert} />
      ))}
    </ul>
  );
}

export default Expert1;
