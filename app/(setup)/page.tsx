import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import InitialModel from "@/components/models/Initial-model";

const SetupPage = async () => {
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where:{
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (server) {
        return redirect(`/server/${server.id}`);
    }

    return (  
        <InitialModel />
    );
}
 
export default SetupPage;