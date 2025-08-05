// /pages/api/delete.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { index } = req.body;
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(fileData);

    if (index < 0 || index >= submissions.length) {
      return res.status(400).json({ message: 'Invalid index' });
    }

    submissions.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    res.status(200).json({ message: 'Idea deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
