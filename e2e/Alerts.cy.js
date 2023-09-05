describe('Alerts', function(){

    it('JS Alert', function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsAlert()']").click()

        cy.on('window:alert', function(a){
            expect(a).to.contains('I am a JS Alert')

        })

    })

    it('JS Alert with confirmation - OK', function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsConfirm()']").click()

        cy.on('window:confirm', function(a){
            expect(a).to.contains('I am a JS Confirm')

        })

        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('JS Alert with confirmation - cancel', function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsConfirm()']").click()

        cy.on('window:confirm', ()=> false)

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it.only('Authentication Alert', function(){
        //Approach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})        

        //Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get('p').should('have.contain', 'Congratulations!')

    })
})