import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Details() {
  const [data,setData]=useState([]);
  const fetchApiBook = async () => {
    try {
        const res = await axios.get('https://retoolapi.dev/WDlW2j/data');
        setData(res.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
    fetchApiBook();
    // console.log(data);
});
  return (
    <div className='container m-5 d-flex justify-content-center align-items-center' >
      <table className="table table-dark table-striped">
     
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Titre</th>
            <th scope="col">Genre</th>
            <th scope="col">PRix</th>
          </tr>
        </thead>
        <tbody>
           {
            data.map((d,i)=>(
              <tr key={i} >
                <td> {d.ISBN} </td>
                <td> {d.Title} </td>
                <td> {d.Genre} </td>
                <td> {d.Prix} </td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}

export default Details