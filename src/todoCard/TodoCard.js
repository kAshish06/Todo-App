import React from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/react";

import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { deleteTodo } from "../services/todo.service";
import "./TodoCard.scss";
/** @jsx jsx */
const TodoCard = ({ id, title, description }) => {
  function handleDeleteClick(id) {
    deleteTodo(id).then(() => {
      console.log(`Todo with id ${id} deleted successfully.`);
    });
  }
  return (
    <Paper elevation={3} square className="todo-card">
      <div
        css={css`
          text-align: right;
        `}
      >
        <CloseIcon
          css={css`
            width: 15px;
            height: 15px;
          `}
        />
      </div>
      <Tooltip title={title}>
        <div className="todo-title">{title}</div>
      </Tooltip>
      <div className="todo-description">{description}</div>
      <div
        css={css`
          text-align: right;
        `}
      >
        <EditIcon />
        <DeleteIcon
          onClick={() => {
            handleDeleteClick(id);
          }}
        />
      </div>
    </Paper>
  );
};

TodoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

TodoCard.defaultProps = {
  title: "",
  description: "",
};

export default TodoCard;
