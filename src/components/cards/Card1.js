import React from 'react';
import Card from 'react-bootstrap/Card';

const Card1 = () => {
  return (
  <>
  <div>
  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://couponswala.com/blog/wp-content/uploads/2020/07/Redbus-Referral-Code.jpg.webp" />
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

export default Card1