import * as React from 'react';

import { MuiThemeProvider, createMuiTheme, WithStyles, withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import EventNote from 'material-ui-icons/EventNote';
import List from 'material-ui-icons/List';
import { Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';

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

class AppC extends React.Component<WithStyles<keyof typeof styles>, IAppState> {

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

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Reboot />
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
                    <MenuItem>
                        <ListItemIcon><EventNote /></ListItemIcon>
                        <ListItemText inset primary="Projects" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><List /></ListItemIcon>
                        <ListItemText inset primary="Tasks" />
                    </MenuItem>
                </Drawer>

                <div style={{ marginTop: 80 }}>
                    <Route exact path="/" component={Dashboard} />
                </div>

            </MuiThemeProvider>
        );
    }
}

export const App: React.ComponentType = withStyles(styles)(AppC);
