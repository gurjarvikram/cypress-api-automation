describe('API Testing', () => {

    const queryParam = { page: 2 };

    it("Passing query parameters", () => {
        cy.request({

            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            qs: queryParam   //Query parameter
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.data).have.length(6)
                expect(response.body.data[0]).have.property('id', 7)
                expect(response.body.data[0]).has.property('first_name', 'Michael')

            })
    })

})