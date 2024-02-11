const debug = require('debug')('app:header');

const setHeader = (res, headerName, headerValue) => {
    res.setHeader(headerName, headerValue);
    debug(`Header ${headerName} set to ${headerValue}`);
};

const getHeader = (req, headerName) => {
    const headerValue = req.headers[headerName];
    const message = headerValue ? `Header ${headerName} found, value: ${headerValue}` : `Header ${headerName} not found`;
    debug(message);
    return headerValue || 'header not found';
};

module.exports = { setHeader, getHeader };
