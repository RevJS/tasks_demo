
import { ModelManager, InMemoryBackend } from 'rev-models';
import { ModelApiManager } from 'rev-api';
import { User } from '../../common/models/User';
import { Project } from '../../common/models/Project';
import { Task } from '../../common/models/Task';

export const serverModels = new ModelManager();
serverModels.registerBackend('default', new InMemoryBackend());
serverModels.register(User);
serverModels.register(Project);
serverModels.register(Task);

export const api = new ModelApiManager(serverModels);
api.register(User);
api.register(Project);
api.register(Task);
