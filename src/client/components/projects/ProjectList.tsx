
import * as React from 'react';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { SearchView, SearchField, SearchAction, ListView } from 'rev-ui';
import Button from 'material-ui/Button';
import { config } from '../../config';

const buttonGroupStyle = {
    marginBottom: 15, textAlign: 'right'
};

const buttonStyle = {
    marginLeft: 10
};

interface IProjectListState {
    where: object;
}

class ProjectListC extends React.Component<RouteComponentProps<any>, IProjectListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            where: {}
        };
    }

    onSearch(newWhere: object) {
        this.setState({
            where: newWhere
        });
    }

    render() {
        return (
            <div style={{ maxWidth: 1000, padding: 20, margin: '0 auto' }}>

                <Typography variant="display2" style={{ marginBottom: 30 }}>
                    Project List
                </Typography>

                <Card style={{ padding: 16, marginBottom: 30 }}>
                    <Typography variant="title" style={{ marginBottom: 12 }}>
                        Search Projects
                    </Typography>

                    <SearchView
                        model="Project"
                        onSearch={(where) => this.onSearch(where)}
                    >
                        <SearchField name="name" colspan={4} />
                        <SearchField name="description" colspan={4} />
                        <SearchField name="status" colspan={4} />
                        <SearchField name="target_start_date" colspan={4} />
                        <SearchField name="target_finish_date" colspan={4} />

                        <div style={{ width: '100%', textAlign: 'right', paddingTop: 20 }}>
                            <SearchAction
                                label="Search Projects"
                            />
                        </div>
                    </SearchView>
                </Card>

                <div style={buttonGroupStyle}>
                    <Button variant="raised" color="primary" style={buttonStyle}
                        onClick={() => this.props.history.push(config.basePath + '/projects/detail')}>
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
                        where={this.state.where}
                        orderBy={['target_start_date']}
                        limit={10}
                        onItemPress={(item) => {
                            this.props.history.push(config.basePath + '/projects/detail?id=' + item.id);
                        }}
                    />
                </Card>
            </div>
        );
    }
}

export const ProjectList = withRouter(ProjectListC);
