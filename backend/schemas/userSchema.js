import Joi from 'joi';

const userSchema = Joi.object({
    username: Joi.string().min(3).max(15).required(),

    email: Joi.string().min(3).max(25).required(),

    password: Joi.string().min(10).max(25).required()
});

export default userSchema;