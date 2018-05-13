import * as React from 'react';

import { MuiThemeProvider, createMuiTheme, WithStyles, withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import EventNote from '@material-ui/icons/EventNote';
import List from '@material-ui/icons/List';
import Home from '@material-ui/icons/Home';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Code from '@material-ui/icons/Code';
import Divider from 'material-ui/Divider';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Routes } from './Routes';
import { config } from '../config';

const theme = createMuiTheme();

const styles = {
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export interface IAppState {
    menuOpen: boolean;
}

type AppProps = WithStyles<keyof typeof styles> & RouteComponentProps<any>;

class AppC extends React.Component<AppProps, IAppState> {

    constructor(props: any) {
        super(props);

        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);

        this.state = {
            menuOpen: false
        };
    }

    onMenuButtonClick() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    onMenuClick(url: string) {
        this.props.history.push(config.basePath + url);
        this.setState({
            menuOpen: false
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />

                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton aria-label="Menu" color="inherit" className={classes.menuButton}
                            onClick={this.onMenuButtonClick}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            RevJS Task Management Demo
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.menuOpen} onClose={this.onMenuButtonClick}>
                    <div style={{ background: '#4054B2', height: 65, marginBottom: 10 }}></div>
                    <MenuItem onClick={() => this.onMenuClick('/')}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText inset primary="Dashboard" />
                    </MenuItem>
                    <MenuItem onClick={() => this.onMenuClick('/projects/list')}>
                        <ListItemIcon><EventNote /></ListItemIcon>
                        <ListItemText inset primary="Projects" />
                    </MenuItem>
                    <MenuItem onClick={() => this.onMenuClick('/tasks/list')}>
                        <ListItemIcon><List /></ListItemIcon>
                        <ListItemText inset primary="Tasks" />
                    </MenuItem>
                    <MenuItem onClick={() => this.onMenuClick('/users/list')} style={{ marginBottom: 10 }}>
                        <ListItemIcon><SupervisorAccount /></ListItemIcon>
                        <ListItemText inset primary="Users" />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => window.location.href = 'https://revjs.org/'} style={{ marginTop: 10 }}>
                        <ListItemIcon><LibraryBooks /></ListItemIcon>
                        <ListItemText primary="RevJS Documentation" />
                    </MenuItem>
                    <MenuItem onClick={() => window.location.href = 'https://github.com/RevJS/tasks_demo'}>
                        <ListItemIcon><Code /></ListItemIcon>
                        <ListItemText primary="Edit on Github" />
                    </MenuItem>
                </Drawer>

                <Routes />

            </MuiThemeProvider>
        );
    }
}

export const App: React.ComponentType = withRouter(withStyles(styles)(AppC));
