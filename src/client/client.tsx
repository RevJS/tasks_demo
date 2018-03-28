import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';

import { manager } from './models/manager';
import { ModelProvider } from 'rev-ui';
import { registerComponents } from 'rev-ui-materialui';
registerComponents();

ReactDOM.render((
        <ModelProvider modelManager={manager} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ModelProvider>
    ),
    document.getElementById('app')
);
