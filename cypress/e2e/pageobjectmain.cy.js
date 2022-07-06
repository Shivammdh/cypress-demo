import HomePage from '../support/PageObjects/Homepage';

describe('Automation Test Suite ', function() {
    
    //Mostly used for Setup Part
    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('Cypress Test Case', function() {
    //Object Creation for PageObject Page Class and assigning it to a constant variable

    const homePage=new HomePage();
    
    //Calling
    cy.visit('https://shop.demoqa.com/my-account/');
    homePage.getUserName().type(this.data.Username);
    homePage.getPassword().type(this.data.Password);
    homePage.getLoginButton().click();
 

    //Checking whether the Registration is successful and whether UserName is populated under login section

    // homePage.getLoginUserName().should('have.value',this.data.Username);

    // For Loop for Accessing productName array from Features File
    it('Select shirt',()=>{
    this.data.productName.forEach(function(element){
        cy.selectProduct(element[0],element[1],element[2]);
    })

    })
    })
})