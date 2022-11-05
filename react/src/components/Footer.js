import React from 'react';
import './footerStyles.css'
import logo from '../img/logo.png'
import facebook from '../img/facebook-f.svg'
import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.svg'
import whatsapp from '../img/whatsapp.svg'

const Footer = () => {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src={logo} alt="Logo de SLee Dw" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                        <p>El contenido de esta página web está protegido
                            por copyright y es propiedad de Black Diamond.
                            La idea de negocio de Black Diamond consiste en ofrecer moda y calidad
                            al mejor precio de manera sustentable. Desde que se fundó en 2022,
                            Black Diamond ha crecido hasta convertirse en una de las principales compañías de moda
                            a nivel mundial.
                        </p>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="#">
                            <img style={{width:"60%", height:"60%", marginTop:"15%"}} src={facebook} alt="Logo de SLee Dw" />
                        </a> 
                        <a href="#"> 
                            <img style={{width:"60%", height:"60%", marginTop:"15%"}} src={twitter} alt="Logo de SLee Dw" />
                        </a> 
                        <a href="#"> 
                            <img style={{width:"60%", height:"60%", marginTop:"15%"}} src={instagram} alt="Logo de SLee Dw" />
                        </a> 
                        <a href="#"> 
                            <img style={{width:"60%", height:"60%", marginTop:"15%"}} src={whatsapp} alt="Logo de SLee Dw" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>© 2022 <b>Black Diamond</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    );
};

export default Footer;