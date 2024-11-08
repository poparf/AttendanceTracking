class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.success = false;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;