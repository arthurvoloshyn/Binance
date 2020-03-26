import { TOGGLE_SOCKET_STREAMS } from '../../constants';
import connectSocket, { initState } from '../../reducers/connectSocket';

describe('connectSocket reducer', () => {
  it('TOGGLE_SOCKET_STREAMS', () => {
    const action = {
      type: TOGGLE_SOCKET_STREAMS,
      status: false,
    };

    const { status } = action;

    expect(connectSocket(initState, action)).toEqual(status);
  });
});
