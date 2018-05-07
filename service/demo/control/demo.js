module.exports = Demo;

function Demo() {
}

Demo.prototype.index = function(param) {
    LOGGER.debug("index run");

    let DemoModel = LOAD.model("demo");
    let demo = new DemoModel();
    param = demo.get();

    return param;
};
