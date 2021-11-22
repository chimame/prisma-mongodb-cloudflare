import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request): Promise<Response> {
  const account = await prisma.accounts.findFirst()
  return new Response(`request method: ${request.method}! ${account ? account.id : ''}!!`)
}
