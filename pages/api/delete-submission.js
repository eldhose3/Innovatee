import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { index } = JSON.parse(req.body);
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    const fileData = fs.readFileSync(filePath);
    const submissions = JSON.parse(fileData);

    submissions.splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
