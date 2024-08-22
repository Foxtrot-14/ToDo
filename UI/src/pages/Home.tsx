import React, { useEffect, useState } from "react";
import "./Home.css";
// import axiosInstance from "../Request";
import Todo from "../components/Todo";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    setToken(token);
  }, [navigate]);
  const handleClick = () => {
    navigate("/add");
  };
  const handleOut = () => {
    localStorage.removeItem("token");
    console.log(token);
    navigate("/");
  };
  return (
    <main className="hero">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <button className="out" onClick={handleOut}>
        LogOut
      </button>
      <button className="add" onClick={handleClick}>
        Add
      </button>
      <h1 className="head">Your To-Do List</h1>
      <article className="container-home">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </article>
    </main>
  );
};

export default Home;
