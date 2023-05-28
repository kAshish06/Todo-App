import React, { useState } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/react";
import { useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "../../icons/CloseIcon";
import Badge from "@mui/material/Badge";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";

import CardToolbar from "./CardToolbar";
import AudioPlayer from "../../player/AudioPlayer";
import UpdateTodoFormModal from "../../common/components/UpdateTodoFormModal";
import { deleteTodo } from "../actionCreators/deleteTodoActionCreators";
import { getTodos } from "../actionCreators/getTodoActionCreators";
import { updateTodo } from "../actionCreators/updateTodoActionCreators";
import "./TodoCard.scss";

/** @jsx jsx */

const CardBadge = styled(Badge)((theme) => ({
  "& .MuiBadge-badge": {
    right: 10,
    top: 10,
  },
}));

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
      icon: EditIcon,
      onClickHandler: () => {
        setOpenModal(true);
      },
    },
    {
      icon: DeleteIcon,
      onClickHandler: handleDeleteClick,
    },
  ];

  const closeButton = (
    <Fade in={true} timeout={500}>
      <IconButton aria-label="Close todo" onClick={() => {}}>
        <div
          css={css`
            // background: #00000066;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            color: #000000bf;
            width: 18px;
            height: 18px;
            border-radius: 24px;
            border: 1px solid #ccc;
          `}
        >
          <CloseIcon width="24" height="24" />
        </div>
      </IconButton>
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
          <div>
            <Tooltip title={title}>
              <div className="todo-title">{title}</div>
            </Tooltip>
            <div className="todo-description">{description}</div>
          </div>
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
