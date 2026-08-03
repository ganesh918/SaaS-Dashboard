import "./Signup.css";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/auth/logo.png";
import signupIllustration from "../../assets/auth/signup-illustration1.png";
import googleIcon from "../../assets/auth/google.png";
import facebookIcon from "../../assets/auth/facebook.png";

import InputField from "../common/InputField/InputField";
import SocialButton from "../common/SocialButton/SocialButton";
import AuthButton from "../common/AuthButton/AuthButton";

const Signup = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSignup = (e) => {

        e.preventDefault();

        // Authentication
        login();

        // Navigate to Dashboard
        navigate("/");

    };

    return (

        <div className="signup-page">

            {/* ==========================================
                            LEFT PANEL
            ========================================== */}

            <section className="signup-left">

                <div className="signup-container">

                    {/* Logo */}

                    <div className="signup-logo">

                        <img
                            src={logo}
                            alt="Base Logo"
                        />

                        <h1>Sign Up</h1>

                    </div>

                    {/* Social Buttons */}

                    <div className="signup-social">

                        <SocialButton
                            icon={googleIcon}
                            text="Google"
                        />

                        <SocialButton
                            icon={facebookIcon}
                            text="Facebook"
                        />

                    </div>

                    {/* Divider */}

                    <div className="signup-divider">

                        <span></span>

                        <p>Or</p>

                        <span></span>

                    </div>

                    {/* Form */}

                    <form
                        className="signup-form"
                        onSubmit={handleSignup}
                    >

                        <InputField
                            label="Full Name"
                            type="text"
                            placeholder="Jiangyu"
                        />

                        <InputField
                            label="Email Address"
                            type="email"
                            placeholder="example@gmail.com"
                        />

                        <InputField
                            label="Username"
                            type="text"
                            placeholder="johnkevine4362"
                        />

                        <InputField
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            password
                        />

                        {/* Terms */}

                        <label className="terms">

                            <input
                                type="checkbox"
                                required
                            />

                            <p>

                                By creating an account you agree to the

                                <Link to="/">
                                    {" "}terms of use{" "}
                                </Link>

                                and our

                                <Link to="/">
                                    {" "}privacy policy.
                                </Link>

                            </p>

                        </label>

                        {/* Button */}

                        <AuthButton
                            text="Create account"
                        />

                    </form>

                    {/* Footer */}

                    <div className="signup-footer">

                        <p>

                            Already have an account?

                            <Link to="/login">

                                Log in

                            </Link>

                        </p>

                    </div>

                </div>

            </section>

            {/* ==========================================
                           RIGHT PANEL
            ========================================== */}

            <section className="signup-right">

                <img
                    src={signupIllustration}
                    alt="Signup Illustration"
                    className="signup-illustration"
                />

            </section>

        </div>

    );

};

export default Signup;