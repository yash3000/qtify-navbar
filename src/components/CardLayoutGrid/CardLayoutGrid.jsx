import React from "react";
import FaqMenu from "../FaqMenu/FaqMenu";
import CardLayoutSection from "../CardLayoutSection/CardLayoutSection";


import "./CardLayoutGrid.css";

export default function CardLayoutGrid() {

  return (
    <div className="CardLayoutGrid">
      <CardLayoutSection 
        type="top"
      />
      <CardLayoutSection 
        type="new"
      />
      <hr className="section-divider"/>
      <CardLayoutSection 
        type="songs"
      />
      <hr className="section-divider"/>
      <FaqMenu />
    </div>
  );
};
