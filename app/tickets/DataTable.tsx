import { Ticket } from "@prisma/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import TicketPriority from "@/components/TicketPriority";
import Link from "next/link";

interface Props {
    tickets: Ticket[];
}

const DataTable = ({tickets}: Props) => {
    return (
        <div className="w-full mt-5">
            <div className="rounded-md sm:border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Title
                            </TableHead>
                            <TableHead>
                                <div className="flex justify-center">
                                    Status
                                </div>
                            </TableHead>
                            <TableHead>
                                <div className="flex justify-center">
                                    Priority
                                </div>
                            </TableHead>
                            <TableHead>
                                Created At
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets
                            ? tickets.map((ticket) => (
                                <TableRow key={ticket.id} data-href="/">
                                    <TableCell>
                                        <Link href={`/tickets/${ticket.id}`}>
                                            {ticket.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-center">
                                            <TicketStatusBadge status={ticket.status}></TicketStatusBadge>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-center">
                                            <TicketPriority priority={ticket.priority}></TicketPriority>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {ticket.createdAt.toLocaleDateString("de-DE", {
                                            year: "2-digit",
                                            month: "2-digit",
                                            day: "2-digit",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: false,
                                        })}
                                    </TableCell>
                                </TableRow>
                            ))
                            : null
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default DataTable;