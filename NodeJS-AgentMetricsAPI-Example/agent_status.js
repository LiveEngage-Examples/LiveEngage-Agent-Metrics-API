/*
 Web call needed to discover domain needed to call Agent Metrics API for individual LiveEngage accounts for Accounts:
 https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/msgHist/baseURI.json?version=1.0
 
 Expected response example:
{
 "service":"msgHist",
 "account":"56072331",
 "baseURI":"va-a.msghist.liveperson.net"
}
*/

// To run this example, you will need to install the Request module. 
// run -  npm install request

var request = require('request');

var oauth = {
    consumer_key: 'your app key',
    consumer_secret: 'your app secret',
    token: 'your access token',
    token_secret: 'your access token secret'
};

// Get current agent status
// Example URL: https://va-a.msghist.liveperson.net/messaging_history/api/account/56072331/agent-view/status
var url = 'https://{YOUR BASE URI}/messaging_history/api/account/{YOUR ACCOUNT NUMBER}/agent-view/status';
request.post({
    url: url,
    oauth: oauth,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    body: {}
}, function (e, r, b) {
    if (!e && r.statusCode == 200) {
        console.log(JSON.stringify(b));
    }
    else {
        console.log(e);
    }
});
