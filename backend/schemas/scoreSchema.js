import Joi from 'joi';

const scoreSchema = Joi.object({
    username: Joi.string().min(3).max(15).required(),
    score: Joi.number().required()
});

export default scoreSchema;