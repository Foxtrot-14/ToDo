import React from "react";
import "./Landing.css";
import Main from "../../public/undraw_checklist__re_2w7v.svg";
import { useNavigate } from "react-router-dom";
const Landing: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <main className="back">
      <button className="login" onClick={handleLogin}>
        LogIn
      </button>
      <article className="main">
        <img src={Main} alt="" />
        <h1>DailyDocket</h1>
      </article>
    </main>
  );
};

export default Landing;
