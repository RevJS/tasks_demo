
import { IModelManager } from 'rev-models';
import { Project } from '../models/Project';

export const PROJECTS: Project[] = [
    new Project({
        name: 'Tincidunt Dui Augue Company',
        description: 'enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed',
        status: 'draft',
        target_start_date: '2017-11-10',
        target_finish_date: '2018-04-06'
    }),
    new Project({
        name: 'Libero Et Limited',
        description: 'id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis',
        status: 'cancelled',
        target_start_date: '2017-10-18',
        target_finish_date: '2018-08-03'
    }),
    new Project({
        name: 'Est Vitae Sodales PC',
        description: 'molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula.',
        status: 'completed',
        target_start_date: '2017-06-05',
        target_finish_date: '2019-01-09'
    }),
    new Project({
        name: 'Ipsum LLP',
        description: 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
        status: 'draft',
        target_start_date: '2017-12-23',
        target_finish_date: '2018-05-06'
    }),
    new Project({
        name: 'Vivamus Institute',
        description: 'vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non',
        status: 'in_progress',
        target_start_date: '2018-01-16',
        target_finish_date: '2018-04-27'
    }),
    new Project({
        name: 'Congue Turpis Company',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce',
        status: 'draft',
        target_start_date: '2017-05-23',
        target_finish_date: '2018-09-17'
    }),
    new Project({
        name: 'Sapien Corp.',
        description: 'torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus.',
        status: 'cancelled',
        target_start_date: '2017-06-18',
        target_finish_date: '2018-09-21'
    }),
    new Project({
        name: 'Consequat Ltd',
        description: 'elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,',
        status: 'completed',
        target_start_date: '2017-04-28',
        target_finish_date: '2019-03-15'
    }),
    new Project({
        name: 'Vestibulum Limited',
        description: 'non enim commodo hendrerit. Donec porttitor tellus non magna. Nam',
        status: 'in_progress',
        target_start_date: '2017-09-04',
        target_finish_date: '2019-02-10'
    }),
    new Project({
        name: 'Bibendum Sed Est Consulting',
        description: 'Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam,',
        status: 'in_progress',
        target_start_date: '2017-05-27',
        target_finish_date: '2018-03-05'
    }),
    new Project({
        name: 'Vel Convallis Institute',
        description: 'vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend',
        status: 'completed',
        target_start_date: '2018-01-30',
        target_finish_date: '2018-05-25'
    }),
    new Project({
        name: 'Gravida Corporation',
        description: 'sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet,',
        status: 'in_progress',
        target_start_date: '2017-09-07',
        target_finish_date: '2019-02-16'
    }),
    new Project({
        name: 'Nec Diam Duis Institute',
        description: 'ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat',
        status: 'in_progress',
        target_start_date: '2017-08-28',
        target_finish_date: '2018-03-26'
    }),
    new Project({
        name: 'Justo PC',
        description: 'non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu',
        status: 'draft',
        target_start_date: '2017-07-01',
        target_finish_date: '2019-01-05'
    }),
    new Project({
        name: 'Felis Purus Associates',
        description: 'non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio.',
        status: 'cancelled',
        target_start_date: '2017-11-13',
        target_finish_date: '2018-03-04'
    }),
    new Project({
        name: 'Tincidunt Aliquam Limited',
        description: 'mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae,',
        status: 'draft',
        target_start_date: '2018-02-01',
        target_finish_date: '2018-06-09'
    })
];

export async function createProjects(manager: IModelManager) {
    for (const project of PROJECTS) {
        try {
            await manager.create(project);
        }
        catch (e) {
            console.error('Error creating Project ID:', project.id);
            throw e;
        }
    }
}
