import React from "react";
import "./AddTodo.css";
const AddTodo: React.FC = () => {
  return (
    <main className="hero">
      <h1 className="title-add">Add a To-Do</h1>
      <article className="container">
        <form className="edit-form">
          <input type="text" placeholder="Enter title" />
          <textarea placeholder="Enter description" />
          <input type="date" placeholder="Due date" />
          <button className="button green">Submit</button>
        </form>
      </article>
    </main>
  );
};

export default AddTodo;
