"use client";

import { CreateServerModel } from "@/components/models/create-server-model";
import { InviteModel } from "@/components/models/invite-model";
import { useEffect, useState } from "react";
import { EditServerModel } from "@/components/models/edit-server-model";
import { MembersModel } from "@/components/models/members-model";
import { CreateChannelModel } from "@/components/models/create-channel-model";
import { LeaveServereModel } from "@/components/models/leave-server-model";
import { DeleteServereModel } from "@/components/models/delete-server-model";

export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <CreateServerModel />
            <InviteModel />
            <EditServerModel />
            <MembersModel />
            <CreateChannelModel />
            <LeaveServereModel />
            <DeleteServereModel />
        </>
    )
}