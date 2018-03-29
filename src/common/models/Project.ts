
import {
    AutoNumberField, TextField, SelectField, DateField
} from 'rev-models';
import { ApiOperations } from 'rev-api/lib/decorators';

const PROJECT_STATUS = [
    ['draft', 'Draft'],
    ['in_progress', 'In Progress'],
    ['completed', 'Completed'],
    ['cancelled', 'Cancelled']
];

@ApiOperations(
    ['read', 'create', 'update', 'remove']
)
export class Project {
    @AutoNumberField({ primaryKey: true })
        id: number;
    @TextField({ label: 'Project Name' })
        name: string;
    @TextField({ label: 'Description', multiLine: true, required: false })
        description: string;
    @SelectField({ label: 'Status' , selection: PROJECT_STATUS })
        status: string;
    @DateField({ label: 'Target Start Date' })
        target_start_date: string;
    @DateField({ label: 'Target Finish Date' })
        target_finish_date: string;

    constructor(data?: Partial<Project>) {
        Object.assign(this, data);
    }

    toString() {
        return this.name;
    }
}
