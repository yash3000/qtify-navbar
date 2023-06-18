import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import cardImage from "../../assets/card-image.png";

import "./CardComponent.css";

export default function CardComponent() {
  return (
    <div>
      <Card sx={{ maxWidth: 159, borderRadius: "10px" }} className='song-card-component'>
        <CardMedia
          className='song-card-image'
          component="img"
          alt="green iguana"
          height="180"
          image={cardImage}
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
