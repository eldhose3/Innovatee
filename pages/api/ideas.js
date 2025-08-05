// /pages/api/ideas.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'submissions.json');

  if (!fs.existsSync(filePath)) {
    return res.status(200).json([]);
  }

  const fileData = fs.readFileSync(filePath, 'utf8');
  const submissions = JSON.parse(fileData);

  res.status(200).json(submissions);
}
