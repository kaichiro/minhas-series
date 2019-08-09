import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const [cancel, setCancel] = useState(false)
    const onChange = event => {
        setName(event.target.value)
    }
    const save = () => {
        axios
            .post('/api/series', {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }
    const onCancel = () => setCancel(true)

    if (success || cancel) {
        return <Redirect to='/series' />
    }

    return (
        <div className='container'>
            <h1>Nova Série</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={onChange}
                        aria-describedby='serieName'
                        placeholder='Nome do gênero'
                    />
                    <small
                        id='serieName'
                        className='form-text text-muted'
                    >Informe o nome da série.</small>
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

export default NovaSerie