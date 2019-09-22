import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      password_hash: '123456',
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.send(`Erro: ${error}`);
  }
});

export default routes;
