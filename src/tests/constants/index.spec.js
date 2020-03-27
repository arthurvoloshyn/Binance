import { ACTION_TYPES, PATHS, LISTS, CONFIG } from '../../constants';

describe('constants', () => {
  it('ACTION_TYPES', () => {
    expect(ACTION_TYPES).toMatchSnapshot();
  });

  it('PATHS', () => {
    expect(PATHS).toMatchSnapshot();
  });

  it('LISTS', () => {
    expect(LISTS).toMatchSnapshot();
  });

  it('CONFIG', () => {
    expect(CONFIG).toMatchSnapshot();
  });
});
