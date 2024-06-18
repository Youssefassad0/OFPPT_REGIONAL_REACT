import React, { useState } from 'react'

function Composant() {
    const [matricule, setMatricule] = useState('');
    const [marque, setMarque] = useState('');
    const [date, setDate] = useState('');
    const [couleurSelected, setCouleurSelected] = useState('');
    const couleur = ['noir', 'blanc', 'rouge', 'bleu'];
    const [result, setResult] = useState();
    const envoyer = (e) => {
        e.preventDefault();
        console.log(matricule, marque, date, couleurSelected);
        setResult(
            <ul>
                <li> Matricule: {matricule} </li>
                <li> marque: {marque} </li>
                <li> date de circulation : {date} </li>
                <li> La couleur  : {couleurSelected} </li>
            </ul>
        )
    }
    return (
        <div className='container mt-5' >
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Matricule</label>
                    <input type="text" value={matricule} onChange={e => setMatricule(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Marque</label>
                    <input type="text" value={marque} onChange={e => setMarque(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Date </label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Couleur </label>
                    <select name="couleur" id="" onChange={e => setCouleurSelected(e.target.value)}>
                        <option value="">Selectionner la couleur</option>
                        {
                            couleur.map((m, i) => (
                                <option value={m} key={i}> {m} </option>
                            ))
                        }
                    </select>

                </div>
                <button className="btn btn-primary" onClick={envoyer}>Ajouter</button>
            </form>
            <div className="container mt-4">
                { 
                    result && <div>
                        {result}
                    </div>
                }
            </div>
        </div>
    )
}

export default Composant