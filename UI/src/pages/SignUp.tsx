import { useState } from "react";
import { Helmet } from "react-helmet";
import axiosInstance from "../Request";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await axiosInstance.request({
        url: `account/register/`,
        method: "post",
        data: {
          username: username,
          email: email,
          password: password1,
          password2: password2,
        },
      });
      localStorage.setItem("token", result.data["token"]);
      if (result.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        setError(axiosError.response.data.message || "Username already taken");
      } else if (axiosError.request) {
        setError("No response received from server");
      } else {
        setError("Error in setting up the request");
      }
    }
  };

  return (
    <main>
      <Helmet>
        <title>Sign Up Page</title>
      </Helmet>
      <article className="amain">
        <section className="acen">
          <section className="lform">
            <h1 className="title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="lo ainp"
                type="text"
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your username"
              />
              <br />
              <input
                className="lo ainp"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
              />
              <br />
              <input
                className="lo ainp"
                type="password"
                required
                value={password1}
                onChange={(e) => {
                  setPassword1(e.target.value);
                }}
                placeholder="Enter your password"
              />
              <br />
              <input
                className="lo ainp"
                type="password"
                required
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                placeholder="Re-enter your password"
              />
              <br />
              <button className="log" type="submit">
                Sign Up
              </button>
            </form>
            <h3>
              Already have an account? <a href="/login">Log In</a>
            </h3>
            {error && <p className="error-message">{error}</p>}
          </section>
        </section>
      </article>
    </main>
  );
};

export default SignUp;
