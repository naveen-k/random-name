'use strict';

// ================ Base Setup ========================

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Routes = require('./routes');


// Create Server Object
const server = new Hapi.Server();
server.connection({
  port: process.env.API_NAME_GENERATOR_PORT || 7012
});


const swaggerOptions = {
  info: {
    'title': 'Sample Rest API to get Random names',
    'version': Pack.version,
  },
  documentationPath: '/'
};

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: swaggerOptions
  }], (err) => {
    if (err) {
      server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
      server.log(['start'], 'hapi-swagger interface loaded')
    }
  });

server.route(Routes.routes);

// =============== Start our Server =======================
// Lets start the server
server.start(() => {
  console.log('Server running at:', server.info.uri);
});
