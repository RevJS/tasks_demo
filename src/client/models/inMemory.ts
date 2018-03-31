
import { ModelManager, InMemoryBackend } from 'rev-models';
import { registerModels } from './models';

export const manager = new ModelManager();
export const backend = new InMemoryBackend();
manager.registerBackend('default', backend);
registerModels(manager);
