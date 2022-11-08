import React, { useState } from "react";
import "./styles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Nav from "../../../components/Nav";
import axios from "axios";
import FormData from 'form-data'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
  name: Yup.string()
    .max(40,"El nombre debe tener maximo 40 caracteres")
    .required("El nombre es requerido"),
  descripcion: Yup.string()
    .max(200,"La descripcion debe tener maximo 200 caracteres")
    .required("descripcion es requerido"),
  precio: Yup.number()
    .required('Precio es requerido')
    .test(
      'Is positive?',
      'No se aceptan valores negativos',
      (value) => value > 0
    )
});

function App() {
  const navigate = useNavigate()
  const [fieldValue, setFieldValue] = useState();
  const [fieldValue2, setFieldValue2] = useState();
  const [isImageAdded, setIsImageAdded] = useState(false);

  return (
    <>
      <Nav />
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ idCategoria:1, idTalla:1, idColor:1 }}
        onSubmit={(values) => {
          console.log(values) 
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          axios.post("http://localhost:3001/products", values).then((response) => {
            if (isImageAdded) {
              const formData = new FormData();
              formData.append('uploaded_file', fieldValue2[0]);
              formData.append('uploaded_file', fieldValue2[0].name);
              axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
              axios.post(`http://localhost:3001/uploadProduct/${response.data.idProduct}`, formData, {
                headers: {
                  'accept': 'application/json',
                  'Accept-Language': 'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                }
              })
                .then(() => {
                  Swal.fire({
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    window.location.reload(false);
                  })
                }).catch(() => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Opps Ocurrio un error',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate("/")
                });
            }
          }).catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Opps Ocurrio un error',
              showConfirmButton: false,
              timer: 1500
            })
            navigate("/")
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Agregar producto</span>

                {isImageAdded ?
                  <img style={{ width: 150, height: 150, borderRadius: "50%" }} src={fieldValue} alt="Logo" /> :
                  <></>

                }
                <input
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Ingrese el Nombre"
                  className="form-control inp_text"
                  id="name"
                />

                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>

                <input
                  type="descripcion"
                  name="descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descripcion}
                  placeholder="Ingrese descripcion"
                  className="form-control inp_text"
                  id="descripcion"
                />

                <p className="error">
                  {errors.descripcion && touched.descripcion && errors.descripcion}
                </p>

                <input
                  type="precio"
                  name="precio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.precio}
                  placeholder="Precio"
                  className="form-control inp_text"
                  id="precio"
                />

                <p className="error">
                  {errors.precio && touched.precio && errors.precio}
                </p>

                <select
                  name="idTalla"
                  onChange={handleChange}
                  value={values.idTalla}
                  className="form-control inp_text"
                >
                  <option value={1}>XXXL</option>
                  <option value={2}>XXL</option>
                  <option value={3}>XL</option>
                  <option value={4}>S</option>
                  <option value={5}>M</option>
                  <option value={6}>L</option>
                  <option value={7}>XS</option>
                  <option value={8}>XXS</option>
                  <option value={9}>XXXS</option>
                </select>

                <select
                  name="idColor"
                  onChange={handleChange}
                  value={values.idColor}
                  className="form-control inp_text"
                >
                  <option value={1}>Blanco</option>
                  <option value={2}>Negro</option>
                  <option value={3}>Gris</option>
                  <option value={4}>Naranja</option>
                  <option value={5}>Cafe</option>
                  <option value={6}>Verde</option>
                  <option value={7}>Rojo</option>
                  <option value={8}>Azul</option>
                  <option value={9}>Amarillo</option>
                </select>

                <select
                  name="idCategoria"
                  onChange={handleChange}
                  value={values.idCategoria}
                  className="form-control inp_text"
                >
                  <option value={1}>Gorras</option>
                  <option value={2}>Jogger</option>
                  <option value={3}>Camisetas</option>
                  <option value={4}>Busos</option>
                </select>

                <input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    setFieldValue(URL.createObjectURL(event.target.files[0]));
                    setFieldValue2(event.target.files);

                    setIsImageAdded(true);
                  }}
                />

                <button type="submit">Registrar</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default App;