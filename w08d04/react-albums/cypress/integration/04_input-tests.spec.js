describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('inputField');
  });

  it('can type into the input field', () => {
    cy.get('@inputField')
      .type('Carrie Underwood', { delay: 150 });
  });

  it('can handle backspace', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
