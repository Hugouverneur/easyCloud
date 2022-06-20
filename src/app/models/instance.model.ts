export class Instance {

    constructor(
        public vmName: string,
        public unity: string, // GB or MB default MB
        public ram: number,
        public storage: number,
        public os: string,
        public serverName: string,
        public uid?: any,
        public vmId?: any,
        public serverId?: any,
    ) { };
}