import {Container, Row ,Col} from 'react-bootstrap';

function Footer() {
    return (
<div className="footer-wrapper">
    <Container>
         <Row>
               <Col md={12} className="text-center">
                    Copyright@2021
                </Col>    
         </Row>    
     </Container>   
</div>    
    );
}

export default Footer;