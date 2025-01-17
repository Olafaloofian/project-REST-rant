const React = require('react');

function Default (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    );
};

module.exports = Default;