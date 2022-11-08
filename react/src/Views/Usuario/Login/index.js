import "./styles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Nav from "../../../components/Nav";


const schema = Yup.object().shape({
  email: Yup.string()
    .required("Correo electronico requerido")
    .email("Correo no valido"),
  password: Yup.string()
    .required("Contraseña requerida")
    .min(8, "Contraseña debe de tener minimo 8 caracteres")
    .max(50,"Contraseña debe de tener maximo 50 caracteres"),
});

function App() {
  return (
    <>
      <Nav/>
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
                <span>Iniciar Sesion</span>
              {}
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
                {}
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