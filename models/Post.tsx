import mongoose, { Document, Schema } from 'mongoose';

interface IPost extends Document {
  title: string;
  author: string;
  date: string;
  content: string;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: true },
});

export const PostModel = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
