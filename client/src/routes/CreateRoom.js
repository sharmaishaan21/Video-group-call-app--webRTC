import React from "react";
import { v1 as uuid } from "uuid";
import "./CreateRoom.css";

const CreateRoom = (props) => {
  function create() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }

  return (
    <button className="createRoom" onClick={create}>
      Create room
    </button>
  );
};

export default CreateRoom;
