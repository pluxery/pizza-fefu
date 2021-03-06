import 'materialize-css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react'

import {AuthContext} from './AuthContext'
import Loader from "../Loader/Loader";

import './Auth.css'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

export const AuthPage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)

        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.admin)
            navigate('/main')
            if(data.admin === true){
                navigate('/admin')
            }
        } catch (e) {
        }
    }
    if (loading) {
        return <Loader/>
    }

    return (
        <div className={'auth__content'}>
            <div className={'auth'}>
                <div className={'auth__body'}>
                    <h2 className={'auth__tittle'}>Авторизация</h2>
                    <div className={'auth__inputs'}>
                        <input
                            placeholder="Введите email"
                            id="email"
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={changeHandler}
                        />
                        <label htmlFor="email"/>

                        <input
                            placeholder="Введите пароль"
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={changeHandler}
                        />
                        <label htmlFor="email"/>
                    </div>

                    <div className={'auth__footer'}>
                        <Button
                            className="waves-effect waves-light btn blue"
                            style={{marginRight: 10}}
                            disabled={loading}
                            onClick={loginHandler}>
                            Войти
                        </Button>

                        <Button
                            className="waves-effect waves-light btn blue"
                            onClick={registerHandler}
                            disabled={loading}>
                            Регистрация
                        </Button>
                    </div>

                </div>
            </div>
        </div>

    )
}