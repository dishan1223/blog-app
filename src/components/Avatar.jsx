"use client";
import { Avatar as ShadAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
    return (
        <ShadAvatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/170223278?s=96&v=4" />
            <AvatarFallback>CN</AvatarFallback>
        </ShadAvatar>
    );
};

export default UserAvatar;
