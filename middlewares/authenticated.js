'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta'

exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'La peticion no tiene la cabacera de autenticación' });
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);
        if (payload.ex <= moment().unix()) {
            return res.status(401).send({ message: 'Token ha expirado' });
        }
    } catch (ex) {
        console.log(ex)
        return res.status(403).send({ message: 'Token no valido' });
    }

    req.user = payload;

    next();
};