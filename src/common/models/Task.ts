
import {
    AutoNumberField, TextField, SelectField, DateField,
    RelatedModel
} from 'rev-models';
import { Project } from './Project';
import { User } from './User';
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
    @SelectField({ label: 'Status' , selection: TASK_STATUS })
        status: string;
    @DateField({ label: 'Target Start Date' })
        target_start_date: string;
    @DateField({ label: 'Target Finish Date' })
        target_finish_date: string;
    @TextField({ label: 'Task Details', multiLine: true, required: false })
        details: string;
    @RelatedModel({ label: 'Assigned User', model: 'User' })
        user: User;
    @RelatedModel({ label: 'Project', model: 'Project' })
        project: Project;

    constructor(data?: Partial<Task>) {
        Object.assign(this, data);
    }

    toString() {
        return this.name;
    }
}
