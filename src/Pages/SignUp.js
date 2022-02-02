import { Button } from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import darkLogo from "../Images/dark-logo.png";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (

        <section className="ss__section">
            <div className="ss__container container">
                <div className="ss__logo">
                    <Link to="/"> <img src={darkLogo} alt="Dark Logo" /></Link>
                </div>
                <form className="form__container">
                    <h1 className="form__header--text">Create account</h1>
                    <span className="form__group">
                        <label className="form__label">Your name</label>
                        <input type="text" className="form__control" onChange={e => setName(e.target.value)} />
                    </span>

                    <span className="form__group">
                        <label className="form__label">Email</label>
                        <input type="email" className="form__control" onChange={e => setEmail(e.target.value)} />
                    </span>

                    <span className="form__group">
                        <label className="form__label">Password</label>
                        <input type="password" className="form__control" placeholder="At least 6 characters." onChange={e => setPassword(e.target.value)} />
                        <span className="form__help--text"><ErrorOutlineIcon />Password must be at least 6 characters.</span>
                    </span>

                    <span className="form__group">
                        <label className="form__label">Re-enter password</label>
                        <input type="password" className="form__control" onChange={e => setConfirmPassword(e.target.value)} />
                    </span>

                    <div className="form__button">
                        <Button type="submit" variant="contained">Continue</Button>
                    </div>
                    <span className="form__condition">By continuing, you agree to Amazon's <Link className="form__link" to="/conditionsOfUse">Conditions of Use</Link> and <Link className="form__link" to="/privacyNotice">Privacy Notice.</Link>
                    </span>
                    <span className="from__bottom--text">
                        Already have an account?
                        <Link className="form__link form__link--icon" to="/signin">
                            Sign-In<ArrowRightIcon />
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    )
}
export default SignUp;