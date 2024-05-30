describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8090/')
    cy.contains('Home')
    cy.contains('Register')
    cy.contains('Login')

    cy.contains('Register').click()
    cy.url().should('include', '/register')

    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })


})