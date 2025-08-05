// pages/api/delete.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { index } = req.body;

    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    let data = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath);
      data = JSON.parse(fileData);
    }

    if (index >= 0 && index < data.length) {
      data.splice(index, 1); // delete the item
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      res.status(200).json({ message: 'Deleted successfully' });
    } else {
      res.status(400).json({ message: 'Invalid index' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
