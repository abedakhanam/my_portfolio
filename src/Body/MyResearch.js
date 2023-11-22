import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import publications from "../data/Publications";

const MyResearch = () => {
  return (
    <Container id="mypublications" style={{ marginTop: "50px" }}>
      <Row>
        <p class="h3">My Publications</p>
      </Row>
      <Row>
        <ListGroup variant="flush" className="list-unstyled">
          <ListGroup.Item>
            <Link className="fs-4" to={publications[0].Link}>
              {publications[0].Name}
            </Link>
            <Row className="mt-2" style={{ textAlign: "left" }}>
              {publications[0].Abstract}
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MyResearch;
