import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { topAlbumsUrl, newAlbumsUrl, songsAlbumsUrl } from "../config/config";
import axios from "axios";


import "./CardLayoutSection.css";
import Carousel from "../Carousel/Carousel";

export default function CardLayoutSection(props) {

  const [showAll, setShowAll] = useState('false');
  const [songsData, setSongsData] = useState([]);
  const [filteredSongsData, setFilteredSongsData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all')

  const filtersArray = [
    {key : 'all', label : 'All'},
    {key : 'rock', label : 'Rock'},
    {key : 'jazz', label : 'Jazz'}, 
    {key : 'blues', label : 'Blues'}
  ] ;

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

  const handleToggle = () => {
    setShowAll(!showAll)
  };

  const fetchSongsData = async () => {
    try {
      // GET call
      let response = await axios.get(getConfigURL(props.type));
      //Success
      setSongsData(response.data);
      setFilteredSongsData(response.data);
    } catch (error) {
      console.error('Error:', error);
      // throw error;
    }
  }

  const filterSongsDataByFilters = (filter) => {
    let filteredData = songsData.filter((songItem)=>{
      if(filter === 'all'){
        return true
      }
      return filter === songItem.genre.key
    });
    setFilteredSongsData(filteredData);
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  useEffect(() => {
    if(props.type === 'songs'){
      filterSongsDataByFilters(activeFilter);
    }
  }, [activeFilter]);

  return (
    <>
      <div className="section-top-band">
        <div className="card-section-heading">{getSectionHeading(props.type)}</div>
        <div className="collapse-button" onClick={handleToggle}>
          {showAll ? "Collaspe All" : "Show All"}
        </div>
      </div>
      {props.type === 'songs' &&
        <div className="songs-filter-band">
          {filtersArray.map((filter)=>{
            return(<div className={(filter.key === activeFilter) ? 'song-filter filterActive' : 'song-filter' } onClick={()=>{setActiveFilter(filter.key)}}>
              {filter.label}
            </div>)
          })}
        </div>
      }
      <div className="CardLayoutSection">
        {filteredSongsData.length ?
          showAll ?
          filteredSongsData.map((songDetail) => {
              return (<CardComponent
                key={songDetail.id}
                songDetail={songDetail}
              />)
            }) : <Carousel
              data={filteredSongsData}
              component={(item) => <CardComponent songDetail={item} />}
            />
          : <></>
        }
      </div>
    </>
  );
};
