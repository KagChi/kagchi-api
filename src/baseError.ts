export default class apiError extends Error {
    constructor(public message: string) { 
        super();
    }
    public name = 'apiError'
}