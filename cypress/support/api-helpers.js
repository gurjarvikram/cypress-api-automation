// Example: api-helpers.js

const getAuthorizationHeader = () => ({

    'Authorization': `Bearer ${Cypress.env('API_TOKEN')}` // Use environment variable
});

// Generic function for making API requests
const apiRequest = (method, resource, resourceId = '', body = null) => {
    const baseUrl = Cypress.config('baseUrl');
    const url = `${baseUrl}/${resource}${resourceId ? `/${resourceId}` : ''}`;
    
    return cy.request({
        method,
        url,
        headers: getAuthorizationHeader(),
        body: body || undefined // Simplified conditional
    }).then(response => {
        console.log(response)
        // Optional: Add error handling
        if (response.status < 200 || response.status >= 300) {
            throw new Error(`Request failed with status ${response.status}: ${response.body}`);
        }

        return response; // Return the response for further chaining
    });
};


// Specific methods that utilize the generic apiRequest
export const createResource = (resource, data) => {
    return apiRequest('POST', resource, '', data);
};

export const getResource = (resource, resourceId) => {
    return apiRequest('GET', resource, resourceId);
};

export const updateResource = (resource, resourceId, updatedData) => {
    return apiRequest('PUT', resource, resourceId, updatedData);
};

export const deleteResource = (resource, resourceId) => {
    return apiRequest('DELETE', resource, resourceId);
};