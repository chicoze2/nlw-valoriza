import {request, Router} from "express"

import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from './controllers/CreateTagController';
import { verificarAdmin } from "./middlewares/verificarAdmin";
import { verificarAutenticacao } from "./middlewares/verificarAutenticacao";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateElogioController} from './controllers/CreateElogioController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createElogioController = new CreateElogioController();


router.post("/users", createUserController.handle);
router.post('/tags', verificarAutenticacao, verificarAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post("/elogios", verificarAutenticacao, createElogioController.handle)

export { router }