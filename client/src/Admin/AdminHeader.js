import {Button} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import React, {useContext} from 'react';

import {AuthContext} from "../Auth/AuthContext";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

import "./Admin.css"

function AdminHeader() {

    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }


    const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{
            background: `${theme.bg}`,
            color: `${theme.text}`,}}
             className={'header-admin'}>
            <h1 style={{
                background: `${theme.bgfordvfu}`,
                color: `${theme.text1}`}}
                className={'header'}> Администратор
                <Button onClick={() => toggleTheme()}>
                    {theme === dark ?  '🌙'  : '☀️'}
                </Button>
            </h1>
            <div style={{background: `${theme.bg}`}}
                 className={'header-menu'}>
                <div className={'header-info'}>

                    <NavLink to={'/admin'} className={'blue__text'}>
                        <p style={{
                            color: `${theme.textheader}`,
                            background: `${theme.bg}`}}>Список Заказов</p>
                    </NavLink>

                    <NavLink to={'/admin/pizza'} className={'blue__text'}>
                        <p style={{
                            color: `${theme.textheader}`,
                            background: `${theme.bg}`}}>Список Пиццы</p>
                    </NavLink>

                    <NavLink to={'/admin/add'} className={'blue__text'}>
                        <p style={{
                            color: `${theme.textheader}`,
                            background: `${theme.bg}`}}>Добавление продукта</p>
                    </NavLink>

                </div>

                <div className={'header__profile'}>
                    <p style={{
                        color: `${theme.textheader}`,
                        background: `${theme.bg}`
                    }}
                       className={'header__profile-data'}
                       onClick={logoutHandler}>
                        Выйти</p>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;