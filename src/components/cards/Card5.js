import React from 'react';
import Card from 'react-bootstrap/Card';

const Card5 = () => {
  return (
    <>
    <div>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*cOwKeihLz_eEMPXQpdh4xw.png" />
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

export default Card5