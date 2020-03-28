import { ACTION_TYPES } from '../../constants';
import connectSocket, { initState } from '../../reducers/connectSocket';

describe('connectSocket reducer', () => {
  describe('connectSocket reducer with action', () => {
    const { TOGGLE_SOCKET_STREAMS } = ACTION_TYPES;

    const action = {
      type: TOGGLE_SOCKET_STREAMS,
      status: false,
    };

    it(`${TOGGLE_SOCKET_STREAMS}`, () => {
      const { status } = action;

      expect(connectSocket(initState, action)).toEqual(status);
    });

    it(`should handle ${TOGGLE_SOCKET_STREAMS}`, () => {
      expect(connectSocket(initState, action)).toMatchSnapshot();
    });
  });

  describe('connectSocket reducer initial state', () => {
    const action = {};

    it('should return the initial state', () => {
      expect(connectSocket(initState, action)).toEqual(initState);
    });

    it('returns properly', () => {
      expect(connectSocket(initState, action)).toMatchSnapshot();
    });
  });
});
