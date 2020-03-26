import { ACTION_TYPES } from '../../constants';

describe('constants', () => {
  it('ACTION_TYPES', () => {
    expect(ACTION_TYPES).toMatchSnapshot();
  });
});
