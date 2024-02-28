import { FormAddNewOrder } from "@/components/ui/FormAddNewOrder"
import prisma from "@/libs/prismadb";

async function page() {

  // const neworder = {
  //   order_id: 7343,
  //   date: "2024-02-27",
  //   time: "23:59",
  //   notes: "",
  //   prediction: false,
  //   branch: "מטבח מרכזי",
  //   brunch_id: 1,
  //   order_type: "example1",
  //   event_id: null,
  //   recurrence: 5,
  //   customer: "אליהו הנביא",
  //   customer_id: 1,
  //   num_of_guests: null,
  //   source: "הוקלד ידנית",
  //   created_at: "17/01/2024 12:47",
  //   updated_at: "17/01/2024 12:47",
  //   status: "ממתין לאישור",
  //   urgency: "נמוכה",
  // };




  // const post = await prisma.order.create({
  //   data: neworder,
  // });

  // console.log(post)




  return (
    <div>
      <FormAddNewOrder />
    </div>
  )
}

export default page
