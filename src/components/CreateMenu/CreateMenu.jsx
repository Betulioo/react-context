import React, { useState } from "react";
import { createMenu } from "../../services/api";

export default function CreateMenu() {
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const newMenu = {
      name,
    };
    const createdMenu = await createMenu(newMenu);
    console.log("Menu creado: ", createdMenu);
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(evento) => setName(evento.target.value)}
        />
        <button type="submit">CREAR MENU</button>
      </form>
    </>
  );
}
