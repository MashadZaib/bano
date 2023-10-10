import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Form, Spinner, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formik, useFormik } from "formik";
import * as Yup from "yup";
import {loginUser} from "../../redux/Auth/authActions";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

  const dispatch = useDispatch();
  	
  const navigate = useNavigate();
	

	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Email is required"),
		password: Yup.string().required("Password is required")
	});
  	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
    validationSchema,
    onSubmit: async (values) => {
      try {
		console.log(values);
        const response = await dispatch(loginUser(values));
		// if(response) {
		// 	setLoading(true);
		// 	setTimeout(() => {
		// 		navigate(`${process.env.PUBLIC_URL}/auth-success`);
		// 	}, 1000);
		// }
      } catch (error) {
        console.log(error);
      }
    },
  });
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = formik;





 
 

  return <>
    <Head title="Login" />
      <Block className="nk-block-middle nk-auth-body  wide-xs">
        <div className="brand-logo pb-4 text-center">
          <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
            <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
            <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
          </Link>
        </div>

        <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Sign-In</BlockTitle>
              <BlockDes>
                <p>Access Dashlite using your email and passcode.</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
          {errorVal && (
            <div className="mb-3">
              <Alert color="danger" className="alert-icon">
                <Icon name="alert-circle" /> Unable to login with credentials{" "}
              </Alert>
            </div>
          )}
          <Form className="is-alter" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Email or Username
                </label>
              </div>
              <div className="form-control-wrap">
              <input
                  type="email"
                  id="email"
				  name="email"
				  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-control-lg form-control" />
                 	{	errors.name && touched.name && (
						<p className="invalid">
							{errors.name}
						</p>
					)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="password">
                  Passcode
                </label>
                <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
                  Forgot Code?
                </Link>
              </div>
              <div className="form-control-wrap">
                <a
                  href="#password"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setPassState(!passState);
                  }}
                  className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                >
                  <Icon name="eye" className="passcode-icon icon-show"></Icon>

                  <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                </a>
                <input
                  type={passState ? "text" : "password"}
                  id="password"
				  name="password"
				  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`} />
               		{	errors.password && touched.password && (
						<p className="invalid">
							{errors.password}
						</p>
					)}
              </div>
            </div>
            <div className="form-group">
              <Button size="lg" className="btn-block" type="submit" color="primary">
                {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
              </Button>
            </div>
          </Form>
          <div className="form-note-s2 text-center pt-4">
            New on our platform? <Link to={`${process.env.PUBLIC_URL}/auth-register`}>Create an account</Link>
          </div>
          <div className="text-center pt-4 pb-3">
            <h6 className="overline-title overline-title-sap">
              <span>OR</span>
            </h6>
          </div>
          <ul className="nav justify-center gx-4">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#socials"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#socials"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Google
              </a>
            </li>
          </ul>
        </PreviewCard>
      </Block>
      <AuthFooter />
  </>;
};
export default Login;
