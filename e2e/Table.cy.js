describe('Handle Tables', ()=>{

    beforeEach('Login', ()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click()

        //closing popup window after login
        cy.get('.btn-close').click()

        //go to customer --> customer page
        cy.get('#menu-customer > a').click()
        cy.get('#collapse-5>li:first-child>a').click()

    })

    it('check no of rows and columns', ()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10')
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7')

    })

    it('check cell data from specific row and column', ()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
        .contains('demo234566@gmail.com')

    })

    it('Reading all rows and column data of 1st page', ()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })

    it('Find total number Pages', ()=>{
        let totalPages;
        cy.get('.col-sm-6.text-end').then( (e)=>{
            let mytext = e.text();             //Showing 1 to 10 of 14497 (1450 Pages)
            totalPages = mytext.substring(mytext.indexOf('(')+1 , mytext.indexOf('Pages')-1);
            cy.log('Total number of pages in a table are => '+ totalPages);
        })
    })

    it.only('Pagination', ()=>{
        let totalPages = 5;
        for(let p=1; p<=totalPages; p++)
        {
            if(totalPages>1)
            {
                cy.log('Active Page is => '+p);
                cy.get('.pagination>li:nth-child('+p+')').click();
                cy.wait(3000)

                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())                      //email
                        })
                    })
                })

            }
        }

    })

})