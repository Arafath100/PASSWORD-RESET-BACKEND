const avatar = require('../Models/avatarModel');

exports.getAllAvatars = async (req, res) => {
  try {
    // Fetch all avatar details from the database
    const avatars = await avatar.find();

    res.status(200).json({ avatars });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error });
    console.log(error);
  }
};
