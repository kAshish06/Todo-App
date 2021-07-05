import React from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/react";

import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./TodoCard.scss";
/** @jsx jsx */
const TodoCard = ({ title, description }) => {
  return (
    <Paper
      elevation={3}
      square
      css={css`
        display: flex;
        flex-direction: column;
        min-width: 250px;
        max-width: 350px;
        margin: 5px;
        padding: 5px;
        flex-grow: 1;
      `}
    >
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
      <div
        css={css`
          padding: 10px 0;
        `}
      >
        {description}
      </div>
      <div
        css={css`
          text-align: right;
        `}
      >
        <EditIcon />
        <DeleteIcon />
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
