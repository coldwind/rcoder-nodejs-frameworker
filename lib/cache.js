module.exports = Cache;

function Cache() {
    this.caches = {};
}

Cache.prototype.get = function(key) {
    if (!this.caches[key]) {
        return null;
    }

    return this.caches[key];
};

Cache.prototype.set = function(key, value) {
    this.caches[key] = value;

    return true;
};
