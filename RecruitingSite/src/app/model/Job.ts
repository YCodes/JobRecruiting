export class Job {
    constructor(
        public id: string,
        public title: string,
        public position: string,
        public skills: string[],
        public experiencerequired: string,
        public employer: string,
        public location: string,
        public jobdescription: string,
        public type: string,
        public publicationdate: Date,
        public enddate: Date,
        public applicants: [{
            id: string,
            appliactiondate: Date
        }]
    ) { }
}



