import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    isFavorite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Note', noteSchema);
