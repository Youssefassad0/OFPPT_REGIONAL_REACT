import React, { useState } from 'react';

function Composant3({ data }) {
    // const [salaries, setSalaries] = useState(data);
    const [valueInput, setValueInput] = useState('');
    const [sF, setSf] = useState([]);

    function Search(e) {
        e.preventDefault();
        const filterItem = data.filter(s => s.service.nomser.toLowerCase().includes(valueInput.toLowerCase()));
        setSf(filterItem);
        // console.log(sF);
    }
     function vider(){
        setSf([]);
        setValueInput('');
     }

    return (
        <div className='container m-5'>
            <div className="form-group">
                <input
                    type="text"
                    placeholder='recherche par service ...'
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value)}
                    className="form-control"
                />
                <button onClick={Search} className="btn btn-primary mt-2">
                    chercher
                </button>
                <button className="btn btn-danger" onClick={vider} >Vider</button>
            </div>
            <div className="mt-3">
                {sF.length > 0 ? (
                    <ul>
                        {sF.map((salary, index) => (
                            <li key={index}>
                                {salary.prenomsal} {salary.nomsal} - {salary.service.nomser}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun résultat trouvé</p>
                )}
            </div>
        </div>
    );
}

export default Composant3;
