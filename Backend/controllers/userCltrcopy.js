const userCltr={}


userCltr.getUser = async (req, res) => {
  try {
    let userData = await user.find();
    return res.status(200).json({
      userData,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

userCltr.createUser = async (req, res) => {
  try {
    let newUser = await user.insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      place: req.body.place,
      state: req.body.state,
      address: req.body.address,
    });
    return res.status(200).json({
      newUser,
    });
    console.log("user created");
  } catch (err) {
    console.log("ERROR", err);
  }
};

userCltr.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const addUser = await user.findByIdAndUpdate(userId, {
      name: req.body.name,
      // email: req.body.email,
      // password: req.body.password,
      phone: req.body.phone,
      place: req.body.place,
      state: req.body.state,
      address: req.body.address,
    });
    return res.status(200).json({
      addUser,
    });
    console.log("user updated");
  } catch (err) {
    console.log("ERROR", err);
  }
};

userCltr.deleteUser = async (req, res) => {
  try {
    const deleteId = req.params.deleteId;
    let removeUser = await user.findByIdAndDelete(deleteId, {});
    return res.status(200).json({
      message: "User data removed ",
    });
    console.log("user deleted");
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = userCltr
//this way or writing your controllers would be better and efficient
// do not user module.exports multiple only last exports will be exported the rest wont so export the way it is commented