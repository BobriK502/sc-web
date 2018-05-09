export function createSctpClientAdapter(){
    const sctpClientPromise = new Promise((success, fail) => {
        const sctpClient = new (window).parent.SctpClient({
            onError: fail, onConnect: function () {
                success(sctpClient);
            }
        });
        sctpClient.connect();
    });
    return new SctpClientOnPromises(sctpClientPromise);
}


export default class SctpClientOnPromises  {
    constructor(sctpClientPromise) {
        this.sctpClientPromise = sctpClientPromise;
    }

    async _check() {
        return this.sctpClientPromise;
    }

    async check_element(addr){
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.check_element(addr).then(success, fail));
    }

    async create_node(type) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.create_node(type).then(success, fail))
    }

    async create_arc(type, src, trg) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.create_arc(type, src, trg).then(success, fail));
    }

    async create_link() {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.create_link().then(success, fail));
    }

    async set_link_content(addr, data) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.set_link_content(addr, data).then(success, fail));
    }

    async get_link_content(addr, type) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.get_link_content(addr, type).then(success, fail));
    }

    async event_emit() {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.event_emit().then(success, fail))
            .then(console.log.bind(undefined, "Event "));
    }

    async iterate_elements(iterator_type, args) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.iterate_elements(iterator_type, args).then(success, fail));
    }

    async iterate_constr(...iterators) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.iterate_constr.apply(sctpClient, iterators).then(success, fail));
    }

    async find_element_by_system_identifier(data) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.find_element_by_system_identifier(data).then(success, fail)); 
    }

    async event_create(evt_type, addr, callback) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.event_create(evt_type, addr, callback).then(success, fail));
    }

    async event_destroy(evt_id) {
        const sctpClient = await this.sctpClientPromise;
        await new Promise((success, fail) => sctpClient.event_destroy(evt_id).then(success, fail));
    }

    async erase_element(addr) {
        const sctpClient = await this.sctpClientPromise;
        await new Promise((success, fail) => sctpClient.erase_element(addr).then(success, fail))
    };

    async get_element_type(addr) {
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.get_element_type(addr).then(success, fail));
    }

    async get_arc(arc){
        const sctpClient = await this.sctpClientPromise;
        return new Promise((success, fail) => sctpClient.get_arc(arc).then(success, fail));
    }

    async close() {
        const sctpClient = await this.sctpClientPromise;
        sctpClient.socket.close();
    }
}
