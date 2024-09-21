import { Route, Routes } from "react-router-dom"
import Layoyt from "../layout/Layoyt"
// import { routes } from "./routerdata"
import Index from "../../pages/Index/Index"
import Auth from "../../pages/Auth/Auth"
import Tickets from "../../pages/Tickets/Tickets"
import Ticket from "../../pages/Ticket/Ticket"
import Page404 from "../../pages/NotFOund/Page404"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element = {<Layoyt />}>
            <Route index element = {<Index />}/>
            <Route path="/auth" element = {<Auth />} />
            <Route path="/tickets" element = {<Tickets />} />
            <Route path="/tickets/:id" element = {<Ticket />} />
            <Route path="*" element = {<Page404 />} />
        </Route>
    </Routes>
  )
}

export default Router 