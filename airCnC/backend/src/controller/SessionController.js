const User = require("../model/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let userExist = await User.findOne({ email });

    if (userExist) {
      return res.json(userExist);
    }

    const user = await User.create({ email });

    return res.json(user);
  }
};
