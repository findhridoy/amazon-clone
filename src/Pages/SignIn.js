import { Button } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import darkLogo from "../Images/dark-logo.png";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState([]);

  //   use context
  const { signin } = useGlobalContext();

  const handleSignIn = async (e) => {
    e.preventDefault();

    //   basic validation
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
    if (email && password) {
      try {
        setErrors([]);
        setLoading(true);
        await signin(email, password);
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
      <div className="container">
        <div className="ss__container">
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
          <form className="form__container" onSubmit={handleSignIn}>
            <h1 className="form__header--text">Sign In</h1>
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
                onChange={(e) => setPassword(e.target.value)}
              />
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
