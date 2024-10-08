import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoRoute from '../routerPages/TodoRoute';
import CountdownRoute from '../routerPages/CountdownRoute'
const RouterLearn = () => {

    return (
        <div>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to='/todo'>Todo wala compoment</Link>
                        </li>
                        <li>
                            <Link to='/count'>count wala compoment</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/todo" element={<TodoRoute />}></Route>
                    <Route path="/count" element={<CountdownRoute />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterLearn;