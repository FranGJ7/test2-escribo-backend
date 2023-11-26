const jwt = require('jsonwebtoken');
import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import User from "./models/User";
import verificaToken from "./middlewares/token" 
import 'dotenv/config'

const secret = process.env.SECRETKEY


export const routes = express.Router();


routes.post('/register', async (req, res) => {

  const { name, email, telephone, password, confirmPassword } = req.body

  const id = uuidv4();
  const saltRounds = 10;

  if (password.length < 6 || password.length > 16) return res.status(400).json({ message: 'A senha deve ter entre 6 e 16 caracteres.' });

  if (password !== confirmPassword) return res.status(401).json({ message: 'As senhas não conferem' });
  
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const token = jwt.sign({ id: id }, secret, { expiresIn: '30m' });

  try {
    const user = new User({
      _id: id,
      name: name,
      email: email,
      telephone: telephone,
      password: hashedPassword,
      token: token,
    });

    await user.save();

    const jsonInfoUser = {
      id: user._id,
      createdAt: user.createdAt,
      updateAt: user.updateAt,
      lastLogin: user.lastLogin,
      token: user.token
    };

    return res.status(200).json(jsonInfoUser);

  }catch(err){
    return res.status(409).json({ error: "E-mail já existente" });
  }
})



routes.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) return res.status(401).json({ message: 'Usuário e/ou senha inválidos.' });
  
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) return res.status(401).json({ message: 'Usuário e/ou senha inválidos.' });
  

  try {
    const lastDateLogin = new Date();
    user.lastLogin = lastDateLogin;
    await user.save();

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1m' });

    const jsonInfoUser = {
      id: user._id,
      createdAt: user.createdAt,
      updateAt: user.updateAt,
      lastLogin: lastDateLogin,
      token: token
    };

    return res.status(200).json(jsonInfoUser);

  } catch (err) {
    return res.status(409).json({ error: 'Não atualizou' });
  }

});



routes.get('/auth', verificaToken, async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: 'Não autorizado' });

    return res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });

  } catch (err) {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});




