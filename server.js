var StatuspageController = require('statuspage-controller');
var IrcPlugin = require('statuspage-controller-irc');

var config = {
    NR_API_KEY: 'xxxx',
    SPIO_PAGE_ID: 'xxxx',
    SPIO_API_KEY: 'xxxx',
    POLL_INTERVAL: 5000,
    PORT: 3000,
    THRESHOLDS: [
        {
            "duration": 600,
            "status": "degraded_performance"
        },
        {
            "duration": 1200,
            "status": "partial_outage"
        },
        {
            "duration": 1800,
            "status": "major_outage"
        }
    ]
};

var plugin_config = {
    host: 'irc.host',
    nick: 'Statuspage',
    prefix: '[test status page]',
    channels: [
        '#mychannel'
    ]
};


var spc = new StatuspageController(config);

spc.addPlugin(new IrcPlugin(plugin_config));

spc.start();