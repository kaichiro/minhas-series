import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const msgGenreEmpty = 'Você não possui gêneros criados!'
    const [data, setDate] = useState([])
    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setDate(res.data.data)
            })
    }, [])

    const deleteGenero = (id) => {
        axios
            .delete(`/api/genres/${id}`)
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setDate(filtrado)
            })
    }

    const rederRecordTableLine = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td><Link to={`/genres/${record.id}`}>{record.name}</Link></td>
                <td>
                    <button
                        className='btn btn-danger'
                        onClick={() => deleteGenero(record.id)}
                    >Remover</button>
                    <Link
                        to={`/genres/${record.id}`}
                        className='btn btn-warning'
                    >Editar</Link>
                </td>
            </tr>
        )
    }

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Gêneros</h1>
                <Link
                    to='/genres/new'
                    className='btn btn-primary'
                >Novo Gênero</Link>
                <div className='alert alert-warning' role='alert'>
                    {msgGenreEmpty}
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h2>Gêmeros</h2>
            <Link
                to='/genres/new'
                className='btn btn-primary'
            >Novo Gênero</Link>
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

export default Generos