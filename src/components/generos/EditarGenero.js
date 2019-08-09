import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({ match }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        axios
            .get(`/api/genres/${match.params.id}`)
            .then(res => {
                setName(res.data.name)
            })
    }, [match.params.id])

    const onChange = event => {
        setName(event.target.value)
    }
    const save = () => {
        axios
            .put(`/api/genres/${match.params.id}`, {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }
    const onCancel = () => setCancel(true)

    if (success || cancel) {
        return <Redirect to='/genres' />
    }

    return (
        <div className='container'>
            <h1>Editar Gêneros</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={onChange}
                        aria-describedby='genreName'
                        placeholder='Nome do gênero'
                    />
                    <small
                        id='genreName'
                        className='form-text text-muted'
                    >Informe o nome do gênero.</small>
                </div>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={save}
                >Gravar</button>
                <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={onCancel}
                >Cancelar</button>
            </form>
        </div>
    )
}

export default EditarGenero