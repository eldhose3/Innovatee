export async function POST(req) {
  const { email, password } = await req.json();

  // You can move this to env or a DB later
  const validEmail = 'eldhose@innovate.uk';
  const validPassword = 'Eldhose@34';

  if (email === validEmail && password === validPassword) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { status: 401 });
  }
}
