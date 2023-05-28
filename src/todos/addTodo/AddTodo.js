import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "../../icons/AddIcon";
import MicOnIcon from "../../icons/MicOnIcon";
import MicOffIcon from "../../icons/MicOffIcon";
import FullExpandIcon from "../../icons/FullExpandIcon";
import Divider from "@mui/material/Divider";

import AudioPlayer from "../../player/AudioPlayer";
import UpdateTodoFormModal from "../../common/components/UpdateTodoFormModal";
import { addTodo } from "../actionCreators/addTodoActionCreators";
import { getTodos } from "../actionCreators/getTodoActionCreators";
import { record } from "../../recorder/recorder";
import { convertToBase64String } from "../../utils/commonUtils";
import "./AddTodo.scss";
// let audioStream;
let recorder;
let audioChunks = [];
const recordAudioChunks = (e) => {
  audioChunks.push(e.data);
};
record(recordAudioChunks).then((res) => {
  recorder = res.recorder;
});
const AddTodo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoRecord, setTodoRecord] = useState(null);
  const [audioData, setAudioData] = useState(null);
  let [micOn, setMicOn] = useState(false);
  let [todoTitle, setTodoTitle] = useState("");
  let [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();
  function save(values) {
    const todo = {
      title: openModal ? values.title : todoTitle,
      description: openModal ? values.description : todoDescription,
    };
    console.log(audioData);
    if (todoRecord) {
      todo.media = audioData;
    }
    dispatch(addTodo(todo)).then(() => {
      dispatch(getTodos());
    });
    setTodoTitle("");
    setTodoDescription("");
    setTodoRecord(null);
    setAudioData(null);
  }
  const handleTodoRecording = () => {
    if (!micOn) {
      recorder.start(500);
      recorder.onstop;
    } else {
      recorder.stop();
      console.log(audioChunks);
      const audioBlob = new Blob(audioChunks, {
        type: "audio/ogg; codecs=opus",
      });
      convertToBase64String(audioBlob).then((base64Audio) => {
        setAudioData(base64Audio);
      });
      setTodoRecord(window.URL.createObjectURL(audioBlob));
      // recorder.exportWav((data) => {
      //   setAudioData("data:audio/wav;base64," + data);
      // });
    }

    setMicOn(!micOn);
  };
  return (
    <React.Fragment>
      <Paper className="add-todo-card-container">
        <IconButton onClick={handleTodoRecording}>
          {micOn ? <MicOnIcon /> : <MicOffIcon />}
        </IconButton>
        {todoRecord && <AudioPlayer src={todoRecord} />}
        <InputBase
          className="add-todo-input"
          placeholder="Add To-do"
          inputProps={{ "aria-label": "Add your to-do title here" }}
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e?.target?.value);
          }}
        />
        <IconButton
          className="icon-button"
          aria-label="expand for description"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <FullExpandIcon />
        </IconButton>
        <Divider className="divider" orientation="vertical" />
        <IconButton
          color="primary"
          className="icon-button"
          aria-label="add to-do"
          onClick={save}
        >
          <AddIcon width="24" height="24" />
        </IconButton>
      </Paper>
      {openModal && (
        <UpdateTodoFormModal
          openModal={openModal}
          initialValues={{ title: todoTitle, description: todoDescription }}
          onSubmit={(values) => {
            save(values);
          }}
          onClose={() => {
            setOpenModal(false);
          }}
          onCancel={() => {
            setOpenModal(false);
          }}
          headerText="Create Todo"
        />
      )}
    </React.Fragment>
  );
};

export default AddTodo;
