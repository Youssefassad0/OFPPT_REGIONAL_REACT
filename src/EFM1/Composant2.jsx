import React, {  useState } from 'react';
import users from './users.json'
import { Link } from 'react-router-dom';
import Composant3 from './Composant3';
function Composant2() {
    const [salaries, setSalaries] = useState(users);
    const supprimer = (id) => {
        const newList = salaries.filter(s => s._id !== id);
        setSalaries(newList);
    }
    
    return (
        <div className='container mt-5' >
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nom_Sal</th>
                        <th scope="col">Prenom_Sal</th>
                        <th scope="col">Fonction</th>
                        <th scope="col">Service</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salaries.map((salarie,i) => (
                            <tr key={i} >
                                <td> {salarie.nomsal} </td>
                                <td> {salarie.prenomsal} </td>
                                <td> {salarie.fonction} </td>
                                <td> {salarie.service.nomser} </td>
                                <td >
                                    <div className="d-flex justify-between ">
                                    <Link to={`/composant2/${salarie._id}`}>
                                        <button className='btn btn-success' > Modifier                                            </button>
                                    </Link>
                                        <button className='btn btn-danger' onClick={() => { supprimer(salarie._id) }} >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <Composant3 data={salaries} />
            </div>
        </div>
    );
}

export default Composant2;
