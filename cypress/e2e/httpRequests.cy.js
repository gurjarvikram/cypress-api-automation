describe("HTTP Requests", () => {

    it("GET Call", () => {

        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                // Perform assertions or actions on the response
                expect(response.status).to.eq(200)
            })
    })



    it('POST Call', () => {

        const requestBody = {
            name: Math.random().toString(7).substring(2),
            job: "leader",
            id: "478"
        }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody

        })
        .then((response) => {
                expect(response.status).to.eq(201)
                // Assert specific properties of the response body
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.id).to.eq('478')

            })
    })

})
