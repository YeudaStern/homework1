import prisma from "@/libs/prismadb";
import HomePage from "./HomePage";



export default async function Home() {

  const orders = await prisma.order.findMany({
    orderBy: {
      id: "asc"
    }
  })

  return (
    <HomePage orders={orders as any}/>
  )
}