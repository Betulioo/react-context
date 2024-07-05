import React, { useState } from "react";
import { createComida } from "../../services/api";

export default function CreateComida() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    image: "",
    description: "",
    day: "",
    menuId: "",
  });

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const nuevaComida = {
      type: formData.type,
      name: formData.name,
      image: formData.image,
      description: formData.description,
      day: formData.day,
      menuId: formData.menuId,
    };

    const createdComida = await createComida(nuevaComida);
    console.log("Comida Creada: ", createdComida);

    setFormData({
      type: "",
      name: "",
      image: "",
      description: "",
      day: "",
      menuId: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Comida</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo de Comida</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Selecciona un tipo</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
          </select>
        </div>
        <div>
          <label>URL imagen</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripcion</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dia de la semana</label>
          <select name="day" value={formData.day} onChange={handleChange}>
            <option value="">Selecciona un Dia de la semana</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miercoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sabado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>
        <div>
          <label>Menu id</label>
          <input
            type="text"
            name="menuId"
            value={formData.menuId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">CREAR COMIDA</button>
      </form>
    </>
  );
}
