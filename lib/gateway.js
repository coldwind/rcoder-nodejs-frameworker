module.exports = Gateway;

var Msg = require("./msg.js");
var Load = require("./load.js");
var Logger = require("./logger.js");

function Gateway() {
}

Gateway.prototype.init = function() {
};

Gateway.prototype.call = function(data, callback) {
    // check module,control,action
    if (!data.s || !data.c || !data.a) {
        return callback(Msg.errMsg(1000));
    }

    var param = {};
    if (data.d) {
        param = data.d;
    }

    // bootstartup
    var bootStartup = require("../service/" + data.s + "/bootstartup.js");
    bootStartup.run(data.s);

    // call: service->control->action
    var control = LOAD.control(data.c);

    var cObj = new control();
    var res = cObj[data.a](param);

    var response = Msg.response(res);

    callback(response);
};
