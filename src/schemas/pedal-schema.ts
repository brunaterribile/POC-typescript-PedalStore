import Joi from 'joi';

export const PedalSchema = Joi.object({
    model: Joi.string().required(),
    brand: Joi.string().required(),
    value: Joi.number().required(),
    quantity: Joi.number().required()
})