var pool = require('../services/database').pool;

module.exports.welltag = function(callback){
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err);
            callback(false);
            return
        }
        var query = 'select * from tbl_welltag_data'
        connection.query(query, [], function(err, result){
            connection.release();

            if(err){
                console.log(err)
                callback(false);
                return;
            }

            callback(result)
        })
    })
}
module.exports.deleteWelltag = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'DELETE FROM tbl_welltag_data WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
        });
    });
};

module.exports.addWelltag = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'INSERT INTO tbl_welltag_data (id, reg_date) VALUES (?, now())';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(result);
        });
    });
};

// humi
module.exports.humi = function(callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT * FROM tbl_humi';
        connection.query(query, [], function(err, result) {
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

module.exports.deleteHumi = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'DELETE FROM tbl_humi WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
        });
    });
};

module.exports.addHumi = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'INSERT INTO tbl_humi (id, reg_date) VALUES (?, now())';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(result);
        });
    });
};

// temp
module.exports.temp = function(callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT * FROM tbl_temp';
        connection.query(query, [], function(err, result) {
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

module.exports.deleteTemp = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'DELETE FROM tbl_temp WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
        });
    });
};

module.exports.addTemp = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }

        var query = 'INSERT INTO tbl_temp (id, reg_date) VALUES (?, now())';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(result);
        });
    });
};

// urine
module.exports.urine = function(callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT * FROM tbl_urine';
        connection.query(query, [], function(err, result) {
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

module.exports.deleteUrine = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'DELETE FROM tbl_urine WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
        });
    });
};

module.exports.addUrine = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }

        var query = 'INSERT INTO tbl_urine (id, reg_date) VALUES (?, now())';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(result);
        });
    });
};

// ringer
module.exports.ringer = function(callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'SELECT * FROM tbl_ringer';
        connection.query(query, [], function(err, result) {
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

module.exports.deleteRinger = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        var query = 'DELETE FROM tbl_ringer WHERE id = ?';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(true);
        });
    });
};

module.exports.addRinger = function(id, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(false);
            return;
        }
        
        var query = 'INSERT INTO tbl_ringer (id, reg_date) VALUES (?, now())';
        connection.query(query, [id], function(err, result) {
            connection.release();

            if (err) {
                console.log(err);
                callback(false);
                return;
            }

            callback(result);
        });
    });
};
