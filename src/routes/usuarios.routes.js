import { Router } from "express";
import { createUsuarios, getUsuarios } from "../controllers/usuarios.controller";

const router = Router()

router.get("/usuarios", getUsuarios)

router.post("/usuarios", createUsuarios)

router.get("/usuarios", getUsuarios)

router.delete("/usuarios", getUsuarios)

router.put("/usuarios", getUsuarios)



export default router