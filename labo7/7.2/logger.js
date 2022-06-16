export class Logger {
    constructor() {

    }

    info(msg) {
        console.log("INFO: " + msg);
    }
    warning(msg) {
        console.log("Warning: " + msg);
    }
    error(msg) {
        console.log("Error: " + msg);
    }
}