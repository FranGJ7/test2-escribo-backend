import 'dotenv/config'

const secret = process.env.SECRETKEY

const jwt = require('jsonwebtoken');


const verificaToken = (req, res, next) => {
  const token = req.header('Authorization');

   if (!token) return res.status(401).json({ message: 'Token não fornecido' });
 
   jwt.verify(token, secret, (err, decoded) => {
    console.log(err)
    if (err) return res.status(403).json({ message: 'Token inválido' });
  
    req.userId = decoded.id;

    next();
  });
}

export default verificaToken;
