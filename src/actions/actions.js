export const ADD_EMAIL_TO_KANBAN = 'ADD_EMAIL_TO_KANBAN';
export const MOVE_EMAIL_IN_KANBAN = 'MOVE_EMAIL_IN_KANBAN';
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

export function updateTaskStatus(taskId, newStatus) {
    return {
      type: UPDATE_TASK_STATUS,
      payload: { taskId, newStatus },
    };
  }

export const addEmailToKanban = (email) => ({
  type: ADD_EMAIL_TO_KANBAN,
  payload: {
    email,
  },
});

export const moveEmailInKanban = (taskId, sourceColumn, destinationColumn) => ({
    type: MOVE_EMAIL_IN_KANBAN,
    payload: { taskId, sourceColumn, destinationColumn },
  });
