export class UserProfile {
    constructor(
        public id: string = "",
        public userName: string="",
        public password: string="",
        public email: string="",
        public firstname: string="",
        public lastname: string="",
        public phonenumber: string="",
        public dateofbirth: Date= null,
        public address?: {
            country: string,
            street: string,
            state: string,
            zipCode: string,
        },
        public currentcarrierlevel?: string,
        public languages?: string[],
        public education?: [{
            country: string,
            dirgee: string,            
            field: string,            
            school: string,
            year: string,
        }],
        public featuredskills?: string[],
        public links?: string[],
       
        public proffesionalexperience?: [{
            company: string,
            description: string,
            enddate: Date,
            location: string,
            startdate: Date,            
            title: string,
        }],
        public jobsapplied?: [{
            jobid: string,
            applicationstatus: string,
        }]
    ) { }

    getUserProfile(){
        return JSON.stringify(this);
    }
}