// cypress/integration/tests/test.spec.js
describe('indexOfIgnoreCase', () => {
    it('returns the correct index of first occurrence of subStr in str case-insensitively', () => {
        cy.visit(baseUrl, {
            onBeforeLoad(win) {
                cy.stub(win, 'prompt').onFirstCall().returns("The Quick Brown Fox Jumps Over The Lazy Dog").onSecondCall().returns("FOX");
            }
        });
        
        // Execute the function and check the alert
        cy.window().then((win) => {
            const result = win.indexOfIgnoreCase(win.prompt(), win.prompt());
            cy.on('window:alert', (str) => {
                expect(parseInt(str)).to.equal(16);
            });
            win.alert(result);
        });
    });
});
