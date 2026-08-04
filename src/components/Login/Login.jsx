import "./Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/auth/logo.png";
import loginIllustration from "../../assets/auth/login-illustration.png";
import googleIcon from "../../assets/auth/google.png";
import facebookIcon from "../../assets/auth/facebook.png";

import InputField from "../common/InputField/InputField";
import SocialButton from "../common/SocialButton/SocialButton";
import AuthButton from "../common/AuthButton/AuthButton";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        if (!email.trim() || !password.trim() || !rememberMe) {
            setError("Please enter email, password, and check Remember me to login.");
            window.setTimeout(() => setError(""), 3000);
            return;
        }

        login();
        navigate("/");
    };

    return (

        <div className="login-page">

            {/* LEFT */}

            <section className="login-left">

                <div className="login-container">

                    {/* Logo */}

                    <div className="login-logo">

                        <img
                            src={logo}
                            alt="Logo"
                        />

                        <h1>Log in</h1>

                    </div>

                    {/* Social Buttons */}

                    <div className="login-social">

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

                    <div className="login-divider">

                        <span></span>

                        <p>Or</p>

                        <span></span>

                    </div>

                    {/* Login Form */}

                    <form
                        className="login-form"
                        onSubmit={handleLogin}
                    >
                        {error && (
                            <div className="login-toast">
                                {error}
                            </div>
                        )}

                        <InputField
                            label="Email Address"
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <InputField
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Remember Me */}

                        <div className="login-options">

                            <label className="remember">

                                <input
                                  type="checkbox"
                                  checked={rememberMe}
                                  onChange={(e) => setRememberMe(e.target.checked)}
                                />

                                <span>Remember me</span>

                            </label>

                            <Link
                                to="/forgot-password"
                                className="forgot-password"
                            >
                                Reset Password?
                            </Link>

                        </div>

                        <AuthButton
                            text="Log in"
                        />

                    </form>

                    {/* Footer */}

                    <div className="login-footer">

                        <p>

                            Don't have an account?

                            <Link to="/signup">

                                New Account

                            </Link>

                        </p>

                    </div>

                </div>

            </section>

            {/* RIGHT */}

            <section className="login-right">

                <img
                    src={loginIllustration}
                    alt="Login Illustration"
                    className="login-illustration"
                />

            </section>

        </div>

    );

};

export default Login;