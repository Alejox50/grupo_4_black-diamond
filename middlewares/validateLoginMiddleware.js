const {logInBodyValidation} = require('../utils/validationSchema');

async function verifyContentLogIn(req,res,next)
{
    const { error } = logInBodyValidation(req.body);
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
    verifyContentLogIn,
};