import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../redux/actions';

function Home() {
    const [data, setData] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    const total = useSelector(state => state.total);
    const add_cart = (book) => {
        dispatch(ADD_TO_CART(book));
        // console.log(book);
    }
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
    }, []);
    const remove_from_item = (id) => {
        dispatch(REMOVE_FROM_CART(id));
    }
    const filtredData = data.filter(d => d.Genre === selectedType);
    return (
        <div className="container mt-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 mb-3">
                    <select
                        className="form-select"
                        value={selectedType}
                        onChange={e => setSelectedType(e.target.value)}
                    >
                        <option value="selectType">Select a type</option>
                        {data.map((value, index) => (
                            <option key={index} value={value.Genre}>
                                {value.Genre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-10">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Titre</th>
                                <th>Auteur</th>
                                <th>Prix</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filtredData.map((f, i) => (
                                    <tr key={i}>
                                        <td>
                                            {f.ISBN}
                                        </td>
                                        <td>
                                            {f.titre}
                                        </td> <td>
                                            {f.Author}
                                        </td>
                                        <td>
                                            {f.Prix}
                                        </td>
                                        <td>
                                            <button onClick={() => { add_cart(f) }} className="btn btn-success">
                                                ADD to Cart
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container mt-3">
                <h3>
                    Your Cart , TOTAL : $ {total.toFixed(2)}
                </h3>
                {
                    items.length > 0 ?
                        <ul>
                            {
                                items.map(i => (
                                    <li key={i.ISBN}> {i.Title} - $ {i.Prix}  <button className="btn btn-warning" onClick={() => remove_from_item(i.ISBN)} >Delete</button> </li>
                                ))
                            }
                        </ul> : 'You Cart Is Empty !!! '
                }
            </div>
        </div>
    );
}

export default Home;
