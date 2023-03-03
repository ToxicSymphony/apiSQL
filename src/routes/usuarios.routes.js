import { Router } from "express";
import { createUsuarios, deleteUsuarioById, getUsuarioById, getUsuarios, updateProductById } from "../controllers/usuarios.controller";

const router = Router()

router.get("/usuarios", getUsuarios)

router.post("/usuarios", createUsuarios)

router.get("/usuarios/:id", getUsuarioById)

router.delete("/usuarios/:id", deleteUsuarioById)

router.put("/usuarios/:id", updateProductById)



export default router