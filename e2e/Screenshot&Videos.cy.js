describe('my suit', ()=>{
    it('screenshots', ()=>{
        cy.visit('https://www.npmjs.com/package/cypress-iframe')
        cy.screenshot('homepage')
        cy.wait(5000)
        cy.get('._0edb515f').screenshot('logo')


    })


})