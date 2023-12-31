import { ChannelType, Server } from '@prisma/client';
import { create } from 'zustand';

export type ModelType = "createServer" | "invite" | "editServer" | "members" | "createChannel" | "leaveServer" | "deleteServer";

interface ModelData {
    server?: Server;
    channelType?: ChannelType;
}

interface ModelStore {
    type: ModelType | null;
    data: ModelData;
    isOpen: boolean;
    onOpen: (type: ModelType, data?: ModelData) => void;
    onClose: () => void;
}

export const useModel = create<ModelStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ type, isOpen: true, data }),
    onClose: () => set({ type: null, isOpen: false })
}));
