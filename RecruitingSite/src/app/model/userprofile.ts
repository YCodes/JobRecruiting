export class UserProfile {
    constructor(
        public id: string = "",
        public userName: string="",
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
        public featuredskills?: string[],
        public languages?: string[],
        public links?: string[],
        public education?: [{
            school: string,
            country: string,
            field: string, 
            dirgee: string,            
            year: string,
        }],
        public proffesionalexperience?: [{
            title: string,
            company: string,
            location: string,
            startdate: Date, 
            enddate: Date,  
            description: string,         
           
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