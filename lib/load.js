module.exports = Load;

function Load() {
}

Load.prototype.serviceInit = function(service) {
    this.service = service;
};

Load.prototype.lib = function(lib) {
    var path = "./" + lib + ".js";
    return require(path);
};

Load.prototype.model = function(model) {
    var path = "../service/" + this.service + "/model/" + model + ".js";
    return require(path);
};

Load.prototype.control = function(control) {
    var path = "../service/" + this.service + "/control/" + control + ".js";
    return require(path);
};

Load.prototype.baseConf = function() {
    var path = "../conf/" + this.service + ".json";
    return require(path);
};

Load.prototype.serviceConf = function(confName) {
    var path = "../service/" + this.service + "/conf/" + confName + ".json";
    return require(path);
};
