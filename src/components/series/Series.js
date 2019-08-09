import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Series = () => {
    const msgGenreEmpty = 'Você não possui séries criadas!'
    const [data, setDate] = useState([])
    useEffect(() => {
        axios
            .get('/api/series')
            .then(res => {
                setDate(res.data.data)
            })
    }, [])

    const deleteSerie = (id) => {
        axios
            .delete(`/api/series/${id}`)
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setDate(filtrado)
            })
    }

    const rederRecordTableLine = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td><Link to={`/series/${record.id}`}>{record.name}</Link></td>
                <td>
                    <button
                        className='btn btn-danger'
                        onClick={() => deleteSerie(record.id)}
                    >Remover</button>
                    <Link
                        to={`/series/${record.id}`}
                        className='btn btn-warning'
                    >Info</Link>
                </td>
            </tr>
        )
    }

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Séries</h1>
                <Link
                    to='/series/new'
                    className='btn btn-primary'
                >Nova Série</Link>
                <div className='alert alert-warning' role='alert'>
                    {msgGenreEmpty}
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h2>Séries</h2>
            <Link
                to='/series/new'
                className='btn btn-primary'
            >Nova Série</Link>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(rederRecordTableLine)}
                </tbody>
            </table>
        </div>
    )
}

export default Series