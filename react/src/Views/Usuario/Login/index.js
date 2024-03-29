import "./styles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Nav from "../../../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { storeData } from '../../../states/stores';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Correo electronico requerido")
    .email("Correo no valido"),
  password: Yup.string()
    .required("Contraseña requerida")
    .min(8, "Contraseña debe de tener minimo 8 caracteres")
    .max(50, "Contraseña debe de tener maximo 50 caracteres"),
});

function App() {
  const navigate = useNavigate()
  const addUser = storeData(state => state.addUser);

  return (
    <>
      <Nav />
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values)
          axios.defaults.baseURL = 'http://localhost:3001/login';
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          await axios.post("http://localhost:3001/login", values).then(async (response) => {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);

            const config = {
              headers: {
                "token": `${response.data.accessToken}`,
              },
            };
            await axios.get("http://localhost:3001/getuserinfo", config)
              .then(function (response) {
                addUser(response.data.user)
              });
            Swal.fire({
              icon: 'success',
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
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Iniciar Sesion</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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
                {/* Click on submit button to submit the form */}
                <button type="submit">Iniciar Sesion</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default App;