
import * as React from 'react';

import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import { ListView, IListViewComponentProps } from 'rev-ui';
import { User } from '../../../common/models/User';
import { getColour } from '../../utils/getColour';

const UserListComponent = (props: IListViewComponentProps<User>) => {

    if (props.loadState == 'LOADING') {
        return (
            <Typography variant="subheading">
                Loading...
            </Typography>
        );
    }
    else {
        const userCards = props.results.map((user, idx) => (
            <Card key={idx} style={{ marginBottom: 16 }}>
                <CardHeader
                    avatar={
                        <Avatar style={{ backgroundColor: getColour(user.id) }}>
                            {user.username.substr(0, 1).toUpperCase()}
                        </Avatar>
                    }
                    title={user.username}
                    subheader={'User ID: ' + user.id}
                />
                <CardContent>
                    <Typography component="p">
                        <strong>Full Name: </strong>
                        {user.first_name + ' ' + user.last_name}
                    </Typography>
                </CardContent>
            </Card>
        ));

        return (
            <div>
                <Typography variant="title" style={{ paddingBottom: 30 }}>
                    {props.title}
                </Typography>
                {userCards}
            </div>
        );
    }
};

export const UserList: React.StatelessComponent = (props) => {

    return (
        <div style={{ maxWidth: 650, padding: 20, margin: '0 auto' }}>

            <Typography variant="display2" style={{ marginBottom: 30 }}>
                Users
            </Typography>

            <ListView
                title="All Users"
                model="User"
                orderBy={['id']}
                limit={100}
                component={UserListComponent}
            />

        </div>
    );
};
