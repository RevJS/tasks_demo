
import { IModelManager } from 'rev-models';
import { User } from '../models/User';

export const USERS: User[] = [
    new User({id: 1, username: 'ESums22', first_name: 'Erica', last_name: 'Sims'}),
    new User({id: 2, username: 'reece', first_name: 'Reece', last_name: 'Serrano'}),
    new User({id: 3, username: 'akk12', first_name: 'Armand', last_name: 'Kerr'}),
    new User({id: 4, username: 'm_bell', first_name: 'Mary', last_name: 'Bell'}),
    new User({id: 5, username: 'Amenana', first_name: 'Amena', last_name: 'Compton'}),
    new User({id: 6, username: 'MCoffey', first_name: 'Maryam', last_name: 'Coffey'}),
    new User({id: 7, username: 'nealy2020', first_name: 'Shaeleigh', last_name: 'Neal'}),
    new User({id: 8, username: 'whyman', first_name: 'Wyatt', last_name: 'Bennett'}),
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
