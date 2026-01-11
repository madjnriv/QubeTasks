import dotenv from "dotenv";
import mongoose from "mongoose";
import UserModel from "../models/user-model.js";

dotenv.config({ path: "../.env" });

const MONGO_URI = process.env.MONGODB_URI;

async function migrateUsersToHaveUsername() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Find users without username
    const users = await UserModel.find({
      $or: [
        { username: { $exists: false } },
        { username: null },
        { username: "" },
      ],
    }).lean(); // lean() = faster + plain JS objects

    console.log(`🔍 Found ${users.length} users to migrate`);

    const usedUsernames = new Set();

    // Pre-collect existing usernames to avoid collisions
    const existing = await UserModel.find({ username: { $ne: null } })
      .select("username")
      .lean();

    existing.forEach((u) => {
      if (u.username) usedUsernames.add(u.username);
    });

    for (const user of users) {
      let base = generateBaseUsername(user.name);

      // If base is too short, we'll need more digits
      let needDigits = Math.max(2, 6 - base.length);
      let maxDigits = Math.min(4, 10 - base.length);

      let username = base;
      let attempts = 0;
      const MAX_ATTEMPTS = 30;

      while (usedUsernames.has(username) && attempts < MAX_ATTEMPTS) {
        const digitsCount =
          Math.floor(Math.random() * (maxDigits - needDigits + 1)) + needDigits;
        const randomSuffix = Math.floor(
          Math.random() * Math.pow(10, digitsCount)
        )
          .toString()
          .padStart(digitsCount, "0");

        username = base + randomSuffix;
        attempts++;
      }

      if (attempts >= MAX_ATTEMPTS) {
        console.warn(
          `⚠️  Could not find unique username for ${user._id} after ${MAX_ATTEMPTS} tries`
        );
        // Fallback - very rare case
        username = `u${user._id.toString().slice(-6)}`;
      }

      // Update user
      await UserModel.updateOne({ _id: user._id }, { $set: { username } });

      usedUsernames.add(username);

      console.log(`✅ ${user._id} → ${username}`);
    }

    console.log("🎉 Migration completed");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

function generateBaseUsername(fullName) {
  if (!fullName || typeof fullName !== "string") {
    return "user";
  }

  const cleaned = fullName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove special chars except space
    .replace(/\s+/g, " "); // normalize spaces

  const parts = cleaned.split(" ").filter(Boolean);

  if (parts.length === 0) return "user";

  const firstName = parts[0];

  let result = firstName;

  // Add first letter of last name if exists
  if (parts.length >= 2) {
    result += parts[parts.length - 1][0] || "";
  }

  // Limit base length so we have space for digits
  return result.slice(0, 8);
}

// Run migration
migrateUsersToHaveUsername();
