import Index from "../../pages/Index/Index";
import Auth from "../../pages/Auth/Auth";
import Tickets from "../../pages/Tickets/Tickets"
import Ticket from "../../pages/Ticket/Ticket"
import Page404 from "../../pages/NotFOund/Page404";

export const routes = [
    {
        id: "098789",
        path: index,
        ellement: <Index />,
    },
    {
        id: "0987894",
        path: "/auth",
        ellement: <Auth />,
    },
    {
        id: "0989",
        path: "/tickets",
        ellement: <Tickets />,
    },
    {
        id: "09874229",
        path: "/tickets/:id",
        ellement: <Ticket />,
    },
    {
        id: "098789578",
        path: "*",
        ellement: <Page404 />,
    }

]