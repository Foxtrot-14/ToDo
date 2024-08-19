import React from "react";
import "./SignUp.css";
const SignUp: React.FC = () => {
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
          <input
            type="password"
            placeholder="Re-enter password"
            className="field"
          />
          <input type="submit" value="SignUp" className="button" />
        </form>
      </article>
    </main>
  );
};

export default SignUp;
