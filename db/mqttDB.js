var pool = require('../services/database').pool;

module.exports.humiIdCount = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT count(*) AS count  FROM tbl_humi WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            // callback(true);
            callback(result);
        });
    });
};

module.exports.urineIdCount = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT count(*) AS count FROM tbl_urine WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            // callback(true);
            callback(result);
        });
    });
};

module.exports.tempIdCount = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT count(*) AS count  FROM tbl_temp WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            // callback(true);
            callback(result);
        });
    });
};

module.exports.ringerIdCount = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT count(*) AS count  FROM tbl_ringer WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            // callback(true);
            callback(result);
        });
    });
};

module.exports.welltagIdCount = (id, callback) => {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query =
            'SELECT count(*) AS count FROM tbl_welltag_data WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            // callback(true);
            callback(result);
        });
    });
};

module.exports.addWelltag = function(id, ac, fd, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query =
            'UPDATE tbl_welltag_data SET action_status = ?, fall_down = ?, update_date = now(), count = count + 1 WHERE id = ?';
        connection.query(query, [ac, fd, id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
            // callback(result);
        });
    });
};

module.exports.addHumi = function(val1, val2, id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query =
            'UPDATE tbl_humi SET value = ?, value2 = ?, update_date = now(), count = count + 1 WHERE id = ?';
        connection.query(query, [val1, val2, id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
            // callback(result);
        });
    });
};

module.exports.addUrine = function(value, id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query =
            'UPDATE tbl_urine SET value = ?, update_date = now(), count = count + 1 WHERE id = ?';
        connection.query(query, [value, id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
            // callback(result);
        });
    });
};

module.exports.addTemp = function(value, id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query =
            'UPDATE tbl_temp SET value = ?, update_date = now(), count = count + 1 WHERE id = ?';
        connection.query(query, [value, id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
            // callback(result);
        });
    });
};

module.exports.addRinger = function(value, id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query =
            'UPDATE tbl_ringer SET value = ?, update_date = now(), count = count + 1 WHERE id = ?';
        connection.query(query, [value, id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
            // callback(result);
        });
    });
};
