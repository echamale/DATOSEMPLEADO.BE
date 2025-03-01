import { Colaborador } from "../models/colaboradorModel.js";

export const createColaborador = async (req, res) => {
    try {
        const { nombre, apellido, direccion, edad, profesion, estadoCivil } = req.body;

        const colaborador = await Colaborador.create({ nombre, apellido, direccion, edad, profesion, estadoCivil});

        return res.status(201).json({ message: 'Colaborador creado', colaborador});
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessages = error.errors.map(err => err.message);
            return res.status(400).json({
                message: "Error al crear colaborador",
                errors: errorMessages
            });
        }
    }
}

export const getColaboradores = async (req, res) => {
    try {
        const colaboradores = await Colaborador.findAll();
        return res.status(200).json(colaboradores);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los colaboradores' })
    }
}

export const updateColaborador = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, direccion, edad, profesion, estadoCivil } = req.body;

        const colaborador = await Colaborador.findByPk(id);

        if(!colaborador) {
            return res.status(404).json({ message: 'Colaborador no encontrado' });
        }

        await colaborador.update({ nombre, apellido, direccion, edad, profesion, estadoCivil });
        return res.status(200).json({ message: 'Colaborador actualizado', colaborador});
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessages = error.errors.map(err => err.message);
            return res.status(400).json({
                message: "Error al actualizar colaborador",
                errors: errorMessages
            });
        }
    }
}

export const deleteColaborador = async (req, res) => {
    try {
        const { id } = req.params;
        const colaborador = await Colaborador.findByPk(id);

        if (!colaborador) {
            return res.status(404).json({ message: 'Colaborador no encontrado' });
        }

        await colaborador.destroy();
        
        return res.status(200).json({ message: 'Colaborador eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el colaborador' });
    }
}