import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from './selectors';

const BigRedText = styled.div`
  font-size: 48px;
  color: #ff0000;
`;

const TodoList = ({
  completedTodos,
  incompletedTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <BigRedText>I'm a styled component.</BigRedText>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
