describe('template spec', () => {
  /**
   * Testing when the input is an empty array
   * Expected to return 0 as there are no bars to hold water
   */
  it('returns 0 when empty array', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type('[]'); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '0'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when all elements in the array are the same
   * Expected to return 0 as there are no dips to hold water
   */
  it('returns 0 when all elements are the same', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type(
      '[5, 5, 5, 5, 5]'
    ); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '0'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when the array has only one element
   * Expected to return 0 as there's only one bar and no place to hold water
   */
  it('returns 0 for an array with only one element', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type('[2]'); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '0'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when all elements in the array are zeros
   * Expected to return 0 as there are no bars to hold water
   */
  it('returns 0 for an array with all zeros', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type('[0,0,0,0]'); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '0'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when the array has one increasing and one decreasing sequence
   * Expected to return 0 as there are no dips to hold water
   */
  it('calculates trapped water for an array with one increasing and one decreasing sequence', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type(
      '[0, 1, 2, 3, 2, 1]'
    ); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '0'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when the array has alternating heights
   * Expected to return 2 as it can trap water between the bars
   */
  it('an array with alternating heights', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type(
      '[2, 1, 2, 1, 2, 1]'
    ); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '2'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when the array forms a trap in the middle
   * Expected to return 16 as there's a place to hold water
   */
  it('calculates trapped water for an array with a trap', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type(
      '[5, 4, 3, 2, 1, 2, 3, 4, 5]'
    ); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '16'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing multiple inputs together
   * Expected to return the trapped water for each input respectively
   */
  it('multiple Inputs', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type(
      '[2, 1, 2, 1, 2, 1], [5, 4, 3, 2, 1, 2, 3, 4, 5]'
    ); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '2'
    ); /** Get the return value can compare is to the result */
    cy.get('#1').should(
      'contain',
      '16'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when the input is not an array
   * Expected to return 'Parsing Error' as the input is not valid
   */
  it('shows parsing error', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type('1'); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      'Parsing Error'
    ); /** Get the return value can compare is to the result */
  });

  /**
   * Testing when multiple inputs contain an invalid input
   * Expected to return the trapped water for the valid input and 'Parsing Error' for the invalid one
   */
  it('multiple inputs parsing error', () => {
    cy.visit('http://127.0.0.1:3000'); /** Goes to home page */
    cy.get('#textbox').type(
      '[2, 1, 2, 1, 2, 1], 1'
    ); /** Inputs empty array to text field*/
    cy.get('#button').click(); /** Click button to run function */
    cy.get('#0').should(
      'contain',
      '2'
    ); /** Get the return value can compare is to the result */
    cy.get('#1').should(
      'contain',
      'Parsing Error'
    ); /** Get the return value can compare is to the result */
  });
});
