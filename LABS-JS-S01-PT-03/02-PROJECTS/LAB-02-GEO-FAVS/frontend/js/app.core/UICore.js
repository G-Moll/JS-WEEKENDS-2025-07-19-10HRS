import { UserForm } from "../ui/forms/UserForm.js";
import { LocationForm } from "../ui/forms/LocationForm.js"

class UICore {
    constructor() {}

    static init() {
        UserForm.init();
        LocationForm.init();
    }
}

export { UICore };
