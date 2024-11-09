import React, { useState } from "react";

function Formulaire() {
    const [formData, setFormData] = useState({
        théme: "",
        date_debut: "",
        date_fin: "",
        cout_journalier: "",
        expert: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    

    return (
        <>
        <form
            className="d-flex flex-column align-items-center gap-2 mt-4 border border-1 p-4 rounded mx-auto w-50"
            >
            <h1>Formulaire</h1>
            <input name="théme" className="form-control" placeholder="Thème" onChange={handleChange} />
            <input
                name="date_debut"
                type="date"
                className="form-control"
                placeholder="Date de début"
                onChange={handleChange}
            />
            <input
                name="date_fin"
                type="date"
                className="form-control"
                placeholder="Date de fin"
                onChange={handleChange}
            />
            <input
                name="cout_journalier"
                className="form-control"
                placeholder="Coût journalier"
                onChange={handleChange}
            />
            <input name="expert" className="form-control" placeholder="Expert" onChange={handleChange} />
        </form>
        <div className="displayData border mb-4 border-1 p-4 rounded mx-auto w-50 mt-4">
            <h2>Données soumises</h2>
            <hr />
            <ul className="list-group">
                <li className="list-group-item">Thème : {formData.théme}</li>
                <li className="list-group-item">Date de début : {formData.date_debut}</li>
                <li className="list-group-item">Date de fin : {formData.date_fin}</li>
                <li className="list-group-item">Coût : {formData.cout_journalier}DH</li>
                <li className="list-group-item">Expert : {formData.expert}</li>
            </ul>
        </div>
        </>
    );
}

export default Formulaire;
