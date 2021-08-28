import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FullExpand from "../icons/FullExpand";
import Divider from "@material-ui/core/Divider";
import { css, jsx } from "@emotion/react";

import { addTodo } from "../actionCreators/addTodoActionCreators";
import { getTodos } from "../actionCreators/getTodoActionCreators";
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

const AddTodo = () => {
  let classes = useStyles();
  let [showDetailModal, setShowDetailModal] = useState(false);
  let [todoTitle, setTodoTitle] = useState();
  let [todoDescription, setTodoDescription] = useState();
  const dispatch = useDispatch();
  function save() {
    const todo = {
      title: todoTitle,
      description: todoDescription,
    };
    dispatch(addTodo(todo)).then(() => {
      dispatch(getTodos());
    });
    setTodoTitle("");
    setTodoDescription("");
    setShowDetailModal(false);
  }
  return (
    <React.Fragment>
      <Paper className={classes.addTodoCardContainer}>
        {/* <div className={classes.inputSection}> */}
        {!showDetailModal && (
          <InputBase
            className={classes.addTodoInput}
            placeholder="Add To-do"
            inputProps={{ "aria-label": "Add your to-do title here" }}
            value={todoTitle}
            onChange={(e) => {
              setTodoTitle(e?.target?.value);
            }}
          />
        )}
        {showDetailModal && (
          <div className={classes.semiExpandedAddTodoContainer}>
            <TextField
              className={`${classes.textField} ${classes.titleInput}`}
              placeholder="Title"
              inputProps={{ "aria-label": "Add your to-do title here" }}
              onChange={(e) => {
                setTodoTitle(e?.target?.value);
              }}
            />
            <TextField
              className={`${classes.textField} ${classes.descriptionSection}`}
              placeholder="Description"
              onChange={(e) => setTodoDescription(e?.target?.value)}
            />
          </div>
        )}
        {/* </div> */}
        <IconButton
          className={classes.iconButton}
          aria-label="expand for description"
          onClick={() => {
            setShowDetailModal(!showDetailModal);
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
    </React.Fragment>
  );
};

export default AddTodo;
