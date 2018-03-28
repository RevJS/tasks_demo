
import { ModelManager } from 'rev-models';
import { ModelApiBackend } from 'rev-api-client';
import { User } from '../../common/models/User';

export const manager = new ModelManager();
manager.registerBackend('default', new ModelApiBackend('/api'));
manager.register(User);
