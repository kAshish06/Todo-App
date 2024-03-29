import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { css, jsx } from "@emotion/react";

import AddTodo from "./addTodo/AddTodo";
import TodoCard from "./todoCard/TodoCard";
import { getTodos } from "./actionCreators/getTodoActionCreators";

/** @jsx jsx */

const TodoAppWrapper = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state && state.todoSlice.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <AddTodo />
      </div>
      <Box
        display="flex"
        css={css`
          padding: 20px;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        {todos.map((todo) => (
          <TodoCard
            key={todo._id}
            id={todo._id}
            title={todo.title}
            description={todo.description}
            soundBlob={todo.soundBlob}
          />
        ))}
      </Box>
    </div>
  );
};

export default TodoAppWrapper;
