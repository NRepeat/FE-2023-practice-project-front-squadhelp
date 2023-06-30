import React from "react";
import Bronze from "./Bronze";
import Gold from "./Gold";
import Platinum from "./Platinum";
import Managed from "./Managed";
import style from "./style.module.scss";
export default function Lvl(props) {
  return (
    <>
      <div className={style.lvlWrapper}>
        {" "}
        <Bronze selector={props.lvl} />
        <Gold selector={props.lvl} />
        <Platinum selector={props.lvl} />
        <Managed selector={props.lvl}/>
      </div>
    </>
  );
}
