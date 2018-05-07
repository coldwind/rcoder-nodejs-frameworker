var Load = require("./lib/load.js");
var Logger = require("./lib/logger.js");
var logger = null;
var load = null;

function Common() {
}

Common.Logger = function() {
    return Logger.getInstance();
};

Common.Load = function() {
    var load = new Load();
    return load;
};

Common.SysConf = function() {
    return require("./conf/sys.json");
};

Common.Protocol = function() {
    return require("./lib/protocol/" + SYS_CONF.PROTOCOL + ".js");
};

// 定义全局变量
SYS_CONF = Common.SysConf();
LOGGER = Common.Logger();
LOAD = Common.Load();
PROTOCOL = Common.Protocol();
