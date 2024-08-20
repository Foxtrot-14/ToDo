import React, { useState } from "react";
import "./Todo.css";
import formatDate from "./helper";
const Todo: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("Complete Your Work");
  const [description, setDescription] = useState<string>(
    "Describing the task here in detailed fashion"
  );
  const [dueDate, setDueDate] = useState<string>("2024-05-14");
  const [status, setStatus] = useState<string>("Pending");
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const handleCompleted = () => {
    setStatus("Completed");
  };
  return (
    <article
      className={status === "Pending" ? "todo-body" : "completed todo-body"}
    >
      {isEditing ? (
        <article className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="button green" onClick={handleSaveClick}>
            Save
          </button>
          <button className="button red" onClick={handleCancelClick}>
            Cancel
          </button>
        </article>
      ) : (
        <>
          <h1 className={status === "Pending" ? "title" : "title completed"}>
            {title}
          </h1>
          <p className="desc">{description}</p>
          <h3 className="date">Due On {formatDate(dueDate)}</h3>
          <h3 className="status">{status}</h3>
          {status === "Pending" ? (
            <section className="buttons">
              <button className="button red">Delete</button>
              <button className="button orange" onClick={handleEditClick}>
                Edit
              </button>
              <button className="button green" onClick={handleCompleted}>
                Completed
              </button>
            </section>
          ) : (
            <section className="buttons">
              <button className="button red">Delete</button>
            </section>
          )}
        </>
      )}
    </article>
  );
};

export default Todo;
