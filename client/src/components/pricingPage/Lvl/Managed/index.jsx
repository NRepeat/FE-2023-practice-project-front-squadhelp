import React from "react";
import data from "../../data/index";
import style from "../style.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
export default function Managed(props) {
  const { selector: pricingFor } = props;
  const [lvlType, setLvlType] = useState(data.Managed.allType);
  useEffect(() => {
    if (pricingFor === "Name") {
      setLvlType(data.Managed.allType);
    } else if (pricingFor === "Logo") {
      setLvlType(data.Managed.allType);
    } else if (pricingFor === "Taglain") {
      setLvlType(data.Managed.allType);
    } else if (pricingFor === "Name,Tagline and Logo") {
      setLvlType(data.Managed.NameTaglineandLogo);
    }
  }, [pricingFor]);
  const colorsborderWrapper = classNames(style.borderWrapper, style.managed);
  const button = classNames(style.button, style.managed);
  return (
    <div className={style.lvlBox}>
      <div className={colorsborderWrapper}>
        <p className={style.head}> Managed</p>
        <p className={style.par}>A full agency experience without the agency price tag</p>
        <p className={style.money}>{lvlType.USD}</p>
      </div>
      <article className={style.managedP}>{lvlType.string.p.map((p)=><p>{p}</p>)}</article>
      <button className={button}>Start</button>
    </div>
  );
}
