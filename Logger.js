class Logger {
    constructor(funcStr, message) {
        this.message = message;
        console.info(`[${funcStr}] - ${message}`);
    }
}