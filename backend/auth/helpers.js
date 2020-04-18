const bcrypt = require("bcrypt");

const hashPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(12);
    const password_digest = await bcrypt.hash(password, salt);
    return password_digest;
  } catch (error) {
    console.log("err", error);
  }
};

const comparePasswords = (candidatePassword, passwordDigest) => {
  try {
    const match = bcrypt.compare(candidatePassword, passwordDigest);
    return match;
  } catch (error) {
    console.log("err", error);
  }
};

const loginRequired = (req, res, next) => {
 
  if (req.user) return next()
  res.status(401).json({
    payload: null,
    msg: "Please login to access this route",
    err: true
  })
}

module.exports = {
  hashPassword,
  comparePasswords, 
  loginRequired
};
