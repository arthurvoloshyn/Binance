import { TOGGLE_SOCKET_STREAMS } from '../constants';

const initState = true;

const connectSocket = (state = initState, { type, status }) => {
  switch (type) {
    case TOGGLE_SOCKET_STREAMS:
      return status;
    default:
      return state;
  }
};

export default connectSocket;
