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

export const getColaborador = async (req, res) => {
    try {
        const { id } = req.params;

        const colaborador = await Colaborador.findByPk(id);

        if (!colaborador) {
            return res.status(404).json({ message: 'Colaborador no encontrado'});
        }

        return res.status(200).json({ colaborador })
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener colaborador'})
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

export const nivelRiesgoColaborador = async (req, res) => {
    try {
        const { id } = req.params;
        const colaborador = await Colaborador.findByPk(id);

        if (!colaborador) {
            return res.status(404).json({ message: 'Colaborador no encontrado' });
        }

        const edad = colaborador.edad;

        if (edad < 18 && edad >= 1) {
            return res.status(200).json({ message: 'SIN MEDIDAS'});
        } else if (edad >= 18 && edad <= 25) {
            return res.status(200).json({ message: 'FUERA DE PELIGRO'});
        } else if (edad >= 26 && edad <=50) {
            return res.status(200).json({ message: 'TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENCIÓN'});
        } else if (edad >= 51) {
            return res.status(200).json({ message: 'POR FAVOR QUÉDESE EN CASA'});
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el nivel de riesgo del colaborador'})
    }
}