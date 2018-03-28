
import {
    AutoNumberField, TextField
} from 'rev-models';
import { ApiOperations } from 'rev-api/lib/decorators';

@ApiOperations(
    ['read']
)
export class User {
    @AutoNumberField({ primaryKey: true })
        id: number;
    @TextField()
        username: string;
    @TextField()
        first_name: string;
    @TextField()
        last_name: string;

    constructor(data?: Partial<User>) {
        Object.assign(this, data);
    }

    toString() {
        return this.first_name + ' ' + this.last_name;
    }
}
