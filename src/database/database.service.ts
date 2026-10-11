import { Injectable, } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;
    onModuleInit() {
        this.isConnected = true;
        console.log('DatabaseService initialized');
    }

    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`DatabaseService shutodown - signal: ${signal}`);
    }


    getStatus() {
        return this.isConnected ? 'Database is connected' : 'Database is not connected';
    }
}
