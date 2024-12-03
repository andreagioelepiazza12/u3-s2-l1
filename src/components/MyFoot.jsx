import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"


function MyFoot () {
return (


    <div className = "bg-dark text-white" >
        <Row>
            <Col>MyWebSite</Col>
            <Col>
                Contacts
                <Row>
                    <Col>facebook</Col>
                    <Col>instagram</Col>
                </Row>
            </Col>
        </Row>

    </div>



)
}



export default MyFoot;