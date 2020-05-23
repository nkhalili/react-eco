// this is action type
export const CREATE_TODO = 'CREATE_TODO';

// this is action creator
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
