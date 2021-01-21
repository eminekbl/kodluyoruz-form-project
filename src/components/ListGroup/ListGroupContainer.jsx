import React from "react";
import { ListGroupBody } from "./";

function ListGroupContainer(props) {
  return (
    <ListGroupBody
      form={props.form}
      handleSubmit={props.handleSubmit}
      id={props.id}
      deleteForm={props.deleteForm}
      upDateForm={props.upDateForm}
    />
  );
}

export default ListGroupContainer;
