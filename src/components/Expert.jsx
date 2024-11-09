import React from 'react';
import Evenement from './Evenement';

function Expert({ expert }) {
  return (
    <li>
      <h2>{expert.nom_complet}</h2>
      <hr />
      <Evenement événements={expert.événements} />
    </li>
  );
}

export default Expert;
