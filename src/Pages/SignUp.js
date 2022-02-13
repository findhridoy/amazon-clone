import { Button } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/Warning";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import darkLogo from "../Images/dark-logo.png";

const SignUp = ({ history, location, replace }) => {
  const [loading, setLoading] = useState();
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [error, setError] = useState("");

  //   use context
  const { signup } = useGlobalContext();

  // Redirect
  let { from } = location.state || { from: { pathname: "/" } };

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit name, email and password
  const onSubmit = async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      setConfirmPassError(true);
    } else {
      try {
        setConfirmPassError(false);
        setError("");
        setLoading(true);
        await signup(email, password, name);
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
    }
  };

  return (
    <section className="ss__section">
      <div className="ss__container container">
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
          <h1 className="form__header--text">Create account</h1>
          <span className="form__group">
            <label className="form__label">Your name</label>
            <input
              type="name"
              className="form__control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="form__error">
                <ErrorOutlineIcon className="form__error--icon" />
                Enter your name
              </span>
            )}
          </span>

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
              placeholder="At least 6 characters."
              {...register("password", { required: true })}
            />

            {errors.password ? (
              <span className="form__error">
                <ErrorOutlineIcon className="form__error--icon" />
                Enter your password
              </span>
            ) : (
              <span className="form__help--text">
                <ErrorOutlineIcon />
                Password must be at least 6 characters.
              </span>
            )}
          </span>

          <span className="form__group">
            <label className="form__label">Re-enter password</label>
            <input
              type="password"
              className="form__control"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="form__error">
                <ErrorOutlineIcon className="form__error--icon" />
                Re-enter your password
              </span>
            )}
            {confirmPassError && (
              <span className="form__error">
                <ErrorOutlineIcon className="form__error--icon" />
                Password don't match
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
            <Link className="form__link" to="/conditionsOfUse">
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link className="form__link" to="/privacyNotice">
              Privacy Notice.
            </Link>
          </span>
          <span className="from__bottom--text">
            Already have an account?
            <Link className="form__link form__link--icon" to="/signin">
              Sign-In
              <ArrowRightIcon />
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
