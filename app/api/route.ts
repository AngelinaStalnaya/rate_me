export async function GET() {

    const comments = [
        {id: 1, com: 'rtgrtg'},
        {id: 2, com: 'juugjmfn'},
]
    
    return new Response(JSON.stringify(comments))
}