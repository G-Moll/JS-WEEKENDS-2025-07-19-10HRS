import { UserForm } from "../ui/UserForm.js";
import { LocationForm } from "../ui/LocationForm.js"

class UICore {
    constructor() {}

    static init() {
        UserForm.init();
        LocationForm.init();
    }
}

export { UICore };
