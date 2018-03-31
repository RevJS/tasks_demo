
import * as React from 'react';
import { Route } from 'react-router-dom';
import { config } from '../config';

import { Dashboard } from './Dashboard';
import { ProjectDetail } from './projects/ProjectDetail';
import { ProjectList } from './projects/ProjectList';
import { TaskDetail } from './tasks/TaskDetail';
import { TaskList } from './tasks/TaskList';
import { UserList } from './users/UserList';

export const Routes: React.StatelessComponent = () => (
    <div style={{ marginTop: 80 }}>
        <Route exact path={config.basePath + '/'} component={Dashboard} />
        <Route path={config.basePath + '/projects/detail'} component={ProjectDetail} />
        <Route path={config.basePath + '/projects/list'} component={ProjectList} />
        <Route path={config.basePath + '/tasks/detail'} component={TaskDetail} />
        <Route path={config.basePath + '/tasks/list'} component={TaskList} />
        <Route path={config.basePath + '/users/list'} component={UserList} />
    </div>
);
