import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xb02cd9107a149ef52a047c3fc6309d95cd0466bd",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Kakashi Sharingan Eye",
        description: "This NFT will give you access to AnimeDAO!",
        image: readFileSync("scripts/assets/SharinganEye.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()