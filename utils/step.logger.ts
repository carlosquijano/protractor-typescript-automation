import {createLogger, format, transports} from 'winston';

export class StepLogger {
    
    private static logger = createLogger({
        level: 'debug',
        format: format.simple(),
        transports: [
            new transports.Console()
        ]
    });

    static info(message : string) {
        this.logger.info(message);
    }

    static debug(message : string) {
        this.logger.debug(message);
    }

    static step(stepId : number, message : string) {
        const m = `Step ${stepId}) ${message}`;
        this.info(m);
    }

    static stepInit(id : number, title : string) {
        this.step(id, title);
    }

}