"use client"

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, Server } from "@prisma/client"
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronDownCircleIcon, LogOut, PlusCircle, Settings, Trash, Trash2, User, UserPlus } from "lucide-react";
import { useModel } from "@/hooks/use-model-store";

interface ServerSidebarProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
};

export const ServerHeader = ({
    server,
    role
}: {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}) => {
    const { onOpen } = useModel();
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="focus:outline-none"
                asChild
            >
                <button
                    className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
                >
                    {server.name}
                    <ChevronDown className="h-5 w-5 ml-auto"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-500 space-y-[2px]">
                {isModerator && (
                    <DropdownMenuItem onClick={() => onOpen("invite", { server })} className="text-indigo-800 dark:text-indigo-300 px-3 py-2 text-sm cursor-pointer">
                        Invite people
                        <UserPlus className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isAdmin && (
                    <DropdownMenuItem onClick={() => onOpen("editServer", { server })} className="px-3 py-2 text-sm cursor-pointer">
                        Server settings
                        <Settings className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isAdmin && (
                    <DropdownMenuItem onClick={() => onOpen("members", { server })} className="px-3 py-2 text-sm cursor-pointer">
                        Manage members
                        <User className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem onClick={() => onOpen("createChannel", { server })} className="px-3 py-2 text-sm cursor-pointer">
                        Create channel
                        <PlusCircle className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuSeparator />
                )}
                {isAdmin && (
                    <DropdownMenuItem onClick={() => onOpen("deleteServer", { server })} className="text-rose-500 px-3 py-2 text-sm cursor-pointer">
                        Delete server
                        <Trash2 className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {!isAdmin && (
                    <DropdownMenuItem onClick={() => onOpen("leaveServer", { server })} className="text-rose-500 px-3 py-2 text-sm cursor-pointer">
                        Leave server
                        <LogOut className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}