// Named export — must be imported using the exact class name: import { User } from "..."
export class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
