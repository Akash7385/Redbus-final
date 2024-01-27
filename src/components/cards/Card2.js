import React from 'react';
import Card from 'react-bootstrap/Card';

const Card2 = () => {
  return (
   <>
   <div>
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_koYJ-CXFGg4AfPhfMUY1hYiBGzATKetYA&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>   
</div>
   </>
  )
}

export default Card2