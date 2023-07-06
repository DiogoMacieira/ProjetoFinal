import express, { Request, Response} from "express";
import authRoutes from "./auth";
import clientesRoutes from "./clientes";
import empregadosRoutes from "./empregados";
import menusRoutes from "./menus";
import produtosRoutes from "./produtos";
import reservasRoutes from "./reservas";
import {name , version} from "../../package.json"
const router = express.Router();

router.get("/", (req:Request,res:Response)=> {
    res.json({
    name,
    version
})
});

router.use("/auth",authRoutes)
router.use("/clientes", clientesRoutes);
router.use("/empregados", empregadosRoutes);
router.use("/menus", menusRoutes);
router.use("/produtos", produtosRoutes);
router.use("/reservas", reservasRoutes);
export default router;