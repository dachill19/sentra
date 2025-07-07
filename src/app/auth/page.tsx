"use client";

import React, { useState } from "react";
import LoginPage from "./login/page";
import SignupPage from "./signup/page";

const AuthPage: React.FC = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleLogin = () => {
        // Handle successful login
        console.log("Login successful");
        // Redirect to dashboard or handle login logic
        window.location.href = "/dashboard";
    };

    const handleSignup = () => {
        // Handle successful signup
        console.log("Signup successful");
        // Redirect to dashboard or handle signup logic
        window.location.href = "/dashboard";
    };

    const toggleAuthMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    return (
        <div>
            {isLoginMode ? (
                <LoginPage
                    onLogin={handleLogin}
                    onToggleAuth={toggleAuthMode}
                />
            ) : (
                <SignupPage
                    onSignup={handleSignup}
                    onToggleAuth={toggleAuthMode}
                />
            )}
        </div>
    );
};

export default AuthPage;
