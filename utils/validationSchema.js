const Joi = require('joi');
const passwordComplexity= require('joi-password-complexity');

const signUpBodyValidation = (body) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("firstName"),
        lastName: Joi.string().required().label("lastName"),
        userName: Joi.string().required().label("User Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),

    });
    return schema.validate(body);
};

const logInBodyValidation = (body) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(body);
};

module.exports= {
    signUpBodyValidation,
    logInBodyValidation,
};