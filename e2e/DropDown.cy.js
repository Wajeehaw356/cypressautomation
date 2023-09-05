describe('Testing Drop Down', function(){
   
    it.skip('Drop Down with Select Method', function(){
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')

    })

    it.skip('Drop Down withour Select Method ', function(){
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        //Assertion
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Italy')

    })


    it.skip('Auto Suggest Drop Down', function(){
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Islamabad')
        cy.get('h3.suggestion-title').contains('Islamabad Capital Territory').click()

    })


    it('Dynamic Drop Down', function(){
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('cypress automation')


    })

})