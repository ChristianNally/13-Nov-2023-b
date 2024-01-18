describe('display API results', () => {

  it('can display the results from an API request', () => {
    // visit the homepage
    cy.visit('/');

    // intercept any outgoing GET requests and respond with our hardcoded data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('dataFetching');

    // find the input field and type in "Daft Punk"
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // wait until the data is loaded
    cy.wait('@dataFetching');

    // look on the page for a specific album
    cy.contains('Random Access Memories')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure that the explicit album does not appear
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});