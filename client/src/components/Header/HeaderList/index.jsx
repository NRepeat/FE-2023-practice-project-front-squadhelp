import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HeadrList(props) {
  const history = useHistory();
  const items = props.obj.items;

  const handleClickListLink = (index) => {
    if (items[index].link === "/pricing") history.push(items[index].link);
    else {
      window.location.href = items[index].link;
    }
  };

  const arr = items.map((item, index) => (
    <li key={index} onClick={() => handleClickListLink(index)}>
      <span>{item.label}</span>
    </li>
  ));

  return <ul>{arr}</ul>;
}
