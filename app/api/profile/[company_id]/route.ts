import { sql } from "@vercel/postgres";


// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url)
//     const id = searchParams.get('id')
  
//     const res = await fetch(`./${id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY,
//       },
//     })
//     const product = await res.json()
  
//     return Response.json({ product })
//   }