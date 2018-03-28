import { ModelManager } from 'rev-models';
import { User } from '../../common/models/User';

export async function createData(manager: ModelManager) {

    // Create Users

    await manager.create(new User({
        username: 'joe123',
        first_name: 'Joe',
        last_name: 'Mahony'
    }));

    await manager.create(new User({
        username: 'bill27',
        first_name: 'Bill',
        last_name: 'Biddington'
    }));

    await manager.create(new User({
        username: 'jane12',
        first_name: 'Jane',
        last_name: 'Foster'
    }));

}
