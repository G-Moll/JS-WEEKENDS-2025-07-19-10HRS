import { UserForm } from "../ui/UserForm.js";

class UICore {
    constructor() {}

    static init() {
        const userForm      = document.getElementById( "userForm" );
        const roleIdInput   = document.getElementById( "roleId" );
        const nicknameInput = document.getElementById( "nickname" );
        const nameInput     = document.getElementById( "name" );
        const emailInput    = document.getElementById( "email" );
        const passwordInput = document.getElementById( "password" );
        const userSubmit    = document.getElementById( "userSubmit" );

        userSubmit.addEventListener( "click", ( e => {
            e.preventDefault();

            const roleIdValue     = roleIdInput.value;
            const nicknameValue   = nicknameInput.value;
            const nameValue       = nameInput.value;
            const emailValue      = emailInput.value;
            const passwordValue   = passwordInput.value;

            const userPayload = UserForm.getFormData( [
                roleIdValue,
                nicknameValue,
                nameValue,
                emailValue,
                passwordValue ] );

            // console.log( "USERPAYLOAD", userPayload );

            UserForm.sendFormData( e, userPayload );
        } ) );

        // userForm.reset();
    }
}

export { UICore };
