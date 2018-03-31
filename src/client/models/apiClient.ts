
import { ModelManager } from 'rev-models';
import { ModelApiBackend } from 'rev-api-client';
import { registerModels } from './models';

export const manager = new ModelManager();
manager.registerBackend('default', new ModelApiBackend('/api'));
registerModels(manager);
