import React, { useState, useMemo } from "react";

import api from "../../services/api";

import camera from "../../assets/camera.svg";

import "./estilos.css";

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState("");
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="thumbnail"
        style={{
          backgroundImage: `url(${preview})`,
          marginBottom: 20,
          border: 1,
          borderStyle: "dashed",
          borderColor: "grey",
          backgroundSize: "cover",
          cursor: "pointer",
          height: 160,

          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={e => setThumbnail(e.target.files[0])}
          // style={{ display: "none" }}
        />
        <img src={camera} alt="SelectImage" />
      </label>

      <label htmlFor="company">EMPRESA:</label>
      <input
        type="text"
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIAS: <span>Separados por virgula.</span>
      </label>
      <input
        type="text"
        id="techs"
        placeholder="As tecnologias que a empresa utiliza"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="techs">
        PREÇO: <span>Nāo preencher, se for Gratuito. </span>
      </label>
      <input
        type="text"
        id="price"
        placeholder="Valor da diária do spot"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <button onSubmit={handleSubmit} className="btn">
        Cadastrar
      </button>
    </form>
  );
}
