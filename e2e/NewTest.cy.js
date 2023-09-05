describe('First Test Case', () => {

  it('Test-P', () => {

    cy.visit('http://localhost:3000/#/agencies')
    cy.title().should('eq', 'GMS')

  })

  it('Test-N', () => {

    cy.visit('http://localhost:3000/#/agencies')
    cy.title().should('eq', 'GMs')

  })

})