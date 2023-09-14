import { useNavigate } from "react-router-dom";
// import { useLocation } from "../hooks/useLocation";

import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

import "./loginModal.css";

const LoginPage = ( { setIsAuth } ) => {
  // const location = useLocation();
  const navigate = useNavigate();

  const login = () => {
    navigate( "/" );
    setIsAuth( true );
    localStorage.setItem( "isAuth", true );
  };
  // console.log(location);
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Form className="form-login">
        <h1>
          Login
        </h1>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="username"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </Form>
    </div>
  );
};

LoginPage.propTypes = {
  setIsAuth: PropTypes.func,
};

export default LoginPage;
