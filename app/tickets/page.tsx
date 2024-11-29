import prisma from "@/prisma/db";
import DataTable from "@/app/tickets/DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";

const Tickets = async () => {
    const tickets = await prisma.ticket.findMany();

    return (
        <div>
            <Link href="/tickets/new"
                  className={buttonVariants({variang: "default:"})}
            >
                New Ticket
            </Link>
            <DataTable tickets={tickets} />
            <Pagination itemCount={26} pageSize={10} currentPage={3} />
        </div>
    );
};

export default Tickets;