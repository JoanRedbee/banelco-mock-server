const mockServer = require('express-mock-server');

var sources = [
  require('./debito.js')
];

// this is default configuration
var opt_serverConfig = {
  port: 8080,
  controlApiUrl: '/api/v1'
};

/**
 *  Return strated Server instance
     function can be called are 
        start
        close
 *  @param {Array} sources 
 *  @param {?Object} opt_serverConfig 
 *  @return {Server} 
 */
mockServer.serverStart(sources, opt_serverConfig)