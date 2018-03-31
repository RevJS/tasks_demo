
import { IModelManager, ValidationError } from 'rev-models';
import { createProjects } from './projects';

export async function createData(manager: IModelManager) {
    await createProjects(manager);
}
