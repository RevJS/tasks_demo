
import * as React from 'react';
import { DetailView, Field, SaveAction } from 'rev-ui';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withRouter } from 'react-router-dom';
import { config } from '../../config';

export const TaskDetail = withRouter((props) => {

    const currentUrl = new URL(window.location.href);
    const paskId = currentUrl.searchParams.get('id');
    console.log('Task ID', paskId);

    return (
        <div style={{ maxWidth: 800, padding: 20, margin: '0 auto' }}>

            <Typography variant="display2" style={{ marginBottom: 30 }}>
                Task
            </Typography>

            <Card style={{ padding: 20 }}>

                <DetailView model="Task" primaryKeyValue={paskId}>
                    <Field name="name" />
                    <Field name="status" />
                    <Field name="project" />
                    <Field name="user" />
                    <Field name="target_start_date" />
                    <Field name="target_finish_date" />
                    <Field name="details" colspan={12} />

                    <SaveAction
                        label="Save Task"
                        style={{marginTop: 20}}
                        onError={(err) => alert('Save Error: ' + JSON.stringify(err, null, 2))}
                        onSuccess={() => {
                            alert('Task Saved');
                            props.history.push(config.basePath + '/');
                        }}
                    />
                </DetailView>

            </Card>
        </div>
    );
});
