import React, { useEffect, useState } from "react";
import data from "../../data/index";
import style from "../style.module.scss";
import classNames from "classnames";
export default function Gold(props) {
  const { selector: pricingFor } = props;
  const [lvlType, setLvlType] = useState(data.Gold.name);

  useEffect(() => {
    if (pricingFor === "Name") {
      setLvlType(data.Gold.name);
    } else if (pricingFor === "Logo") {
      setLvlType(data.Gold.logo);
    } else if (pricingFor === "Taglain") {
      setLvlType(data.Gold.Taglain);
    } else if (pricingFor === "Name,Tagline and Logo") {
      setLvlType(data.Gold.NameTaglineandLogo);
    }
  }, [pricingFor]);

  const colorsborderWrapper = classNames(style.borderWrapper, style.gold);
  const button = classNames(style.button, style.gold);
  return (
    <div className={style.lvlBox}>
      <div className={colorsborderWrapper}>
        <p className={style.head}>Gold</p>
        <p className={style.par}>More privacy and Trademark support</p>
        <p className={style.money}>{lvlType.USD}</p>
      </div>
      <ul className={style.ul}>
        {lvlType.li.map((li, index) => (
          <li title="test" className={style.li} key={index}>
            {li}{" "}
            {index === 1 && (
              <ul>
                {lvlType.adds.map((p, i) => (
                  <li className={style.adds} key={i}>{p}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button className={button}>Start</button>
    </div>
  );
}
