module.exports = Json;

function Json() {
}

Json.encode = function(data) {
    var res = "";
    try {
        res = JSON.stringify(data);
    } catch(err) {
        LOGGER.error("json encode error", err);
    }

    return res;
};

Json.decode = function(jsonString) {
    var res = {};
    try {
        res = JSON.parse(jsonString);
    } catch(err) {
        LOGGER.error("json encode error", err);
    }

    return res;
};
