describe('Trade history viewer web app', () => {
  it('should assert that <title> is correct', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('include', 'Binance');
  });

  it('should be able to disconnect', () => {
    cy.findByTestId('Connect')
      .should('contain', 'Disconnect')
      .click();
  });

  it('should be able to view the main area', () => {
    cy.findByTestId('MainWrapper').should('have.length', 1);

    cy.findByTestId('NavGrid')
      .get('li.nav-item')
      .should('have.length', 4);
  });

  it('should be able to toggle the selector', () => {
    cy.findByTestId('NavGrid')
      .find('li.nav-item:last-child button')
      .not('.active')
      .should('have.text', 'USDT Markets')
      .click();
  });

  it('should render the table', () => {
    cy.findByTestId('Table').should('have.length', 1);
  });

  it('should be able to connect', () => {
    cy.findByTestId('Connect')
      .should('contain', 'Connect')
      .click();
  });

  it('should be able to disconnect again', () => {
    cy.findByTestId('Connect')
      .wait(3000)
      .should('contain', 'Disconnect')
      .click();

    cy.findByTestId('MainWrapper').should('have.length', 1);
  });

  it('should be able to connect again', () => {
    cy.findByTestId('Connect')
      .wait(1000)
      .click();

    cy.findByTestId('Table').should('have.length', 1);
  });
});
