const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/test'), {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for notes
const NoteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  file: String
});

const Note = mongoose.model('Note', NoteSchema);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

// Route for uploading notes
app.post('/upload', upload.single('file'), async (req, res) => {
  const { title, subject } = req.body;
  const file = req.file.filename;
  
  try {
    const newNote = new Note({
      title,
      subject,
      file
    });
    await newNote.save();
    res.send('Note uploaded successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route for downloading notes
app.get('/download/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).send('Note not found');
    }
    const filePath = path.join(__dirname, 'uploads', note.file);
    res.download(filePath);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.use(express.static('public'));
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
