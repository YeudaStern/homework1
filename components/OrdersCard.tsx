import { IoMdClose } from "react-icons/io"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FaPrint } from "react-icons/fa"
import { OrderInterfase } from "./OrderTable"
import { Checkbox } from "./ui/checkbox"
import { useRouter } from "next/navigation"

interface OrdersCardInterface {
    selectedOrder: OrderInterfase
    handleCloseCard: () => void
}

function OrdersCard({ selectedOrder, handleCloseCard }: OrdersCardInterface) {

    const route = useRouter()

    return (
        <div className="flex flex-row-reverse justify-between w-full max-sm:p-4">
            <div className="sm:w-[80%] border rounded-md">
                <div className="flex-row-reverse justify-between p-4 hidden sm:flex">
                    <div className="flex flex-row-reverse items-center ">
                        <Button className="bg-slate-100 hover:bg-slate-300 text-black">הזמנה חוזרת</Button>
                        <FaPrint className="ml-3 text-slate-500" onClick={() => route.push("/add")} />
                    </div>
                    <div className="sm:flex hidden flex-row-reverse">
                        <p className={`h-6 px-2 rounded-md ${selectedOrder.status === "מאושר" ? "bg-blue-200 text-blue-500" : "bg-green-200 text-green-500"} ${selectedOrder.status === "ממתין לאישור" ? "bg-red-100 text-red-400" : ""}`}>{selectedOrder.status}</p>
                        <p className="overflow-hidden w-20 mx-2 whitespace-nowrap hover:whitespace-normal hover:w-[150px] ">
                            מאוד מאוד ארוכה...
                        </p>
                        <h1 className="max-sm:hidden"> שם ההזמנה:</h1>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-between">
                    <div></div>
                    <div className="sm:flex hidden flex-row-reverse">
                        <Button variant="ghost" className="border border-green-700 text-green-700 mx-1">
                            פרטי הזמנה
                        </Button>
                        <Button variant="ghost" className="border border-black">
                            רשימת פריטים
                        </Button>
                        <Input type="search" className="mx-3" />
                    </div>
                </div>
                <div className="w-full justify-start flex p-3 pt-6">
                    <div>
                        <div className="text-sm font-semibold border-green-500 border-b-2 mb-4 sm:hidden block">
                            רשימת פריטים
                        </div>
                        <p className="mb-2">תאריך הספקה</p>
                        <p className="mb-2">דחיפות</p>
                        <p className="mb-2">סניף</p>
                        <p className="mb-2">סוג הזמנה</p>
                        <p className="mb-2">תאריך יצירה</p>
                        <p className="mb-2">שעת יצירה</p>
                        <p className="mb-2">הערות</p>
                    </div>
                    <div className="mx-10 text-sm sm:text-base">
                        <div className="text-sm  font-semibold mb-6 sm:hidden block">
                            פרטי ההזמנה
                        </div>
                        <p className="mb-8 sm:mb-2"><strong>{selectedOrder.date}</strong></p>
                        <p className={`mb-3 sm:mb-2 ${selectedOrder.urgency === "רגילה" ? "text-green-500 " : "text-red-500"} ${selectedOrder.urgency === "נמוכה" ? "text-blue-400" : ""}`}><strong>{selectedOrder.urgency}</strong></p>
                        <p className="mb-3 sm:mb-2"><strong>{selectedOrder.branch}</strong></p>
                        <p className="mb-3 sm:mb-2"><strong>{selectedOrder.order_type == null ? "לא זמין סוג הזמנה" : selectedOrder.order_type}</strong></p>
                        <p className="mb-2  sm:mb-2"><strong>{selectedOrder.created_at}</strong></p>
                        <p className="mb-4  sm:mb-2"><strong>{selectedOrder.time}</strong></p>
                        <p className="mb-4  sm:mb-2 break-all"><strong>
                            {selectedOrder.notes == "" ? "אין הערות בינתיים" : selectedOrder.notes}
                        </strong></p>
                    </div>

                </div>
                <div className="w-full flex justify-end"> <Button variant="outline" className="m-3" onClick={handleCloseCard}>סגור כרטיס</Button></div>
            </div>
            <div className="w-[20%] ml-5 max-sm:hidden">
                <div className="rounded-md w-full bg-green-300 border-green-600 border-2">
                    <div >
                        <div className="flex flex-row-reverse text-center items-center justify-between">
                            <div className=" p-2 text-green-600">
                                <button> <IoMdClose /></button>

                            </div>
                            <div className="flex flex-row-reverse items-center space-x-2 h-14 p-3">
                                <div className="flex justify-between w-full">
                                    <label
                                        htmlFor="terms"
                                        className="font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        שם ההזמנה ארוכה
                                        <p className="flex flex-row-reverse  justify-end text-xs">{selectedOrder.order_id}</p>
                                    </label>
                                </div>
                                <Checkbox id="terms" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersCard
