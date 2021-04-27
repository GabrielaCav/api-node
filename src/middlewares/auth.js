const jwt = require ('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({ error: 'Token não informado'});

    // Verificando o formato do token
    const parts = authHeader.split(' ');

    if (!parts.length === 2)
    return res.status(401).send({ error: 'Erro de token'});

    const [ sheme , token] = parts;

    if (!/^Bearer$/i.test(sheme))
    return res.status(401).send({ error: 'Token mal formado'});

  

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalido'});

        req.userId = decoded.id;
        return next();

    });
};