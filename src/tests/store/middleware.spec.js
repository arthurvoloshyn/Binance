import middleware from '../../store/middleware';

describe('middleware', () => {
  it('should return empty middleware without development mode', () => {
    const expectedData = [];

    expect(middleware).toEqual(expectedData);
  });

  it('returns properly', () => {
    expect(middleware).toMatchSnapshot();
  });
});
