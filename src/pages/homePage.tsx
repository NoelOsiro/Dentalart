import { Container, Row } from "react-bootstrap";
import CardBorder from "../components/card/card";
import AddPatientForm from "../components/forms/AddPatient";

function HomePage() {
  return (
    <Container>
        <Row className="justify-content-around custom-row">
            <CardBorder/>
        </Row>
        <Row className="custom-row">
            <AddPatientForm/>
        </Row>
       
    </Container>
  );
}

export default HomePage;
