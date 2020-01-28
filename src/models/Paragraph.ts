/**
 * @file Defines a schema for the paragraph collection.
 */

import mongoose from "mongoose";

export default mongoose.model(
    "paragraph",
    new mongoose.Schema(
        {
            text: String,
        },
        {
            timestamps: true,
        }
    )
);
