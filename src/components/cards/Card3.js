import React from 'react';
import Card from 'react-bootstrap/Card';

const Card3 = () => {
  return (
    <>
    <div>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://images.locanto.me/5372996487/Redbus-World-s-Largest-Online-Bus-Ticketing-Platform-from-India_1.jpg" />
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

export default Card3