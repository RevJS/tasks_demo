
import * as React from 'react';

const title = 'RevJS Demo';

const clientScripts = [
    '/static/clientlibs.js',
    '/static/client.js'
];

const clientCss = [
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
];

export function BasePage() {
    return (
        <html>
            <head>
                <title>{title}</title>
                {clientCss.map((url, idx) => (
                    <link rel="stylesheet" href={url} key={idx} />
                ))}
            </head>
            <body style={{background: '#EEEEEE'}}>
                <div id="app">Loading...</div>
                {clientScripts.map((url, idx) => (
                    <script src={url} key={idx} />
                ))}
            </body>
        </html>
    );
}
