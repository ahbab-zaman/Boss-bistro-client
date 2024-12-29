import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await axios.get("./menu.json");
      setLoading(data);
      setMenu(data);
    };
    fetchMenu();
  }, []);
  return [menu, loading];
};

export default useMenu;
