import React from "react";
import Lvl from "../../components/pricingPage/Lvl";
import { useState } from "react";
import style from "./style.module.scss";
export default function PricingPage() {
  const [selectedLvl, setSelectedLvl] = useState("Name");
  return (
    <div className={style.pricingContainer}>
      {" "}
      <div className={style.selectWrapper}>
        {" "}
        <div className={style.selector}>
          {" "}
          Pricing for
          <select className={style.select}
            value={selectedLvl}
            onChange={(e) => setSelectedLvl(e.target.value)}
          >
            {" "}
            <option value="Name">Name</option>
            <option value="Logo">Logo</option>
            <option value="Taglain">Taglain</option>
            <option value="Name,Tagline and Logo">Name,Tagline and Logo</option>
          </select>
        </div>
      </div>
      <div className={style.LvlsContainer}>
        {" "}
        <Lvl lvl={selectedLvl} />
      </div>
    </div>
  );
}
