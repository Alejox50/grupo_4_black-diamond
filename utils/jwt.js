const jwt = require('jsonwebtoken');

const generateTokens = async (user) => {
    try {
        const payload = { id: user.idUser, userName: user.Nombres};
        const accessToken = jwt.sign(
            payload,
            "it's secret",
            { expiresIn: "14m" }
        );
        const refreshToken = jwt.sign(
            payload,
            "it's secret",
            { expiresIn: "30d" }
        );
        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
};
module.exports= {
    generateTokens,
};
