import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import "./CardComponent.css";

export default function CardComponent(props) {
  return (
    <div className='card-component-wrapper'>
      <Card sx={{ width: 'fit-content', borderRadius: "10px" }} className='song-card-component'>
        <CardMedia
          className='song-card-image'
          component="img"
          alt="green iguana"
          height="180"
          src={props.songDetail.image}
        />
        <CardActions className='song-card-actions'>
          <Button size="small" className='card-text'>100 Follows</Button>
        </CardActions>
      </Card>
      <p className='card-below-text'>
        New Bollywood
      </p>
    </div>
  );
}
