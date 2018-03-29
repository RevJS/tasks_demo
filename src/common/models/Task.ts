
import {
    AutoNumberField, TextField, SelectField, DateField
} from 'rev-models';
import { ApiOperations } from 'rev-api/lib/decorators';

const TASK_STATUS = [
    ['not_started', 'Not Started'],
    ['in_progress', 'In Progress'],
    ['completed', 'Completed'],
    ['cancelled', 'Cancelled']
];

@ApiOperations(
    ['read', 'create', 'update', 'remove']
)
export class Task {
    @AutoNumberField({ primaryKey: true })
        id: number;
    @TextField({ label: 'Task Name' })
        name: string;
    @TextField({ label: 'Description', multiLine: true, required: false })
        description: string;
    @SelectField({ label: 'Status' , selection: TASK_STATUS })
        status: string;
    @DateField({ label: 'Target Start Date' })
        target_start_date: string;
    @DateField({ label: 'Target Finish Date' })
        target_finish_date: string;

    constructor(data?: Partial<Task>) {
        Object.assign(this, data);
    }

    toString() {
        return this.name;
    }
}
