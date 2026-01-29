import Note from './notemodel.js';

// Create note
export const createNote = async (req, res) => {
  const userId = req.user.id;
  const note = await Note.create({ userId });
  res.status(201).json(note);
};

// Get all notes
export const getNotes = async (req, res) => {
  const userId = req.user.id;
  const notes = await Note.find({ userId }).sort({ updatedAt: -1 });
  res.json(notes);
};

// Update note
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true }
  );
  res.json(note);
};

// Delete note
export const deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json({ message: 'Note deleted' });
};
