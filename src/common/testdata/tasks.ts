
import { IModelManager } from 'rev-models';
import { Task } from '../models/Task';
import { User } from '../models/User';
import { Project } from '../models/Project';

export const TASKS: Task[] = [
    new Task({id: 1, name: 'vehicula. Pellentesque tincidunt', status: 'in_progress', target_start_date: '2017-07-03', target_finish_date: '2018-03-16', details: 'ipsum non arcu. Vivamus sit amet risus. Donec egestas.', user: new User({id: 3}), project: new Project({id: 3}) }),
    new Task({id: 2, name: 'eget nisi dictum', status: 'in_progress', target_start_date: '2018-01-08', target_finish_date: '2019-02-07', details: 'ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing', user: new User({id: 6}), project: new Project({id: 7}) }),
    new Task({id: 3, name: 'nisl sem, consequat', status: 'in_progress', target_start_date: '2017-07-29', target_finish_date: '2018-03-16', details: 'ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque.', user: new User({id: 1}), project: new Project({id: 16}) }),
    new Task({id: 4, name: 'lorem, vehicula et, rutrum', status: 'completed', target_start_date: '2018-02-23', target_finish_date: '2019-01-06', details: 'velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi', user: new User({id: 7}), project: new Project({id: 13}) }),
    new Task({id: 5, name: 'Ut sagittis lobortis mauris.', status: 'not_started', target_start_date: '2017-09-20', target_finish_date: '2018-06-26', details: 'consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing', user: new User({id: 8}), project: new Project({id: 2}) }),
    new Task({id: 6, name: 'quis, pede. Praesent eu', status: 'in_progress', target_start_date: '2017-09-09', target_finish_date: '2019-02-13', details: 'et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut', user: new User({id: 7}), project: new Project({id: 6}) }),
    new Task({id: 7, name: 'dis parturient montes,', status: 'in_progress', target_start_date: '2017-10-19', target_finish_date: '2018-06-20', details: 'ipsum nunc id enim. Curabitur massa. Vestibulum', user: new User({id: 4}), project: new Project({id: 5}) }),
    new Task({id: 8, name: 'nostra, per inceptos', status: 'completed', target_start_date: '2017-06-17', target_finish_date: '2019-03-16', details: 'purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi', user: new User({id: 6}), project: new Project({id: 1}) }),
    new Task({id: 9, name: 'lorem vitae odio', status: 'completed', target_start_date: '2017-09-29', target_finish_date: '2019-02-07', details: 'Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit', user: new User({id: 8}), project: new Project({id: 7}) }),
    new Task({id: 10, name: 'imperdiet non, vestibulum nec,', status: 'not_started', target_start_date: '2017-10-04', target_finish_date: '2019-01-27', details: 'tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu,', user: new User({id: 7}), project: new Project({id: 14}) }),
    new Task({id: 11, name: 'fermentum metus. Aenean sed pede nec', status: 'in_progress', target_start_date: '2018-01-31', target_finish_date: '2018-12-06', details: 'venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus,', user: new User({id: 5}), project: new Project({id: 16}) }),
    new Task({id: 12, name: 'Curabitur egestas nunc sed libero.', status: 'not_started', target_start_date: '2017-06-20', target_finish_date: '2018-11-28', details: 'eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam', user: new User({id: 5}), project: new Project({id: 13}) }),
    new Task({id: 13, name: 'mus. Aenean eget magna. Suspendisse tristique', status: 'cancelled', target_start_date: '2018-01-23', target_finish_date: '2019-01-02', details: 'ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non', user: new User({id: 8}), project: new Project({id: 11}) }),
    new Task({id: 14, name: 'risus odio, auctor vitae,', status: 'not_started', target_start_date: '2017-09-16', target_finish_date: '2019-03-13', details: 'augue malesuada malesuada. Integer id magna et ipsum', user: new User({id: 8}), project: new Project({id: 2}) }),
    new Task({id: 15, name: 'id magna et ipsum cursus vestibulum.', status: 'in_progress', target_start_date: '2017-11-18', target_finish_date: '2018-04-10', details: 'lacus. Mauris non dui nec urna suscipit', user: new User({id: 4}), project: new Project({id: 12}) }),
    new Task({id: 16, name: 'at augue id', status: 'not_started', target_start_date: '2017-10-26', target_finish_date: '2018-04-12', details: 'interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor,', user: new User({id: 3}), project: new Project({id: 3}) }),
    new Task({id: 17, name: 'tincidunt pede ac urna. Ut tincidunt', status: 'completed', target_start_date: '2017-10-20', target_finish_date: '2018-08-20', details: 'Maecenas libero est, congue a, aliquet vel, vulputate eu,', user: new User({id: 7}), project: new Project({id: 6}) }),
    new Task({id: 18, name: 'malesuada fringilla est. Mauris eu', status: 'cancelled', target_start_date: '2017-10-20', target_finish_date: '2019-02-16', details: 'magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque', user: new User({id: 8}), project: new Project({id: 6}) }),
    new Task({id: 19, name: 'libero mauris, aliquam eu,', status: 'completed', target_start_date: '2017-04-23', target_finish_date: '2018-07-25', details: 'Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat', user: new User({id: 3}), project: new Project({id: 14}) }),
    new Task({id: 20, name: 'metus eu erat', status: 'in_progress', target_start_date: '2017-10-01', target_finish_date: '2018-10-28', details: 'malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc', user: new User({id: 7}), project: new Project({id: 11}) }),
    new Task({id: 21, name: 'interdum. Nunc sollicitudin', status: 'in_progress', target_start_date: '2017-05-23', target_finish_date: '2018-05-29', details: 'blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris', user: new User({id: 6}), project: new Project({id: 16}) }),
    new Task({id: 22, name: 'egestas rhoncus. Proin nisl sem, consequat', status: 'in_progress', target_start_date: '2018-01-05', target_finish_date: '2018-09-05', details: 'elementum, lorem ut aliquam iaculis, lacus pede sagittis', user: new User({id: 7}), project: new Project({id: 7}) }),
    new Task({id: 23, name: 'ac arcu. Nunc', status: 'completed', target_start_date: '2017-12-20', target_finish_date: '2018-10-05', details: 'Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque', user: new User({id: 2}), project: new Project({id: 15}) }),
    new Task({id: 24, name: 'imperdiet ullamcorper. Duis at', status: 'cancelled', target_start_date: '2017-03-30', target_finish_date: '2018-12-13', details: 'morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi', user: new User({id: 5}), project: new Project({id: 13}) }),
    new Task({id: 25, name: 'mollis. Duis sit', status: 'in_progress', target_start_date: '2018-02-01', target_finish_date: '2019-02-25', details: 'Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in', user: new User({id: 2}), project: new Project({id: 10}) }),
    new Task({id: 26, name: 'massa. Integer vitae nibh. Donec est', status: 'in_progress', target_start_date: '2017-12-06', target_finish_date: '2018-11-21', details: 'vel nisl. Quisque fringilla euismod enim. Etiam', user: new User({id: 4}), project: new Project({id: 15}) }),
    new Task({id: 27, name: 'dictum eu, eleifend nec, malesuada', status: 'completed', target_start_date: '2017-12-14', target_finish_date: '2018-12-05', details: 'sit amet ultricies sem magna nec quam.', user: new User({id: 7}), project: new Project({id: 1}) }),
    new Task({id: 28, name: 'Pellentesque habitant morbi tristique senectus et', status: 'completed', target_start_date: '2018-01-03', target_finish_date: '2019-01-01', details: 'dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget,', user: new User({id: 6}), project: new Project({id: 5}) }),
    new Task({id: 29, name: 'enim diam vel arcu. Curabitur ut', status: 'cancelled', target_start_date: '2017-05-22', target_finish_date: '2018-05-31', details: 'orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla.', user: new User({id: 1}), project: new Project({id: 6}) }),
    new Task({id: 30, name: 'Morbi quis urna. Nunc', status: 'not_started', target_start_date: '2017-11-08', target_finish_date: '2018-07-01', details: 'vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam', user: new User({id: 2}), project: new Project({id: 16}) }),
];

export async function createTasks(manager: IModelManager) {
    for (const task of TASKS) {
        try {
            await manager.create(task);
        }
        catch (e) {
            console.error('Error creating Task ID:', task.id);
            throw e;
        }
    }
}
