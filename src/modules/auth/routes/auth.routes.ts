import { Router } from "express";
import { loginController, registerDoctorController, registerPatientController } from "../controllers/auth.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post('/login', loginController)
router.post('/register-biochemist', registerDoctorController)
router.post('/register-patient', registerPatientController)

// Ruta protegida de prueba para devolver el usuario autenticado
router.get('/me', authMiddleware, (req, res) => {
    return res.json({ success: true, user: req.user });
});

export default router