import React, {useState} from "react";
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
  firstName: Yup.string()
    .max(40)
    .required("El nombre es requerido"),
  lastName: Yup.string()
    .max(40)
    .required("El apellido es requerido"),
  userName: Yup.string()
    .min(4, "El nombre de usuario requiere minimo 4 caracteres")
    .max(50, "El nombre de usuario requiere maximo 50 caracteres")
    .required("El nombre de usuario es requerido"),
  email: Yup.string()
    .required("Correo electronico requerido")
    .email("Correo no valido"),
  password: Yup.string()
    .required("Contraseña requerida")
    .min(8, "Contraseña debe de tener minimo 8 caracteres"),
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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          axios.post("http://localhost:3001/signup", values).then((response) => {
            if (isImageAdded) {
              const formData = new FormData();
              formData.append('uploaded_file', fieldValue2[0]);
              formData.append('uploaded_file', fieldValue2[0].name);
              axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
              axios.post(`http://localhost:3001/uploadAvatar/${response.data.idUser}`, formData, {
                headers: {
                  'accept': 'application/json',
                  'Accept-Language': 'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                }
              })
                .then((response) => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Usuario Registrado',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    navigate("/")
                  }).catch(() => {
                    Swal.fire({
                      icon: 'error',
                      title: 'Opps Ocurrio un error',
                      showConfirmButton: false,
                      timer: 1500
                    })
                    navigate("/")
                  });
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
            console.log(err)
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
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Registro</span>
                
                { isImageAdded?
                  <img style={{width: 150, height: 150,borderRadius: "50%"}} src={fieldValue} alt="Logo" /> :
                  <></>

                }
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="Ingrese el Nombre"
                  className="form-control inp_text"
                  id="firstName"
                />

                <p className="error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>

                <input
                  type="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Introduzca el apellido"
                  className="form-control inp_text"
                  id="lastName"
                />

                <p className="error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>

                <input
                  type="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  placeholder="Nombre de Usuario"
                  className="form-control inp_text"
                  id="userName"
                />

                <p className="error">
                  {errors.userName && touched.userName && errors.userName}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Ingrese Correo Electrónico"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Introducir la Contraseña"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="file"
                  name="file"
                  onChange={(event) =>{
                    setFieldValue(URL.createObjectURL(event.target.files[0]));
                    setFieldValue2(event.target.files);
                    
                    setIsImageAdded(true);
                  }}
                />

                {/* Click on submit button to submit the form */}
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