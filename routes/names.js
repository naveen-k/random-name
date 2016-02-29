'use strict';
var Moniker = require('moniker');
module.exports.routes = [
{
  method: 'GET',      // Methods Type
  path: '/ramdom-name',  // Url
  config: {
      description: 'Get Random Name',
      notes: 'Give the randome name everytime',
      tags: ['api'],
  },
  handler: function (request, reply) { //Action
  var names = Moniker.generator([Moniker.adjective, Moniker.noun,Moniker.verb]);
   reply(names.choose()); 
  }
}];