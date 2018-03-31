
import { IModelManager } from 'rev-models';
import { createProjects } from './projects';
import { createUsers } from './users';
import { createTasks } from './tasks';

export async function createData(manager: IModelManager) {
    await createProjects(manager);
    await createUsers(manager);
    await createTasks(manager);
}
