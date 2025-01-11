import { Authorize } from "./authorize.js";
import { UiElement } from "./uielements.js";

// UI
const userinfodiv = document.getElementById('userinfo');
const logoutbtn = document.getElementById('logoutbtn');

const authrize = Authorize();

// Uielement instance
const uiele = UiElement(userinfodiv);

// Get info & render
authrize.getUser((data)=>{
    // console.log(data);

    uiele.userInfoEle(data);
});

// Logout
logoutbtn.addEventListener('click',()=>{

    const {logoutUser} = Authorize();
    logoutUser();

});