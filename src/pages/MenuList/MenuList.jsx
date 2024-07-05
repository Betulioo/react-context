import React, { useEffect, useState } from "react";
import { getMenus, getComidas } from "../../services/api";
import CreateMenu from "../../components/CreateMenu/CreateMenu";
import CreateComida from "../../components/CreateComida/CreateComida";

export default function MenuList() {
  const [menus, setMenus] = useState([]);
  const [comidas, setComidas] = useState([]);
  const [comidasFiltradas, setComidasFiltradas] = useState([]);
  const [menuSeleccionado, setMenuSeleccionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMenus();
      setMenus(data);
      //   console.log(data);

      const comidasApi = await getComidas();
      //   console.log(comidasApi);
      setComidas(comidasApi);
    };
    fetchData();
  }, []);

  const handleMenuSemanal = (menuId) => {
    setMenuSeleccionado(menuId);
    setComidasFiltradas(
      comidas.filter((comida) => {
        return comida.menuId === menuId;
      })
    );
    console.log(comidasFiltradas);
  };

  return (
    <div>
      <h1>MENU SEMANAL</h1>
      <select onChange={(e) => handleMenuSemanal(e.target.value)}>
        {menus.map((menu) => (
          <option key={menu.id} value={menu.id}>
            {menu.name}{" "}
          </option>
        ))}
      </select>
      {comidasFiltradas.map((comida) => (
        <h2 key={comida.id}>{comida.name}</h2>
      ))}
      {/* <CreateMenu /> */}
      {/* <CreateComida /> */}
    </div>
  );
}
