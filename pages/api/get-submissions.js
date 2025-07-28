import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'submissions.json');

  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(fileData);
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Failed to read submissions:', error);
    res.status(500).json({ message: 'Failed to load submissions' });
  }
}
