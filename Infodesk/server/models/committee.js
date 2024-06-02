import mongoose from "mongoose";

const committeeSchema = mongoose.Schema({
    committee: {
        type: String,
        required: true,
    },
    committeeCode: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model("committee", committeeSchema);