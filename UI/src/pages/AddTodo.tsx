import { useState, useEffect } from "react";
import "./AddTodo.css";
import axiosInstance from "../Request";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function formatDate(inputDate: string): string {
  const [day, month, year] = inputDate.split("/");
  return `${year}-${month}-${day}`;
}
const AddTodo: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/login");
      return;
    }
    setToken(token);
  }, [navigate]);
  const handleSubmit = async () => {
    const udate = formatDate(date);
    console.log(udate);
    try {
      const result = await axiosInstance.request({
        url: "/task/",
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          title: title,
          desc: desc,
          due_date: udate,
        },
      });
      if (result.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="hero">
      <Helmet>
        <title>Add ToDo Page</title>
      </Helmet>
      <h1 className="title-add">Add a To-Do</h1>
      <article className="container">
        <form className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter title"
          />
          <textarea
            placeholder="Enter description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Due date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </form>
        <button className="button green" onClick={handleSubmit}>
          Submit
        </button>
      </article>
    </main>
  );
};

export default AddTodo;
