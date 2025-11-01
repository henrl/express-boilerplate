export class CustomError extends Error {
    code: number;
    reason: string;
    constructor(code: number, message: string) {
        super(message);
        this.code = code;
        this.reason = message;
    }
}
