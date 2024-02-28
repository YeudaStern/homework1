import { IoIosArrowBack } from "react-icons/io"
import { OrderInterfase } from "./OrderTable"
import { cn } from "@/lib/utils"

interface MobileRowInterface {
    order: OrderInterfase
}

function MobileRowTable({ order }: MobileRowInterface) {

    return (
        <div className="w-full flex items-center ">
            <div className="flex flex-col w-full flex-1">
                <div className="flex justify-between w-full">
                    <div className={cn("h-4 px-1 text-xs rounded-md", {
                        "bg-blue-200 text-blue-500": order.status === "מאושר",
                        "bg-red-200 text-red-500": order.status === "ממתין לאישור",
                        "bg-green-100 text-green-400": order.status === "בוצע",
                    })}>{order.status}</div>                    <div className="text-xs">₪ 1,132.82</div>
                </div>
                <div className=" w-full">
                    <div className="font-semibold">{order.customer}</div>
                </div>
                <div className="flex justify-between w-full">
                    <div className="text-xs">מק&quot;ט: {order.order_id.toString().slice(0, 5)}</div>
                    <div className="text-xs">תאריך: {order.date}</div>
                </div>
            </div>
            <div className="flex h-full items-center justify-center !w-12">
                <IoIosArrowBack className="w-4 h-4 text-slate-500" />
            </div>
        </div>

    )
}

export default MobileRowTable
