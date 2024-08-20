import React from "react";
import "./Home.css";
import Todo from "../components/Todo";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add");
  };
  return (
    <main className="hero">
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
