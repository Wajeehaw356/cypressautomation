describe('Assertions Practice', function(){

    it('Implicit Assertion', function(){
        cy.visit("http://localhost:3000/")
        cy.url().should('include', 'localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/#/')
        cy.url().should('contain', '3000')

        cy.url().should('include', 'localhost:3000')
        .should('eq', 'http://localhost:3000/#/')
        .should('contain', '3000')

        cy.url().should('include', 'localhost:3000')
        .and('eq', 'http://localhost:3000/#/')
        .and('contain', '3000')
        .and('not.contain', '4000')    //negative assertion

        cy.title().should('include', 'GMS')
        cy.get('.hp-logo-img').should('be.visible')
        cy.get('.hp-logo-img').should('exist')

        cy.xpath('//a').should('have.length', '1')    //no of links

        cy.xpath('//*[@id="basic_username"]').type('superadmin')  // provide a value into input box
        cy.xpath('//*[@id="basic_username"]').should('have.value', 'superadmin')  //value

    })

    it('explicit assertions', function(){
        cy.visit("http://localhost:3000/")
        cy.xpath('//*[@id="basic_username"]').type('superadmin')
        cy.get('#basic_password').type('Codex@0921')
        cy.get('.ant-btn').click()

        let expName = 'Isloo';

        cy.xpath('//*[@id="root"]/section/main/div/div/div/div/div[2]/div/div[3]/div/div[2]/div[1]/div/div').then( function(x){

            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })




    })

})