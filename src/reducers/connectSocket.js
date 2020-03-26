import { ACTION_TYPES } from '../constants';

export const initState = true;

const { TOGGLE_SOCKET_STREAMS } = ACTION_TYPES;

const connectSocket = (state = initState, { type, status }) => {
  switch (type) {
    case TOGGLE_SOCKET_STREAMS:
      return status;
    default:
      return state;
  }
};

export default connectSocket;
