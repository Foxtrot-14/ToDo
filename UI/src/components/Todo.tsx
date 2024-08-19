import React from "react";
import "./Todo.css";
const Todo: React.FC = () => {
  return (
    <article className="todo-body">
      <h1 className="title">Complete Your Work</h1>
      <h3 className="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum
        ratione nulla nostrum perferendis
      </h3>
      <h3 className="date">Due On 14 May</h3>
      <h3 className="status">Pending</h3>
      <section className="buttons">
        <button className="button red">Delete</button>
        <button className="button orange">Edit</button>
        <button className="button green">Completed</button>
      </section>
    </article>
  );
};

export default Todo;
