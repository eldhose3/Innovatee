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

    // Validate index
    if (index < 0 || index >= submissions.length) {
      return res.status(400).json({ message: 'Invalid index' });
    }

    // Remove item
    submissions.splice(index, 1);

    // Write updated data
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    return res.status(200).json({ message: 'Submission deleted' });
  } catch (error) {
    console.error('Delete error:', error);
    return res.status(500).json({ message: 'Failed to delete submission' });
  }
}
