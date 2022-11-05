import React, { useState } from 'react';
import { Menu, Image, Icon, Segment, Dropdown } from 'semantic-ui-react'
import logo from '../img/logo.png'
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()
    const [isLogged, SetIsLogged] = useState(false);

    function handleItemClick() {
        alert("reasda")
    }

    function redirectCamisas() {
        navigate("/camisas")
    }

    function redirectBusos() {
        navigate("/busos")
    }

    function redirectHome() {
        navigate("/")
    }

    function redirectLogin() {
        navigate("/login")
    }

    function redirectSignUp() {
        navigate("/signup")
    }

    const trigger = (
        <span>
            <Icon name='user' /> {isLogged? "Hello, Bob": "Inicia Sesion"}
        </span>
    )

    const optionsUsuarioLogeado = [
        {
            key: 'user',
            text: (
                <span>
                    Signed in as <strong>Bob Smith</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'profile', text: 'Your Profile' },
        { key: 'settings', text: 'Settings' },
        { key: 'sign-out', text: 'Sign Out', onClick: handleItemClick },
    ]

    const optionsUsuarioNoLogeado = [
        {
            key: 'user',
            disabled: true,
        },
        { key: 'login', text: 'Inicio Sesion', onClick: redirectLogin },
        { key: 'sign-up', text: 'Registro', onClick: redirectSignUp },
    ]

    return (

        <Menu borderless>
            <Segment className='nav-segment'>
                <Menu.Item>
                    <Image src={logo} size='small' />
                </Menu.Item>

                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Home'
                    size='large'
                    onClick={redirectHome}
                />

                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Todo'
                    size='large'
                    onClick={handleItemClick}
                />

                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Camisetas'
                    size='large'
                    onClick={redirectCamisas}
                />
                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Busos'
                    size='large'
                    onClick={redirectBusos}
                />
                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Gorras'
                    size='large'
                    onClick={handleItemClick}
                />

                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Jogger'
                    size='large'
                    onClick={handleItemClick}
                />

                <Menu.Item position='right'>
                    <Dropdown trigger={trigger} options={isLogged? optionsUsuarioLogeado : optionsUsuarioNoLogeado} />
                </Menu.Item>

                <Menu.Item>
                    <Icon name='shopping cart' size='large' color='green' />
                </Menu.Item>

            </Segment>
        </Menu>
    );
};

export default Nav