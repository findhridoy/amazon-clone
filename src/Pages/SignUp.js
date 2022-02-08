import { Button } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/Warning";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import darkLogo from "../Images/dark-logo.png";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState([]);

  //   use context
  const { signup } = useGlobalContext();

  const handleSignUp = async (e) => {
    e.preventDefault();

    //   basic validation
    if (name === "" || name === " ") {
      setErrors((prevsValue) => [...prevsValue, "Enter your name"]);
    } else if (name) {
      setErrors([]);
    }
    if (email === "" || email === " ") {
      setErrors((prevsValue) => [...prevsValue, "Enter your email"]);
    } else if (email) {
      setErrors([]);
    }
    if (password === "" || password === " ") {
      setErrors((prevsValue) => [...prevsValue, "Enter your password"]);
    } else if (password) {
      setErrors([]);
    }
    if (password && (confirmPassword === "" || confirmPassword === " ")) {
      setErrors((prevsValue) => [...prevsValue, "Re-enter your password"]);
    } else if (confirmPassword) {
      setErrors([]);
    }
    if (password && confirmPassword && password !== confirmPassword) {
      setErrors((prevsValue) => [...prevsValue, "Password don't match."]);
    } else if (password && password === confirmPassword) {
      setErrors([]);
    }
    if (name && email && password && password === confirmPassword) {
      try {
        setErrors([]);
        setLoading(true);
        await signup(email, password, name);
        history.push("/");
        setLoading(false);
      } catch (err) {
        if (err) {
          setErrors((prevsValue) => [...prevsValue, err.message]);
        } else {
          setErrors([]);
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
        {errors.length > 0 && (
          <div className="ss__error">
            <WarningIcon className="ss__error--icon" />
            <ul>
              {errors?.map((err, index) => (
                <li className="ss__error--text" key={index}>
                  {err}
                </li>
              ))}
            </ul>
          </div>
        )}
        <form className="form__container" onSubmit={handleSignUp}>
          <h1 className="form__header--text">Create account</h1>
          <span className="form__group">
            <label className="form__label">Your name</label>
            <input
              type="text"
              className="form__control"
              onChange={(e) => setName(e.target.value)}
            />
          </span>

          <span className="form__group">
            <label className="form__label">Email</label>
            <input
              type="email"
              className="form__control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span className="form__group">
            <label className="form__label">Password</label>
            <input
              type="password"
              className="form__control"
              placeholder="At least 6 characters."
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="form__help--text">
              <ErrorOutlineIcon />
              Password must be at least 6 characters.
            </span>
          </span>

          <span className="form__group">
            <label className="form__label">Re-enter password</label>
            <input
              type="password"
              className="form__control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
