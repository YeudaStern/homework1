'use client'

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import OrdersCard from "./OrdersCard";
import { Skeleton } from "./ui/skeleton";
import MobileRowTable from "./MobileRowTable";
import { FiChevronLeft } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface OrderInterfase {
    order_id: number;
    time: string;
    branch: string;
    brunch_id: number | null
    status: string;
    customer: string;
    customer_id?: number;
    date: string;
    urgency: string;
    notes: string;
    created_at: string;
    updated_at: string;
    num_of_guests: number | null;
    order_type: string | null;
    prediction: boolean;
    event_id: string | null;
    recurrence: number | null
    source: string;
}

interface OrderTableInterface {
    orders: OrderInterfase[];
}


export function OrderTable({ orders }: OrderTableInterface) {

    const [selectedOrder, setSelectedOrder] = useState<OrderInterfase | null>(null);
    const [loading, setLoading] = useState(true);

    const handleRowClick = (orders: OrderInterfase) => {
        setSelectedOrder(orders);
    };

    const handleCloseCard = () => {
        setSelectedOrder(null);
    };

    useEffect(() => {
        if (orders && orders.length > 0) {
            setLoading(false)
        }
    }, [orders]);

    return (
        <div className="md:p-10 ">
            {selectedOrder ? (
                <OrdersCard handleCloseCard={handleCloseCard} selectedOrder={selectedOrder} />
            ) : (
                <Table className="border-t border-b mb-2 border-slate-300 sm:border-0">
                    <TableHeader className="max-sm:hidden">
                        <TableRow className="bg-slate-200 text-start">
                            <TableHead className="sm:w-16 max-sm:!max-w-6 max-sm:!p-0 flex items-center justify-center"><Checkbox /></TableHead>
                            <TableHead >הזמנה</TableHead>
                            <TableHead className="flex items-center">סטטוס <FiChevronLeft className="mx-1" /></TableHead>
                            <TableHead className="">סניף</TableHead>
                            <TableHead className="">מספר אורחים</TableHead>
                            <TableHead className="">תאריך</TableHead>
                            <TableHead className="">שעה</TableHead>
                            <TableHead className="w-[100px] ">נוצר ב:</TableHead>
                            <TableHead className="w-[100px] ">עודכן ב:</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? Array.from({ length: 6 }).map((_, i) => (
                            <tr className="w-full max-sm:hidden" key={i}>
                                {Array.from({ length: 8 }).map((_, j) => (
                                    <td key={j} className="p-4">
                                        <Skeleton className="h-4 w-full rounded-xl" />
                                    </td>
                                ))}
                            </tr>
                        )) : orders.map((order) => {
                            return (
                                <TableRow
                                    className=" items-center"
                                    key={order.order_id}
                                    onClick={() => handleRowClick(order)}
                                >
                                    <TableCell className="max-sm:!w-10 max-sm:!p-0 sm:mt-2 mt-6 pr-3 sm:w-16 flex items-center justify-center text-center ">
                                        <Checkbox className="p-0" onClick={(e) => e.stopPropagation()} />
                                    </TableCell>
                                    <TableCell className="max-sm:p-1">
                                        <div className="max-sm:hidden text-right font-semibold">{order.customer}</div>
                                        <div className="text-xs max-sm:hidden text-slate-500">{order.order_id}</div>
                                        <div className="sm:hidden">
                                            <MobileRowTable order={order} />
                                        </div>
                                    </TableCell>
                                    <TableCell className={cn("mb-2 max-sm:hidden", {
                                        "text-orange-500": order.status === "ממתין לאישור",
                                        "text-green-500 w-12": order.status === "מאושר",
                                        "w-12": order.status === "מאושר",
                                    })}>
                                        <p className={cn("mb-2 text-black rounded-md text-center max-sm:hidden", {
                                            "bg-red-200 text-red-500 w-24": order.status === "ממתין לאישור",
                                            "bg-blue-200 text-blue-500 w-12": order.status === "מאושר",
                                            "bg-green-200 text-green-500 w-12": order.status === "בוצע",
                                        })}>{order.status}</p>
                                    </TableCell>                                    <TableCell className="max-sm:hidden">{order.branch}</TableCell>
                                    <TableCell className="max-sm:hidden">{order.num_of_guests}</TableCell>
                                    <TableCell className="max-sm:hidden">{order.created_at}</TableCell>
                                    <TableCell className="max-sm:hidden">{order.time}</TableCell>
                                    <TableCell className="text-xs max-sm:hidden">{order.updated_at}</TableCell>
                                    <TableCell className="text-xs max-sm:hidden">{order.created_at}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}