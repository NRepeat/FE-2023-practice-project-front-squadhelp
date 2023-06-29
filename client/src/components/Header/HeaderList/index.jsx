import React from 'react';

export default function HeadrList(props) {
  const items = props.obj.items;
  console.log(items);

  const handleClickListLink = (index) => {
    window.location.href = items[index].link;
  };

  const arr = items.map((item, index) => (
    <li key={index} onClick={() => handleClickListLink(index)}>
      <span>{item.label}</span>
    </li>
  ));

  return <ul>{arr}</ul>;
}
