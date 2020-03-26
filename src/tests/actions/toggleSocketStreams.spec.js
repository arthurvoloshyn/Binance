import { ACTION_TYPES } from '../../constants';
import { toggleSocketStreams } from '../../actions';

describe('toggleSocketStreams action', () => {
  const { TOGGLE_SOCKET_STREAMS } = ACTION_TYPES;

  const expectedActionToggleSocketStreams = {
    type: TOGGLE_SOCKET_STREAMS,
    status: false,
  };

  const { status } = expectedActionToggleSocketStreams;

  it('toggleSocketStreams', () => {
    expect(toggleSocketStreams(status)).toEqual(
      expectedActionToggleSocketStreams,
    );
  });

  it('toggleSocketStreams should return an action', () => {
    expect(toggleSocketStreams(status)).toMatchSnapshot();
  });
});
