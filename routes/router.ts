import { Router, Request, Response } from "express";
export const router = Router();
import fs from "fs";
import path from "path";

const dataFilePath = path.join(__dirname, "../UserMens.json");

const leerDatos = (): any[] => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al leer los datos:", error);
    return [];
  }
};

// Ruta para manejar la raíz del servidor
router.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido al servidor de mensajes");
});

router.get("/mensajes", (req: Request, res: Response) => {
  const datos = leerDatos();
  res.json(datos);
});
