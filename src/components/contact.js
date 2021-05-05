import {Container, Row ,Col} from 'react-bootstrap';

function Contact() {
    return (
<div className="inner-wrapper">
    <Container>
         <Row>
               <Col md={12} className="text-center">
                    <h1>Contact Us</h1>
                </Col>    
         </Row>    
     </Container>   
</div>    
    );
}

export default Contact;