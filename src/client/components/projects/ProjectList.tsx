
import * as React from 'react';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withRouter } from 'react-router-dom';
import { ListView } from 'rev-ui';
import Button from 'material-ui/Button';

const buttonGroupStyle = {
    marginBottom: 15, textAlign: 'right'
};

const buttonStyle = {
    marginLeft: 10
};

export const ProjectList = withRouter((props) => {

    return (
        <div style={{ maxWidth: 1000, padding: 20, margin: '0 auto' }}>

            <Typography variant="display2" style={{ marginBottom: 30 }}>
                Project List
            </Typography>

            <Card style={{ padding: 24, marginBottom: 30 }}>
                <Typography variant="title">
                    Search Projects TODO
                </Typography>
            </Card>

            <div style={buttonGroupStyle}>
                <Button variant="raised" color="primary" style={buttonStyle}
                    onClick={() => props.history.push('/projects/detail')}>
                    New Project
                </Button>
            </div>

            <Card>
                <ListView
                    title="All Projects"
                    model="Project"
                    fields={[
                        'name',
                        'status',
                        'target_start_date',
                        'target_finish_date'
                    ]}
                    orderBy={['target_start_date']}
                    onItemPress={(item) => {
                        props.history.push('/projects/detail?id=' + item.id);
                    }}
                />
            </Card>
        </div>
    );
});
