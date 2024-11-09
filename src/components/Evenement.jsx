import React from 'react';

function Evenement({ événements }) {
  const totalCost = événements.reduce((total, event) => total + event.cout_journalier * event.durée, 0);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Description</th>
          <th>Coût Journalier</th>
          <th>Durée (jours)</th>
          <th>Coût Total Event</th>
        </tr>
      </thead>
      <tbody>
        {événements.map((event, index) => (
          <tr key={index}>
            <td>{event.théme}</td>
            <td>{event.date_debut}</td>
            <td>{event.date_fin}</td>
            <td>{event.description}</td>
            <td>{event.cout_journalier}DH</td>
            <td>{event.durée}</td>
            <td>{event.cout_journalier * event.durée}DH</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="6">Total des coûts des événements assurés est :</td>
          <td>{totalCost}DH</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Evenement;
