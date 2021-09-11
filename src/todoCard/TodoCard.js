import React, { useState } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/react";
import { useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import Badge from "@material-ui/core/badge";
import Fade from "@material-ui/core/Fade";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import CardToolbar from "./CardToolbar";
import AudioPlayer from "../player/AudioPlayer";
import UpdateTodoFormModal from "../common/components/UpdateTodoFormModal";
import { StyleIconButton } from "../styledMuiComponents/StyledIconButton";
import { deleteTodo } from "../actionCreators/deleteTodoActionCreators";
import { getTodos } from "../actionCreators/getTodoActionCreators";
import { updateTodo } from "../actionCreators/updateTodoActionCreators";
import "./TodoCard.scss";

/** @jsx jsx */

const CardBadge = withStyles((theme) => ({
  badge: {
    right: theme.spacing(1.3),
    top: theme.spacing(1.3),
  },
}))(Badge);

const TodoCard = ({ id, title, description, soundBlob }) => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [openToolbar, setOpenToolbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const setToolbarAndCloseIcons = (value) => {
    setShowCloseIcon(value);
    setOpenToolbar(value);
  };

  function handleDeleteClick() {
    dispatch(deleteTodo(id)).then(() => {
      console.log(`Todo with id ${id} deleted successfully.`);
      dispatch(getTodos());
    });
  }

  const toolbarItems = [
    {
      icon: EditOutlinedIcon,
      onClickHandler: () => {
        setOpenModal(true);
      },
    },
    {
      icon: DeleteOutlinedIcon,
      onClickHandler: handleDeleteClick,
    },
  ];

  const closeButton = (
    <Fade in={true} timeout={500}>
      <StyleIconButton aria-label="Close todo" onClick={() => {}}>
        <CloseIcon
          css={css`
            /* background: #00000066; */
            background: #fff;
            color: #000000bf;
            width: 18px;
            height: 18px;
            border-radius: 18px;
            border: 2px solid #ccc;
          `}
        />
      </StyleIconButton>
    </Fade>
  );

  const updateTodos = (values) => {
    console.log(values);

    dispatch(updateTodo(id, values)).then(() => {
      dispatch(getTodos());
    });
  };

  return (
    <>
      <CardBadge
        badgeContent={showCloseIcon && closeButton}
        onMouseEnter={() => setToolbarAndCloseIcons(true)}
        onMouseLeave={() => setToolbarAndCloseIcons(false)}
      >
        <Paper elevation={3} square className="todo-card">
          <Tooltip title={title}>
            <div className="todo-title">{title}</div>
          </Tooltip>
          <div className="todo-description">{description}</div>
          {soundBlob && (
            <AudioPlayer src={window.URL.createObjectURL(soundBlob)} />
          )}
          <span
            css={css`
              align-self: flex-end;
              height: 40px;
            `}
          >
            {openToolbar && <CardToolbar id={id} toolbarItems={toolbarItems} />}
          </span>
        </Paper>
      </CardBadge>
      {openModal && (
        <UpdateTodoFormModal
          openModal={openModal}
          initialValues={{ title: title, description: description }}
          onSubmit={(values) => {
            updateTodos(values);
          }}
          onClose={() => {
            setOpenModal(false);
          }}
          onCancel={() => {
            setOpenModal(false);
          }}
          headerText="Edit Todo"
        />
      )}
    </>
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
