describe('CSS Locator', function(){ 

    it('id', function() {
        cy.visit('http://localhost:3000/#/agencies')
        cy.title().should('eq', 'GMS')
        cy.xpath('//*[@id="basic_username"]').type('superadmin')
        cy.get('#basic_password').type('Codex@0921')
        cy.get('.ant-btn').click()
        cy.get('.ant-card-head-title').contains('CARGO MANAGER')


    })


})