
import { ModelManager } from 'rev-models';
import { ModelApiBackend } from 'rev-api-client';
import { User } from '../../common/models/User';
import { Project } from '../../common/models/Project';
import { Task } from '../../common/models/Task';

export const manager = new ModelManager();
manager.registerBackend('default', new ModelApiBackend('/api'));
manager.register(User);
manager.register(Project);
manager.register(Task);
