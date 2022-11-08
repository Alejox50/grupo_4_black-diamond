import React, {useState} from "react";
import "./styles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Nav from "../../../components/Nav";


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

  const [fieldValue, setFieldValue] = useState();
  const [isImageAdded, setIsImageAdded] = useState(false);

  return (
    <>
      <Nav />
      {}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
         
          alert(JSON.stringify(values));
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
              {}
              <form noValidate onSubmit={handleSubmit}>
                <span>Registro</span>
                
                { isImageAdded?
                  <img style={{width: 150, height: 150,borderRadius: "50%"}} src={fieldValue} alt="Logo" /> :
                  <></>

                }
                {}
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
                {}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Introducir la Contraseña"
                  className="form-control"
                />
                {}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="file"
                  name="file"
                  onChange={(event) =>{
                    setFieldValue(URL.createObjectURL(event.target.files[0]));
                    setIsImageAdded(true);
                  }}
                />

                {}
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