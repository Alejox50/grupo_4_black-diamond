const {signUpBodyValidation} = require('../utils/validationSchema');

async function verifyContentRegister(req,res,next)
{
    const { error } = signUpBodyValidation(req.body);
    if (error) {
        return res
                .status(400)
                .json({ error: true, message: error.details});
    }else
    {
        return next();
    }
}
module.exports= {
    verifyContentRegister,
};
