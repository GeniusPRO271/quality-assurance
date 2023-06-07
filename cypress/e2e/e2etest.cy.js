describe('template spec', () => {
  it('returns 0 when empty array', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '0');
  });
  it('returns 0 when all elements are the same', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[5, 5, 5, 5, 5]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '0');
  });
  it('returns 0 for an array with only one element', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[2]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '0');
  });
  it('returns 0 for an array with all zeros', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[0,0,0,0]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '0');
  });
  it('calculates trapped water for an array with one increasing and one decreasing sequence', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[0, 1, 2, 3, 2, 1]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '0');
  });
  it('an array with alternating heights', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[2, 1, 2, 1, 2, 1]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '2');
  });
  it('calculates trapped water for an array with a trap', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[5, 4, 3, 2, 1, 2, 3, 4, 5]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '16');
  });
  it('multiple Inputs', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[2, 1, 2, 1, 2, 1], [5, 4, 3, 2, 1, 2, 3, 4, 5]');
    cy.get('#button').click();
    cy.get('#0').should('contain', '2');
    cy.get('#1').should('contain', '16');
  });
  it('shows parsing error', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('1');
    cy.get('#button').click();
    cy.get('#0').should('contain', 'Parsing Error');
  });
  it('multiple inputs parsing error', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('#textbox').type('[2, 1, 2, 1, 2, 1], 1');
    cy.get('#button').click();
    cy.get('#0').should('contain', '2');
    cy.get('#1').should('contain', 'Parsing Error');
  });
});
