import React, { useState, useEffect } from 'react';
import { Menu, Image, Icon, Segment, Dropdown } from 'semantic-ui-react'
import logo from '../img/logo.png'
import { useNavigate } from "react-router-dom";
import { storeData } from '../states/stores';
import axios from "axios";

const Nav = () => {
    const navigate = useNavigate()
    const [isLogged, SetIsLogged] = useState(false);
    const getUser = storeData(state => state.user);
    const addUser = storeData(state => state.addUser);

    function handleSignOut() {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        addUser({})
        navigate("/")
        window.location.reload(false);
    }

    function redirectCamisas() {
        navigate("/camisas")
    }

    function redirectBusos() {
        navigate("/busos")
    }

    function redirectGorras() {
        navigate("/gorras")
    }

    function redirectCarrito() {
        navigate("/carrito")
    }

    function redirectJogger() {
        navigate("/jogger")
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

    function redirectAddProduct() {
        navigate("/addproduct")
    }


    const trigger = (
        <span>
            {isLogged ?
                getUser.NombreImagen === null ? <Icon name='user' />
                    : <img style={{ width: 50, height: 50, borderRadius: "50%" }} src={`http://localhost:3001/avatar/${getUser.NombreImagen}`} alt="Logo" />
                : <Icon name='user' />

            }
            {isLogged ? `Hola, ${getUser.Nombres}` : "Inicia Sesion"}
        </span>
    )

    const optionsUsuarioLogeado = [
        {
            key: 'user',
            text: (
                <span>
                    Hola <strong>{getUser.Nombres}</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'profile', text: 'Tu perfil' },
        { key: 'agregar-producto', text: 'Agregar producto', onClick: redirectAddProduct },
        { key: 'sign-out', text: 'Cerrar sesion', onClick: handleSignOut },
    ]

    const optionsUsuarioNoLogeado = [
        {
            key: 'user',
            disabled: true,
        },
        { key: 'login', text: 'Inicio Sesion', onClick: redirectLogin },
        { key: 'sign-up', text: 'Registro', onClick: redirectSignUp },
    ]


    useEffect(() => {
        const config = {
            headers: {
                "token": `${localStorage.getItem("accessToken")}`,
            },
        };
        axios.get("http://localhost:3001/getuserinfo", config)
            .then(function (response) {
                console.log(response.data.user)
                addUser(response.data.user)
                SetIsLogged(true)
            }).catch((err) => {
                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
                addUser({})
                SetIsLogged(false)
            })
    }, [])

    return (

        <Menu borderless>
            <Segment className='nav-segment'>
                <Menu.Item
                    onClick={redirectHome}
                >
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
                    onClick={redirectHome}
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
                    onClick={redirectGorras}
                />

                <Menu.Item
                    style={{ fontSize: "20px", fontWeight: 'bold' }}
                    name='Jogger'
                    size='large'
                    onClick={redirectJogger}
                />

                <Menu.Item position='right'>
                    <Dropdown trigger={trigger} options={isLogged ? optionsUsuarioLogeado : optionsUsuarioNoLogeado} />
                </Menu.Item>

                {isLogged ?
                    <Menu.Item
                        onClick={redirectCarrito}
                    >
                        <Icon name='shopping cart' size='large' color='green' />
                    </Menu.Item> : <></>
                }

            </Segment>
        </Menu>
    );
};

export default Nav