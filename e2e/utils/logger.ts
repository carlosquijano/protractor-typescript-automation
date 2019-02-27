import {createLogger, format, transports} from 'winston'
export class Logger {
    
    private static logger = createLogger({
        level: 'info',
        format: format.simple(),
        transports: [
            new transports.Console()
        ]
    });

    static info(message : string) {
        this.logger.info(message);
    }

    static step(stepId : number, message : string) {
        const m = `Step ${stepId}) ${message}`;
        this.info(m);
    }

    static stepInit(id : number, title : string) {
        this.step(id, title);
    }
    
}