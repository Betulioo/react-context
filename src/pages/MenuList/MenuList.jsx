import React, { useEffect } from "react";
import { getMenus } from "../../services/api";

export default function MenuList() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMenus();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>MENU LIST WORKS</h2>
    </div>
  );
}
