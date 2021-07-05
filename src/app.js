import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { css, jsx } from "@emotion/react";

import AddTodo from "./addTodo/AddTodo";
import TodoCard from "./todoCard/TodoCard";
import { getTodos } from "./services/todo.service";
/** @jsx jsx */

const TodoAppWrapper = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((res) => setTodos(res.todos));
  }, []);
  return (
    <div>
      <div>To do App</div>
      <AddTodo />
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
          />
        ))}
      </Box>
    </div>
  );
};

export default TodoAppWrapper;
