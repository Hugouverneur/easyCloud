export class Instance {

    constructor(
        public vmName: string,
        public ram: number,
        public ramUnity: string, // GB or MB default MB
        public storage: number,
        public storageUnity: string, // GB or MB default MB
        public processor: number,
        public os: string,
        public virtualizationServer: string,
        public uid?: any,
        public vmId?: any,
        public serverId?: any,
    ) { };
}