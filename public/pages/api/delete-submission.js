import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { index } = req.body;
  const filePath = path.join(process.cwd(), 'data', 'submissions.json');

  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(fileData);

    // Delete item at the given index
    submissions.splice(index, 1);

    // Save updated JSON file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    return res.status(200).json({ message: 'Submission deleted' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}
