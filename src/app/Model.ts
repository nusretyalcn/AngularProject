export class Model{

    constructor() {  
    }
}

export class User{

    userId:number;
    userName:string;
    address:string;
    number:string;
   
    constructor(userId:number,userName:string,address:string,number:string) {
        
        this.userId=userId;
        this.userName=userName;
        this.address=address;
        this.number=number;
    }
}