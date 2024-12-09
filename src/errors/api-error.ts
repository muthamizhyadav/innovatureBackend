export class ApiError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
        public error: string = 'Bad Request'
    ) {
        super(message);
    }
}