import { ACTION_TYPES } from '../../constants';
import connectSocket, { initState } from '../../reducers/connectSocket';

describe('connectSocket reducer', () => {
  const { TOGGLE_SOCKET_STREAMS } = ACTION_TYPES;

  const action = {
    type: TOGGLE_SOCKET_STREAMS,
    status: false,
  };

  const { status } = action;

  it(`${TOGGLE_SOCKET_STREAMS}`, () => {
    expect(connectSocket(initState, action)).toEqual(status);
  });

  it(`should handle ${TOGGLE_SOCKET_STREAMS}`, () => {
    expect(connectSocket(initState, action)).toMatchSnapshot();
  });
});

describe('connectSocket reducer initial state', () => {
  it('should return the initial state', () => {
    expect(connectSocket(initState, {})).toEqual(initState);
  });

  it('returns properly', () => {
    expect(connectSocket(initState, {})).toMatchSnapshot();
  });
});
