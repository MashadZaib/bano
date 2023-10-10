import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";

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
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { formik, useFormik } from "formik";
import * as Yup from "yup";
import {
	registerUser,
  } from "../../redux/Auth/authActions";

const Register = () => {
	const dispatch = useDispatch();
  	const [passState, setPassState] = useState(false);
  	const [loading, setLoading] = useState(false);
  	const navigate = useNavigate();
	

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
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
        const response = await dispatch(registerUser(values));
		if(response) {
			setLoading(true);
			setTimeout(() => {
				navigate(`${process.env.PUBLIC_URL}/auth-success`);
			}, 1000);
		}
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
    <Head title="Register" />
      <Block className="nk-block-middle nk-auth-body  wide-xs">
        <div className="brand-logo pb-4 text-center">
          <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
            <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
            <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
          </Link>
        </div>
        <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Register</BlockTitle>
              <BlockDes>
                <p>Create New Dashlite Account</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
          <form className="is-alter" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="name"
				  name="name"
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
                <label className="form-label" htmlFor="default-01">
                  Email
                </label>
              </div>
              <div className="form-control-wrap">
                <input
                  type="email"
                  bssize="lg"
				  name="email"
				  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-control-lg form-control" />
                 	{	errors.email && touched.email && (
						<p className="invalid">
							{errors.email}
						</p>
					)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
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
              <Button type="submit" color="primary" size="lg" className="btn-block">
                {loading ? <Spinner size="sm" color="light" /> : "Register"}
              </Button>
            </div>
          </form>
          <div className="form-note-s2 text-center pt-4">
            {" "}
            Already have an account?{" "}
            <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
              <strong>Sign in instead</strong>
            </Link>
          </div>
        
        </PreviewCard>
      </Block>
  </>;
};
export default Register;
