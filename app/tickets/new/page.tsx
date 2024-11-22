import dynamic from "next/dynamic";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
    ssr: false,
});

const newTicket = () => {
    return (
        <div>
            <TicketForm />
        </div>
    );
};

export default newTicket;

