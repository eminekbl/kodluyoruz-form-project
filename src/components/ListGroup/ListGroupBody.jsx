import React, { useRef } from "react";
import { Row, Col, Button, Container, Form, Accordion } from "react-bootstrap";

function ListGroupBody(props) {
  const FirstNameInput = useRef();
  const LastNameInput = useRef();
  const eMailInput = useRef();
  const NotesInput = useRef();
  const [toggled, setToggled] = React.useState(true);

  var buttonLabel = toggled ? "Edit" : "Save";
  var bgcolor = toggled ? "success" : "secondary";

  function ChangeList(event) {
    event.preventDefault();
    setToggled(!toggled);
    props.upDateForm(props.id);
  }

  function handleClick(event) {
    const firstname = FirstNameInput.current.value;
    const lastname = LastNameInput.current.value;
    const email = eMailInput.current.value;
    const notes = NotesInput.current.value;
    props.upDateForm(firstname, lastname, email, notes, props.id);
  }

  return (
    <Accordion>
      <Container className={`text-light mt-3 p-3 bg-${bgcolor} `}>
        <Form onSubmit={ChangeList}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Firstname
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                required
                type="text"
                id="firstname"
                defaultValue={`${props.form.firstname}`}
                readOnly={toggled}
                ref={FirstNameInput}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className="text-center text-dark"
          >
            Show More...
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <span>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Lastname
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    id="firstname"
                    defaultValue={`${props.form.lastname}`}
                    readOnly={toggled}
                    ref={LastNameInput}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  e-mail
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    id="email"
                    defaultValue={`${props.form.email}`}
                    readOnly={toggled}
                    ref={eMailInput}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  notes
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    id="notes"
                    defaultValue={`${props.form.notes}`}
                    readOnly={toggled}
                    ref={NotesInput}
                  ></Form.Control>
                </Col>
              </Form.Group>
            </span>
          </Accordion.Collapse>
          <Row className="text-center">
            <Col sm={6}>
              <Button type="submit" onClick={handleClick}>
                {buttonLabel}{" "}
              </Button>
            </Col>
            <Col sm={6}>
              <Button onClick={() => props.deleteForm(props.id)}>
                Delete{" "}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Accordion>
  );
}

export default ListGroupBody;
