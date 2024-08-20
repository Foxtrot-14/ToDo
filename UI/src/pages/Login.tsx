import React from "react";
import "./Login.css";
import { Helmet } from "react-helmet";
const Login: React.FC = () => {
  const handleSubmit = () => {};
  return (
    <main>
      <Helmet>
        <title>Log In Page</title>
      </Helmet>
      <article className="amain">
        <section className="acen">
          <section className="lform">
            <h1 className="title">Log In</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="lo ainp"
                type="text"
                required
                placeholder="Enter your email or phone"
              />
              <br />
              <input
                className="lo ainp"
                type="password"
                required
                placeholder="Enter your password"
              />
              <br />
              <button className="log" type="submit">
                Login
              </button>
            </form>
            <h3>
              Don't have an account? <a href="/signup">SignUp</a>
            </h3>
            {/* {error && <p className="error-message">{error}</p>} */}
          </section>
        </section>
      </article>
    </main>
  );
};

export default Login;
