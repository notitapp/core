import express, { Express } from 'express';

export default abstract class HttpServer {
    protected httpServer: Express;
    protected port: number;
    protected url: string;

    constructor(url: string, port: number) {
        this.httpServer = express();
        this.url = url;
        this.port = port;
    }

    public start(): void {
        this.httpServer.listen(this.port, this.url, this.onStart);
    }

    public abstract onStart(): void;
}
