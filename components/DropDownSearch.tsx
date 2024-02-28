"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuSearch() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline">סינון</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10">
        <DropdownMenuLabel className="flex justify-end">אפשרויות</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          className="flex justify-end"
        >
        מחיר
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          className="flex justify-end"
        >
         תאריך
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
          className="flex justify-end"
        >
        סטטוס
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
