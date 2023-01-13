export default async (req, res) => {
  const body = JSON.parse(req.body);
  const response = await fetch(
    `https://api-inference.huggingface.co/models/${body.model}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: body.input,
      }),
    }
  );
  res.status(response.status).body(response.body);
}
