import{ Button,Card,Row, Col, Container} from 'react-bootstrap'
import { BlogData } from './Data'
const blog = () => {
  return (
    <Container>
    <Row>
    {BlogData.map((v,i)=>{
        return(
                <Items iteminfo={v} key={i}/>
        )
    })}  
    </Row>
    </Container>
  )
}

export default blog

const Items =({iteminfo})=>{
return(
    <>
    <Col className='col-lg-3 md-4'>
    <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{iteminfo.title}</Card.Title>
                    <Card.Text>
                      {iteminfo.body}
                     </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
    </Card.Body>
         </Card>
         </Col>
    </>
)
}