const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

const isAuth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authorization;

    if (token) {
      const payload = jwt.verify(token, jwtSecret);

      if (payload) {
        req.user = {
          _id: payload._id,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        };
        next();
      } else {
        res.code = 401;
        throw new Error("Unauthorized");
      }
    } else {
      res.code = 400;
      throw new Error("Token is required");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = isAuth;