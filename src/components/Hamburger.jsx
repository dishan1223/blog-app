import { cn } from "@/lib/utils"
import Link from 'next/link';
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
            {/*<SheetTitle>Are you absolutely sure?</SheetTitle>*/}
            <SheetDescription>
                <div className='mt-10 text-slate-950 dark:text-slate-100'>
                  <ul className=" font-bold text-2xl space-y-4">
                    <li className='active:text-cyan-400 dark:active:text-orange-400'>
                      <Link href='/'>Home</Link>
                    </li>

                    {/*<li className='active:text-cyan-400 dark:active:text-orange-400'>
                      <Link href='/'>Posts</Link>
                    </li>*/}
                  </ul>
                </div>
            </SheetDescription>
        </SheetHeader>
        </SheetContent>
        </Sheet>
      </div>

    )
}

export default Hamburger;