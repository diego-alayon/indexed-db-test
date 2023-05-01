import { ADD_EMAIL_TO_KANBAN, MOVE_EMAIL_IN_KANBAN } from './actions';

const initialState = {
  kanban: {
    apply: [],
    estado2: [],
    estado3: [],
    estado4: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_TO_KANBAN:
      return {
        ...state,
        kanban: {
          ...state.kanban,
          apply: [...state.kanban.apply, action.payload.email],
        },
      };
    case MOVE_EMAIL_IN_KANBAN: {
      const { emailId, fromColumn, toColumn } = action.payload;
      const email = state.kanban[fromColumn].find((e) => e.id === emailId);
      const newFromColumn = state.kanban[fromColumn].filter((e) => e.id !== emailId);
      const newToColumn = [...state.kanban[toColumn], email];
      return {
        ...state,
        kanban: {
          ...state.kanban,
          [fromColumn]: newFromColumn,
          [toColumn]: newToColumn,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
