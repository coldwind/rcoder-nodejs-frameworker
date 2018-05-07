module.exports = Bootstartup;

function Bootstartup() {
}

Bootstartup.sysInit = function(service) {
    LOAD.serviceInit(service);
};

Bootstartup.userInit = function() {
};

Bootstartup.run = function(service) {
    Bootstartup.sysInit(service);
};
