import React from "react";
import "./Home.css";
import Todo from "../components/Todo";
const Home: React.FC = () => {
  return (
    <main className="hero">
      <h1 className="head">Your ToDo List</h1>
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
