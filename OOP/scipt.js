class User {
    name;
    email;

    constructor(name, email){
        this.name = name
        this.email = email
    }

    viewData() {
        console.log(this.name, this.email)
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email)
    }   

    editData(name, email) {
        this.name = name
        this.email = email
    }
}

adminObj = new Admin("Hasanat", "acb");