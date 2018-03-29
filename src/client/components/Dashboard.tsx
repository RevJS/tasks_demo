
import * as React from 'react';
import Grid from 'material-ui/Grid';
import { ListView } from 'rev-ui';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export const Dashboard: React.StatelessComponent = () => (
    <div style={{ maxWidth: 1500, padding: 20, margin: '0 auto' }}>

        <Typography variant="display2" style={{ marginBottom: 30 }}>
            Dashboard
        </Typography>

        <Grid container spacing={24}>

            <Grid item xs={12} md={6}>
                <Card>
                    <ListView
                        title="Open Projects"
                        model="Project"
                        fields={[
                            'name', 'status', 'target_start_date'
                        ]}
                        where={{
                            status: { _in: ['draft', 'in_progress'] }
                        }}
                        orderBy={['name']}
                    />
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card>
                    <ListView
                        title="Upcoming Tasks"
                        model="Task"
                        fields={[
                            'name', 'status', 'target_start_date', 'target_finish_date'
                        ]}
                        where={{
                            status: { _in: ['not_started', 'in_progress'] }
                        }}
                        orderBy={['target_start_date']}
                    />
                </Card>
            </Grid>

        </Grid>
    </div>
);
