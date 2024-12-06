import UserForm from "@/components/UserForm";
import DataTableSimple from "@/app/users/data-table-simple";
import prisma from "@/prisma/db";

const Users =  async () => {

    const user = await prisma.user.findMany()
    return (
        <div>
            <UserForm />
            <DataTableSimple users={user} />
        </div>
    );
};

export default Users;