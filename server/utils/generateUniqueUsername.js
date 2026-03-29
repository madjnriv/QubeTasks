import UserModel from "../models/user-model";

const generateUniqueUsername = async (fullName) => {
  const base = (fullName || "user")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 8);

  let username = base;
  let isUnique = false;
  let attempts = 0;

  while (!isUnique && attempts < 10) {
    const existing = await UserModel.findOne({ username });
    if (!existing) {
      isUnique = true;
    } else {
      // Add random 3-digit suffix if base is taken
      const suffix = Math.floor(100 + Math.random() * 900);
      username = `${base}${suffix}`;
      attempts++;
    }
  }

  // Final fallback to prevent duplicates if loop fails
  return isUnique ? username : `${base}${Date.now().toString().slice(-4)}`;
};

export default generateUniqueUsername;
