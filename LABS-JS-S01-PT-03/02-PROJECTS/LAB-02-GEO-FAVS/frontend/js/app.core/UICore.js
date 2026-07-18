import { UserForm } from "../ui/UserForm.js";

class UICore {
    constructor() {}

    static init() {
        const userForm   = document.getElementById( "userForm" );
        const roleId     = document.getElementById( "roleId" ).value;
        const nickname   = document.getElementById( "nickname" ).value;
        const name       = document.getElementById( "name" ).value;
        const email      = document.getElementById( "email" ).value;
        const password   = document.getElementById( "password" ).value;
        const userSubmit = document.getElementById( "userSubmit" );
        // console.log( userForm, roleId, nickname, name, email, password, userSubmit );

        // console.log( userSubmit );

        userSubmit.addEventListener( "click", ( e => {
            e.preventDefault();
            const userPayload = UserForm.getFormData( [ roleId, nickname, name, email, password ] );

            console.log( "0000", userPayload );

            UserForm.sendFormData( e, userPayload );
        } ) );

        // userForm.reset();
    }
}

export { UICore };
