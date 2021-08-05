import { Router } from "express";
import { MsjController } from "../controller/MsjController";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/jwt";

const router = Router();
//creaate new messagge
router.post('/', MsjController.newMsj);
//Find messagge by sender
router.get('/sender/:sender',  MsjController.getBySender);
router.get('/adressee/:addressee',  MsjController.getByaddressee);


export default router;