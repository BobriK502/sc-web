import {createSctpClientAdapter} from "./SctpClientOnPromises";


export default class {
    constructor() {
        this.sctp = createSctpClientAdapter();
    }
}