describe('Handle Tabs', function(){

    it('Approach 1', function(){
        cy.visit("https://the-internet.herokuapp.com/windows")                            //parent tab
        cy.get('#content > div > a').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')     //child tab

        //going back to previous window
        cy.go('back')

    })

    it.only('Approach 2', function(){
        cy.visit("https://the-internet.herokuapp.com/windows")                            //parent tab
        cy.get('#content > div > a').then((e)=>{

            let url=e.prop('href')
            cy.visit(url)
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')     //child tab

        //going back to previous window
        cy.go('back')

    })

})