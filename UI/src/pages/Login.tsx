import { useState } from "react";
import "./Login.css";
import axiosInstance from "../Request";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await axiosInstance.request({
        url: `account/login/`,
        method: "post",
        data: {
          username: username,
          password: password,
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
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your username"
              />
              <br />
              <input
                className="lo ainp"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            {error && <p className="error-message">{error}</p>}
          </section>
        </section>
      </article>
    </main>
  );
};

export default Login;
