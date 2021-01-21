import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import ListGroupContainer from "./ListGroup/ListGroupContainer";

function FormBody() {
  const FirstNameInput = useRef();
  const LastNameInput = useRef();
  const eMailInput = useRef();
  const NotesInput = useRef();
  const [FormInfo, setFormInfo] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const firstname = FirstNameInput.current.value;
    const lastname = LastNameInput.current.value;
    const email = eMailInput.current.value;
    const notes = NotesInput.current.value;

    setFormInfo([...FormInfo, { firstname, lastname, email, notes }]);

    FirstNameInput.current.value = null;
    LastNameInput.current.value = null;
    eMailInput.current.value = null;
    NotesInput.current.value = null;
  }

  function DeleteForm(id) {
    setFormInfo(
      FormInfo.filter((_, i) => i !== id)
    );
  }

  function upDateForm(firstname, lastname, email, notes, id) {
    const form = Object(FormInfo[id]);
    form.firstname = firstname;
    form.lastname = lastname;
    form.email = email;
    form.notes = notes;
  }

  return (
    <>
      <Container className="bg-dark text-light p-4 mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} ms="6" controlId="FirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                required
                ref={FirstNameInput}
              />
              <Form.Text className="text-muted">
                this information is required
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} ms="6" controlId="LastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                ref={LastNameInput}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="eMail">
              <Form.Label>e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="e-mail"
                ref={eMailInput}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formText">
              <Form.Label>Notes</Form.Label>
              <Form.Control type="text" placeholder="Notes" ref={NotesInput} />
            </Form.Group>
          </Form.Row>
          <Button type="submit">Add List Group </Button>
        </Form>
      </Container>
      <Container>
        <Row>
          {FormInfo.map((formInfo, index) => {
            return (
              <Col sm={6} className="mb-3" key={index}>
                <ListGroupContainer
                  id={index}
                  form={formInfo}
                  handleSubmit={handleSubmit}
                  deleteForm={DeleteForm}
                  upDateForm={upDateForm}
                ></ListGroupContainer>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default FormBody;
