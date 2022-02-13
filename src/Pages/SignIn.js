import { Button } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/Warning";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import darkLogo from "../Images/dark-logo.png";

const SignIn = ({ history, location, replace }) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  //   use context
  const { signin } = useGlobalContext();

  // Redirect
  let { from } = location.state || { from: { pathname: "/" } };

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit email and password
  const onSubmit = async ({ email, password }) => {
    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      history.replace(from);
      setLoading(false);
    } catch (err) {
      if (err) {
        setError(err.message);
      } else {
        setError("");
      }
      setLoading(false);
    }
  };
  return (
    <section className="ss__section">
      <div className="container">
        <div className="ss__container">
          <div className="ss__logo">
            <Link to="/">
              {" "}
              <img src={darkLogo} alt="Dark Logo" />
            </Link>
          </div>
          {error && (
            <div className="ss__error">
              <WarningIcon className="ss__error--icon" />
              <span className="ss__error--text">{error}</span>
            </div>
          )}
          <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__header--text">Sign In</h1>
            <span className="form__group">
              <label className="form__label">Email</label>
              <input
                type="email"
                className="form__control"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="form__error">
                  <ErrorOutlineIcon className="form__error--icon" />
                  Enter your email
                </span>
              )}
            </span>
            <span className="form__group">
              <label className="form__label">Password</label>
              <input
                type="password"
                className="form__control"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="form__error">
                  <ErrorOutlineIcon className="form__error--icon" />
                  Enter your password
                </span>
              )}
            </span>
            <div className="form__button">
              <Button type="submit" variant="contained" disabled={loading}>
                Continue
              </Button>
            </div>
            <span className="form__condition">
              By continuing, you agree to Amazon's{" "}
              <Link to="/conditionsOfUse" className="form__link">
                Conditions of Use
              </Link>{" "}
              and{" "}
              <Link to="/privacyNotice" className="form__link">
                Privacy Notice.
              </Link>
            </span>
          </form>

          <div className="ss__bottom--section">
            <span className="ss__bottom--text">New to Amazon?</span>
            <div className="ss__bottom--button">
              <Button variant="contained">
                <Link to="/signup" className="button__text">
                  Create your Amazon account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
