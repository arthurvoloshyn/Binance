import middleware from '../../store/middleware';

describe('middleware', () => {
  it('process.env.NODE_ENV is not development', () => {
    const expectedData = [];

    expect(middleware).toEqual(expectedData);
  });

  it('process.env.NODE_ENV is not development toMatchSnapshot', () => {
    expect(middleware).toMatchSnapshot();
  });
});
