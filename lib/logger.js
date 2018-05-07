module.exports = Logger;

var Log4js = require("log4js");

var loggerInstance = null;

function Logger() {
    this.logger = null;
}

Logger.getInstance = function() {
    if (!loggerInstance) {
        loggerInstance = new Logger();
        loggerInstance.init(SYS_CONF.ENV);
    }

    return loggerInstance.logger;
};

Logger.prototype.init = function(env) {
    Log4js.configure({
        "appenders":{
            "out":{
                "type":"stdout",
            },
            "production":{
                "type":"dateFile",
                "filename":"./log/production/log",
                "alwaysIncludePattern": true,
                "pattern":"-yyyy-MM-dd.log"
            },
            "develop":{
                "type":"dateFile",
                "filename":"./log/develop/log",
                "alwaysIncludePattern": true,
                "pattern":"-yyyy-MM-dd.log"
            }
        },
        "categories":{
            "default": {"appenders":['out', 'develop'], level:'debug'},
            "develop": {"appenders":['out', 'develop'], level:'debug'},
            "production": {"appenders":['production'], level:'info'}
        }
    });

    this.logger = Log4js.getLogger(env);
};
