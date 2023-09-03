"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useModel } from "@/hooks/use-model-store";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export const LeaveServereModel = () => {
    const { isOpen, onClose, type, data } = useModel();
    const router = useRouter();
    const {server} = data;
    const isModelOpen = isOpen && type === "leaveServer";
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        try {
            setIsLoading(true);
            await axios.patch(`/api/servers/${server?.id}/leave`);
            router.refresh();
            onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (  
        <Dialog open={ isModelOpen } onOpenChange={ onClose }>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Leave Server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Are you sure you want to leave <span className="font-semibold text-zinc-400">{server?.name} server</span> ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between w-full">
                        <Button
                            disabled={ isLoading }
                            onClick={ onClose }
                            variant="ghost"
                        >
                            Cancle
                        </Button>
                        <Button
                            disabled={ isLoading }
                            variant="primary"
                            onClick={onClick}
                        >
                            Leave
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
 