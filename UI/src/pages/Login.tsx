import React from "react";
import "./Login.css";
const Login: React.FC = () => {
  const handleSubmit = () => {};
  return (
    <main className="hero">
      <article className="container">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter email" className="field" />
          <input
            type="password"
            placeholder="Enter password"
            className="field"
          />
          <input type="submit" value="LogIn" className="button" />
        </form>
      </article>
    </main>
  );
};

export default Login;
