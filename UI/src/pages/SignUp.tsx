import React from "react";
import { Helmet } from "react-helmet";
const SignUp: React.FC = () => {
  const handleSubmit = () => {};
  return (
    <main>
      <Helmet>
        <title>Log In Page</title>
      </Helmet>
      <article className="amain">
        <section className="acen">
          <section className="lform">
            <h1 className="title">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="lo ainp"
                type="email"
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
              <input
                className="lo ainp"
                type="password"
                required
                placeholder="Re-enter your password"
              />
              <br />
              <button className="log" type="submit">
                Sign In
              </button>
            </form>
            <h3>
              Already have an account? <a href="/login">LogIn</a>
            </h3>
            {/* {error && <p className="error-message">{error}</p>} */}
          </section>
        </section>
      </article>
    </main>
  );
};

export default SignUp;
