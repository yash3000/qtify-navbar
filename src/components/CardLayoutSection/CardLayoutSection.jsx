import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { topAlbumsUrl, newAlbumsUrl, songsAlbumsUrl } from "../config/config";
import axios from "axios";


import "./CardLayoutSection.css";

export default function CardLayoutSection(props) {

  const getConfigURL = (type) => {
    switch (type) {
      case "top":
        return topAlbumsUrl
      case "new":
        return newAlbumsUrl
      case "songs":
        return songsAlbumsUrl
      default:
        return songsAlbumsUrl
    }
  }

  const getSectionHeading = (type) => {
    switch (type) {
      case "top":
        return "Top Albums"
      case "new":
        return "New Albums"
      case "songs":
        return "Songs"
      default:
        return "Songs"
    }
  }

  const [songsData, setSongsData] = useState([]);

  const fetchSongsData = async () => {
    try {
      // GET call
      let response = await axios.get(getConfigURL(props.type));
      //Success
      setSongsData(response.data);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  return (
    <>
      <div className="section-top-band">
        <div className="card-section-heading">{getSectionHeading(props.type)}</div>
        <div className="collapse-button"> Collapse </div>
      </div>
      <div className="CardLayoutSection">
        {songsData.length ?
          songsData.map((songDetail) => {
            return (<CardComponent
              key={songDetail.id}
              songDetail={songDetail}
            />)
          })
          : <></>
        }
      </div>
    </>
  );
};
