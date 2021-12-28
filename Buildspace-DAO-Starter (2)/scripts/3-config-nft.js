import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC6c6508e8bda83504a3A45F1A785f5C8E6F0bf04",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Unicorn Pink",
        description: "This NFT will give you access to UnicornDAO!",
        image: readFileSync("scripts/assets/unicorn.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()