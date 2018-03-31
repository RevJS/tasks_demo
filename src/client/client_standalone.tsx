import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';

import { manager, backend } from './models/inMemory';
import { createData } from '../common/testdata';
import { ModelProvider } from 'rev-ui';
import { registerComponents } from 'rev-ui-materialui';
registerComponents();

(async () => {

    await createData(manager);
    console.log('Demo Data Loaded.');

    // Artificially slow down the backend to simulate the network
    backend.OPERATION_DELAY = 100;

    ReactDOM.render(
        <ModelProvider modelManager={manager} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ModelProvider>,
        document.getElementById('app')
    );

})();
