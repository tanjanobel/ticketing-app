import UserForm from "@/components/UserForm";
import DataTableSimple from "@/app/users/data-table-simple";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

const Users =  async () => {
    const session = await getServerSession(options);

    if(session?.user.role !== "ADMIN") {
        return <p className="text-destructive">Admin access required.</p>;
    }

    const user = await prisma.user.findMany()

    return (
        <div>
            <UserForm />
            <DataTableSimple users={user} />
        </div>
    );
};

export default Users;