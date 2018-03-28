import * as React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import { Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';

const theme = createMuiTheme();

export class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Reboot />
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title">
                            RevJS Task Management Demo
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Tasks</MenuItem>
                </Drawer>

                <Route exact path="/" component={Dashboard} />

            </MuiThemeProvider>
        );
    }
}
