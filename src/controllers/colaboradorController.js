import { Colaborador } from "../models/colaboradorModel.js";

export const createColaborador = async (req, res) => {
    try {
        const { nombre, apellido, direccion, edad, profesion, estadoCivil } = req.body;
        console.log(edad, "nombe")
        const colaborador = await Colaborador.create({ nombre, apellido, direccion, edad, profesion, estadoCivil});
        return res.status(201).json({ message: 'Colaborador creado', colaborador});
    } catch (error) {
        console.log("error", error)
        return res.status(400).json({ message: 'Error al crear colaborador', error});
    }
}