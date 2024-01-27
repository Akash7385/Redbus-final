import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
   <>
        <div className='cards-container'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://coachbuildersindia.com/wp-content/uploads/2023/12/Improve-Bus-Ratings-on-redBus.webp" />
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

export default Cards