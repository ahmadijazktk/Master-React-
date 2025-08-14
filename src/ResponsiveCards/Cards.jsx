import{ Button,Card,Row, Col, Container} from 'react-bootstrap'
const Cards = () => {
  return (
      <Container fluid>
        <Container>
          <Row>
            <Col>
               <h1 className='col-12 text-center py-5' >Our Courses</h1>
            </Col>
          </Row>
          <Row className='gap-0.5'>
            <Col lg="3" md="6">
             <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course 01</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                     </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                        </Card>
            </Col>
            <Col lg="3" md="6"> <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course 02</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                     </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                        </Card></Col>
            <Col lg="3" md="6"> <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course 03</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                     </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                        </Card></Col>
            <Col lg="3" md="6"> <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course 04</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                     </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                        </Card></Col>
          </Row>
        </Container>
      </Container>

  )
}
export default Cards
