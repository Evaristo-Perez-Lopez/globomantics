// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      address: "1234 Main St",
      price: 100000,
      country: "USA",
      id: 1,
    },
    {
      address: "Manhattan Ave",
      price: 200000,
      country: "France",
      id: 2,
    },
    {
      address: "Her Ave",
      price: 4652,
      country: "MX",
      id: 3,
    },
  ]);
}
