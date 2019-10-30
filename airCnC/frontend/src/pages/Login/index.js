import React, { useState } from "react";

import api from "../../services/api";
// import { Container } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <p>
        Ofereca locais de <strong>trabalho</strong> para programadores, e
        encontre <strong>talentos</strong> para a sua empresa.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleEmailChange}
        />

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
