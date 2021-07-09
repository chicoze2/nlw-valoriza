import {request, Router} from "express"

import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from './controllers/CreateTagController';
import { verificarAdmin } from "./middlewares/verificarAdmin";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post('/tags', verificarAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);

export {router};