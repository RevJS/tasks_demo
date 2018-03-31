
import { IModelManager } from 'rev-models';
import { User } from '../../common/models/User';
import { Project } from '../../common/models/Project';
import { Task } from '../../common/models/Task';

export function registerModels(manager: IModelManager) {
    manager.register(User);
    manager.register(Project);
    manager.register(Task);
}
