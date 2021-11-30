import { Switch, Route } from "react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { MenuItems } from "./menu-items"
import {About, Smile, Merch, Comment} from "./pages"

export const Content = () => {
    return (
    <Switch>
        <Route path="/hap">
            <Smile />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/comment">
            <Comment />
        </Route>
        <Route path="/merrrch">
            <Merch />
        </Route>
        <Route exact path="/">
            <MenuItems />
        </Route>
        <Route path="/">
            <Redirect to="/"/>
        </Route>
    </Switch>)
}
