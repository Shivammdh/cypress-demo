class HomePage {
    getUserName() {
        return cy.get('#username');
    }
    
    getPassword(){
        return cy.get('#password');
    }
    
    getLoginButton() {
        return cy.get("button[name='login']");
    }
    }
    export default HomePage