module.exports = class ServerError extends Error {
    constructor(message, code) {
        super(message || "internal server error");
        this.code = code || 500;
        this.name = "ServerError";
    }
};
