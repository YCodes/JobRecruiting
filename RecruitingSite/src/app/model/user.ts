export class User {
    constructor(public id: string,
        public name: string,
        public password: string) { }

        getUser(){
            return this;
        }
}