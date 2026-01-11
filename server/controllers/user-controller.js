import bcrypt from "bcryptjs";
import UserModel from "../models/user-model.js";
import imageKit from "../config/imagekit.js";
import fs from "fs";

const getUserProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    delete user.password;

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);

    res.status(500).json({ message: "Server error" });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    console.log("Function started");

    const { name } = req.body;
    const profilePicture = req.file;
    console.log("profile pic", req.file);

    const userExists = await UserModel.exists({ _id: req.user._id });

    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("user checked");

    let profilePictureURL;
    if (profilePicture) {
      const uploadResponse = await imageKit.files.upload({
        file: fs.createReadStream(req.file.path),
        fileName: `avatar_${req.user._id}_${Date.now()}`,
        folder: "/QubeTask/users",
      });

      console.log("image buffered", profilePictureURL);

      profilePictureURL = imageKit.helper.buildSrc({
        src: uploadResponse.url,
        transformation: [
          {
            quality: 80,
            format: "webp",
            width: 128,
            height: 128,
            focus: "auto",
          },
        ],
      });
    }

    console.log("image optimized", profilePictureURL);

    const updateData = {};
    if (name && name.trim()) {
      updateData.name = name.trim();
    }
    if (profilePictureURL) {
      updateData.profilePicture = profilePictureURL;
    }

    // If nothing to update, return early
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data to update" });
    }

    const user = await UserModel.findByIdAndUpdate(req.user._id, updateData, {
      new: true,
      runValidators: true,
    });
    console.log("saved to db");
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user profile:", error);

    res.status(500).json({ message: "Server error" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    const user = await UserModel.findById(req.user._id).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "New password and confirm password do not match" });
    }

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(403).json({ message: "Invalid old password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error changing password:", error);

    res.status(500).json({ message: "Server error" });
  }
};

export { getUserProfile, updateUserProfile, changePassword };
