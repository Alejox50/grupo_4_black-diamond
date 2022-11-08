import React, { useState, useEffect } from 'react';
import "./styles.css";
import axios from 'axios'


export default function App() {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCat();
    }, []);

    async function getCat() {
        axios.get('https://aws.random.cat/meow')
            .then(response => {
                setUrl(response.data.file)
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })
    }

    return (
        <div className="err_page">
            {loading ? <></> :
                <>
                    <div className="err_page_left">
                        <img className="img" style={{ width: "500px", height: "500px" }} src={url} alt="bebe"  ></img>

                    </div>
                    <div className="err_page_right">
                        <h1>404</h1>
                        <h4>OOPS. al parecer esta pagina ya no existe</h4>
                        <p>Pero mira el lado bueno hay imagenes de gatitos</p>
                        <button className="err_btn">Back to home</button>{"  "}
                        <button className="err_btn">Contact Us</button>
                    </div>
                </>
            }
        </div>
    );
}
