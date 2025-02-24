import { cn } from "@/lib/utils"
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Hamburger = ({className}) => {
    return (
      <div className={cn(className)}>
        <Sheet>
        <SheetTrigger><Menu/></SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
        </SheetHeader>
        </SheetContent>
        </Sheet>
      </div>

    )
}

export default Hamburger;