'use client'


import NavSearch from "@/components/NavSearch"
import { OrderInterfase, OrderTable } from "@/components/OrderTable"
import { useState } from "react"

interface HomePageInterface {
    orders: OrderInterfase[]
}

function HomePage({ orders }: HomePageInterface) {

    const [filtredOrders, setFiltredOrders] = useState(orders)

    return (
        <>
            <div className="flex md:p-10" >
                <NavSearch allOrders={orders} setFiltredOrders={setFiltredOrders} />
            </div>
            <OrderTable orders={filtredOrders as any} />
        </>
    )
}

export default HomePage;