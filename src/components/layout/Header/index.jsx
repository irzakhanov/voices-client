import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVoicesFromApi, selectLoading } from "../../../features/voicesSlice";
import { Button } from "../../ui/Button";

import cl from "./header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handleClick = () => {
    dispatch(fetchVoicesFromApi());
  };

  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.flex}>
          <div className={cl.headerLogo}>Voices</div>
          <Button onClick={handleClick} disabled={loading || false}>
            Получить данные
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
