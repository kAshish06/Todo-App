import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Mic from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import FullExpand from "../icons/FullExpand";
import Divider from "@material-ui/core/Divider";
import { css, jsx } from "@emotion/react";

import AudioPlayer from "../player/AudioPlayer";
import UpdateTodoFormModal from "../common/components/UpdateTodoFormModal";
import { addTodo } from "../actionCreators/addTodoActionCreators";
import { getTodos } from "../actionCreators/getTodoActionCreators";
import { record } from "../recorder/recorder";
import { convertToBase64String } from "../utils/commonUtils";
import "./AddTodo.scss";
/** @jsx jsx */

const useStyles = makeStyles((theme) => ({
  addTodoCardContainer: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "60%",
  },
  addTodoInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  titleInput: {
    marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 15,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  textField: {
    width: "100%",
  },
  descriptionSection: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    flex: 1,
  },
  semiExpandedAddTodoContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
}));
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
  let classes = useStyles();
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
      <Paper className={classes.addTodoCardContainer}>
        <IconButton onClick={handleTodoRecording}>
          {micOn ? <Mic /> : <MicOff />}
        </IconButton>
        {todoRecord && <AudioPlayer src={todoRecord} />}
        <InputBase
          className={classes.addTodoInput}
          placeholder="Add To-do"
          inputProps={{ "aria-label": "Add your to-do title here" }}
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e?.target?.value);
          }}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="expand for description"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <FullExpand />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="add to-do"
          onClick={save}
        >
          <AddIcon />
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
