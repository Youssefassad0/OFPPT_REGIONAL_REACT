import React, { useState } from 'react'
import users from './users.json'
import { useParams } from 'react-router-dom'

function ComposantEdit() {
    const { id } = useParams();

    const [data, setData] = useState(users.find(u => u._id === id));
    const [nom, setNom] = useState(data.nomsal);
    const [prenom, setPrenom] = useState(data.prenomsal);
    const [fonction, setFontion] = useState(data.fonction);
    const [service, setService] = useState(data.service.nomser);
    console.log(nom);
    function modifier() {

    }
    return (
        <div className='container m-5 p-2' >
            <form className='mt-4 p-4'>
                <input type="text" placeholder='nom...' value={nom} /><br />
                <input type="text" placeholder='prenom...' value={prenom} /><br />
                <input type="text" placeholder='fonction...' value={fonction} /><br />
                <input type="text" placeholder='service...' value={service} /><br />
                <button className='btn btn-success mt-3'  > Modifier  </button>
            </form>
        </div>
    )
}

export default ComposantEdit