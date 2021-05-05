import {Container, Row ,Col} from 'react-bootstrap';

function About() {
    return (
<div className="inner-wrapper">
    <Container>
         <Row>
               <Col md={12} className="text-center">
                    <h1>About</h1>
                </Col>    
         </Row>    
     </Container>   
</div>    
    );
}

export default About;