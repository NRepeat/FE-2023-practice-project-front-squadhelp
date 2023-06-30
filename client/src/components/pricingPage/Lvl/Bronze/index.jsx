import React, { useEffect, useState } from "react";
import data from "../../data/index";
import style from "../style.module.scss";
import classNames from "classnames";

export default function Bronze(props) {
  const { selector: pricingFor } = props;
  const [lvlType, setLvlType] = useState(data.Bronze.name);

  useEffect(() => {
    if (pricingFor === "Name") {
      setLvlType(data.Bronze.name);
    } else if (pricingFor === "Logo") {
      setLvlType(data.Bronze.logo);
    } else if (pricingFor === "Taglain") {
      setLvlType(data.Bronze.Taglain);
    } else if (pricingFor === "Name,Tagline and Logo") {
      setLvlType(data.Bronze.NameTaglineandLogo);
    }
  }, [pricingFor]);
  const colorsborderWrapper = classNames(style.borderWrapper, style.bronze);
  const button = classNames(style.button, style.bronze);
  return (
    <div className={style.lvlBox}>
      <div className={colorsborderWrapper}>
        <p className={style.head}> Bronze</p>
        <p className={style.par}>Branding on a budget</p>
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
