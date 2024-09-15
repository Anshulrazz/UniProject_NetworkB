const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  const { name, related_photo, caption, category } = req.body;
  const file = req.file.path;

  try {
    const document = new Document({
      name,
      related_photo,
      caption,
      file,
      category
    });

    await document.save();
    res.status(201).json(document);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.likeDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) return res.status(404).json({ msg: 'Document not found' });

    document.likes += 1;
    await document.save();
    res.json(document);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Implement shareDocument
