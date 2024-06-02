describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8090/register')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[placeholder="enter UserName . . ."]').type('user1');
    cy.get('[placeholder="enter Password . . ."]').clear();
    cy.get('[placeholder="enter Password . . ."]').type('123456');
    cy.get('button').click();
    cy.url().should('include', '/register')
    cy.get('[href="/delete"]').click();
    cy.get('[placeholder="enter UserName . . ."]').type('user1');
    cy.get('[placeholder="enter Password . . ."]').clear();
    cy.get('[placeholder="enter Password . . ."]').type('123456');
    cy.get('button').click();
    cy.url().should('include', '/')
    cy.get('[href="/register"]').click();
    cy.get('[placeholder="enter UserName . . ."]').type('user1');
    cy.get('[placeholder="enter Password . . ."]').clear();
    cy.get('[placeholder="enter Password . . ."]').type('123456');
    cy.get('button').click();
    cy.url().should('include', '/login')
    cy.get('[href="/login"]').click();
    cy.get('[placeholder="enter UserName . . ."]').type('user1');
    cy.get('[placeholder="enter Password . . ."]').clear();
    cy.get('[placeholder="enter Password . . ."]').type('123456');
    cy.get('button').click();
    cy.url().should('include', '/')
    /* ==== End Cypress Studio ==== */
  })
})