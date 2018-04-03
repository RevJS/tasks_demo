
import { IModelManager } from 'rev-models';
import { User } from '../models/User';

export const USERS: User[] = [
    new User({username: 'ESums22', first_name: 'Erica', last_name: 'Sims'}),
    new User({username: 'reece', first_name: 'Reece', last_name: 'Serrano'}),
    new User({username: 'akk12', first_name: 'Armand', last_name: 'Kerr'}),
    new User({username: 'm_bell', first_name: 'Mary', last_name: 'Bell'}),
    new User({username: 'Amenana', first_name: 'Amena', last_name: 'Compton'}),
    new User({username: 'MCoffey', first_name: 'Maryam', last_name: 'Coffey'}),
    new User({username: 'nealy2020', first_name: 'Shaeleigh', last_name: 'Neal'}),
    new User({username: 'whyman', first_name: 'Wyatt', last_name: 'Bennett'}),
];

export async function createUsers(manager: IModelManager) {
    for (const user of USERS) {
        try {
            await manager.create(user);
        }
        catch (e) {
            console.error('Error creating User ID:', user.id);
            throw e;
        }
    }
}
