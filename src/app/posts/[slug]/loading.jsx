import {skeleton} from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Loading() {
        return (
        <MaxWidthWrapper>
            <skeleton className="h-[500px] w-full"></skeleton>
        </MaxWidthWrapper>
    )}
