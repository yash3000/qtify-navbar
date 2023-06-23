import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { topAlbumsUrl, } from "../config/config";
import axios from "axios";
import CardLayoutSection from "../CardLayoutSection/CardLayoutSection";


import "./CardLayoutGrid.css";

export default function CardLayoutGrid() {

  return (
    <div className="CardLayoutGrid">
      <CardLayoutSection 
        type="top"
      />
      <hr className="section-divider"/>
      <CardLayoutSection 
        type="new"
      />
      <hr className="section-divider"/>
      <CardLayoutSection 
        type="songs"
      />
    </div>
  );
};
