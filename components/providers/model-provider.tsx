"use client";

import { CreateServerModel } from "@/components/models/create-server-model";
import { InviteModel } from "@/components/models/invite-model";
import { useEffect, useState } from "react";
import { EditServerModel } from "@/components/models/edit-server-model";
import { MembersModel } from "@/components/models/members-model";

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
        </>
    )
}