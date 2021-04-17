import React, {useState, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContex";


export const FormNewTask = ({saveTask, createTask}) => {
    const [value, setValue] = useState('')
    const {request} = useHttp()
    const auth = useContext(AuthContext)


    /*
    const pressHandler =  async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/make', 'POST',{
                    from: value
                }, {Authorization: `Bearer ${auth.token}` })
            } catch (e) {}
        }
    }
    */


    const submitHandler = event => {
        event.preventDefault()
        saveTask(value)

        if (value.trim()) {
            setValue('')
        }
    }

    return (
        <form
            onSubmit={submitHandler}
            >
                <div className="row">
                    <div className="addNew">
                        <label
                          className="active"
                          htmlFor="input_text">
                            Input new task:
                        </label>
                        <input
                            value={value}
                            id="input_text"
                            type="text"
                            className="validate"
                            onChange={ e => {setValue(e.target.value)}}
                            onKeyPress={event => {createTask(event.key, value)} }
                        />
                    </div>
            </div>
        </form>
    )
}