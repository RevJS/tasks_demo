
import * as React from 'react';
import { Route } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { ProjectDetail } from './projects/ProjectDetail';
import { ProjectList } from './projects/ProjectList';
import { TaskDetail } from './tasks/TaskDetail';

export const Routes: React.StatelessComponent = () => (
    <div style={{ marginTop: 80 }}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/projects/detail" component={ProjectDetail} />
        <Route path="/projects/list" component={ProjectList} />
        <Route path="/tasks/detail" component={TaskDetail} />
    </div>
);