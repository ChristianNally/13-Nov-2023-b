describe('visiting websites', () => {

  it('can visit the home page', () => {
    cy.visit('https://www.google.com');
  });

});
