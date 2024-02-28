import { Button } from "./ui/button";
import * as React from "react";
import { Input } from "./ui/input";
import { DropdownMenuSearch } from "./DropDownSearch";
import { FaPlus } from "react-icons/fa";
import { OrderInterfase } from "./OrderTable";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { FiSliders } from "react-icons/fi";

interface NavSearchInterface {
    setFiltredOrders: (newOrders: OrderInterfase[]) => void;
    allOrders: OrderInterfase[];
}

function NavSearch({ setFiltredOrders, allOrders }: NavSearchInterface) {

    const ordersFilter = (searchTerm: string) => {
        const filteredOrders = allOrders.filter((order) => {
            return (
                order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.branch.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        setFiltredOrders(filteredOrders);
    };

    const route = useRouter()

    return (
        <div className="w-full">
            <div className="flex flex-row-reverse justify-between">
                <div className="p-3 sm:p-0 flex justify-start sm:justify-end gap-3 w-full items-center">
                    <FaArrowRightLong className="text-slate-500 hidden" />
                    <Button onClick={() => route.push("/add")} className="hidden sm:flex bg-green-500 text-white hover:bg-green-600 gap-2">
                        <FaPlus className="ml-1 " />
                        הוספת הזמנה
                    </Button>
                    <CiMenuKebab className="sm:hidden " />
                    <Button variant="outline" className="bg-green-300 border-green-500 border-2 hover:bg-green-200 hover:border-green-500 gap-2 sm:hidden">

                        כל ההזמנות
                    </Button>
                    <Button variant="outline" className=" sm:hidden gap-2">

                        ספקים
                    </Button>
                    <Button variant="outline" className=" sm:hidden gap-2">

                        ליקוט
                    </Button>
                </div>
                <div className="md:flex hidden sm:block">
                    <div className="relative border rounded-md flex gap-1 items-center px-1 min-w-60">
                        <GoSearch className="w-5 h-5 text-slate-400 mx-2" />
                        <Input
                            className="!border-none !ring-0 h-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                            type="search"
                            onChange={(e) => {
                                ordersFilter(e.target.value);
                            }}
                        />
                    </div>
                    <Input type="date" className="mr-2 focus-visible:ring-0 focus-visible:ring-offset-0" />
                </div>

            </div>
            <div className="flex mb-4 justify-between px-2 m-2 mx-auto items-center border border-slate-200 rounded-md w-[90%] sm:hidden text-slate-500">
                <input
                    type="date"
                    placeholder="Select Date"
                    className="w-full pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden text-right"
                />
                <FiSliders />              
            </div>
            <div className=" justify-start my-2 hidden sm:flex">
                <DropdownMenuSearch />
            </div>
        </div>
    );
}

export default NavSearch;
