// 结构化WS的消息输出
module.exports = Msg;

function Msg() {
}

// 错误输入格式
Msg.errMsg = function(errno) {
    var errJson = {
        "errno":errno
    };

    return JSON.stringify(errJson);
};

Msg.response = function(jsonData) {
    var resData = {
        "errno":0,
        "msg":jsonData
    };

    return PROTOCOL.encode(resData);
};
