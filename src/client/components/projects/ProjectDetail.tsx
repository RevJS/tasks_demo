
import * as React from 'react';
import { DetailView, Field, SaveAction } from 'rev-ui';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withRouter } from 'react-router-dom';

export const ProjectDetail = withRouter((props) => {

    const currentUrl = new URL(window.location.href);
    const projectId = currentUrl.searchParams.get('id');
    console.log('Project ID', projectId);

    return (
        <div style={{ maxWidth: 800, padding: 20, margin: '0 auto' }}>

            <Typography variant="display2" style={{ marginBottom: 30 }}>
                Project
            </Typography>

            <Card style={{ padding: 20 }}>

                <DetailView model="Project" primaryKeyValue={projectId}>
                    <Field name="name" />
                    <Field name="status" />
                    <Field name="description" colspan={12} />
                    <Field name="target_start_date" />
                    <Field name="target_finish_date" />

                    <SaveAction
                        label="Save Project"
                        style={{marginTop: 20}}
                        onError={(err) => alert('Save Error: ' + JSON.stringify(err, null, 2))}
                        onSuccess={() => {
                            alert('Project Saved');
                            props.history.push('/');
                        }}
                    />
                </DetailView>

            </Card>
        </div>
    );
});
