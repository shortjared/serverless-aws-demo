'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID,
                               process.env.TWILIO_AUTH_TOKEN);

// Lambda Handler
module.exports.handler = function(event, context) {
  var name = event.name;
  name = name.trim().substring(0, 50);
  console.log("PERSON WHO IS AWESOME --->", name);
  
  var twixml = '<?xml version="1.0" encoding="UTF-8"?>' +
               "<Response>"+
                "<Sms>Thanks for listening, "+name+"!\n\n"+
                  "www.trek10.com\n"+
                  "www.serverless.com\n"+
                  "@shortjared\n"+
                  "- Jared Short</Sms>"+
                "</Response>"
  context.done(null, twixml);
};
