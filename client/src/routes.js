import {Provider} from "react-redux";
import {Route, Routes} from 'react-router-dom'
import React from 'react'

import {AuthPage} from "./Auth/AuthPage";
import {store} from "./redux";
import AdminPage from "./Admin/AdminPage";
import Basket from "../../client/src/Basket/Basket";
import Category from "../../client/src/Category/Category";
import categoryDessert from "../../client/src/Data/categoryDessert";
import categoryWater from "../../client/src/Data/categoryWater";
import Contacts from "./Information/Contacts";
import EditPizza from "./Admin/EditPizza";
import Help from "./Information/Help";
import Layout from "./Layout/Layout";
import Main from "../../client/src/Main/Main";
import MyMap from "./Information/MyMap";
import Order from "./Order/Order";
import Orders from "./Admin/Orders";
import Pizza from "./Admin/Pizza";
import Products from "../../client/src/Product/Products";
import Quality from "./Information/Quality";
import ThemeContextProvider from "./Layout/Theme/ThemeContext";
import AddPizza from "./Admin/AddPizza";

const apiDrinks = "/api/drink";
const apiDesserts = '/api/dessert';
const apiCombo = '/api/combo';

export const useRoutes = (isAuthenticated, isAdmin) => {
    if (isAdmin) {
        return (
            <ThemeContextProvider>
                <Provider store={store}>
                    <Routes>
                        <Route path="/admin" exact element={<AdminPage children= {<Orders/>}/>}/>
                        <Route path="/admin/pizza" exact element={<AdminPage children= {<Pizza/>}/>}/>
                        <Route path="/admin/edit/:id" exact element={<AdminPage children= {<EditPizza/>}/>}/>
                        <Route path="/admin/add" exact element={<AdminPage children= {<AddPizza/>}/>}/>
                    </Routes>
                </Provider>
            </ThemeContextProvider>
        )
    }

    if (isAuthenticated) {
        return (
            <ThemeContextProvider>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" exact element={<AuthPage/>}/>
                        <Route path="/map" exact element={<Layout children={<MyMap/>}/>}/>
                        <Route path="/contacts" exact element={<Layout children={<Contacts/>}/>}/>
                        <Route path="/quality" exact element={<Layout children={<Quality/>}/>}/>
                        <Route path="/help" exact element={<Layout children={<Help/>}/>}/>
                        <Route path="/basket" exact element={<Layout children={<Basket/>}/>}/>
                        <Route path="/order" exact element={<Layout children={<Order/>}/>}/>
                        <Route path="/main" exact element={<Layout children={<Main/>}/>}/>

                        <Route path="/drinks" exact
                               element={<Layout children={<Category category={categoryWater}/>}/>}/>
                        <Route path="/desserts" exact
                               element={<Layout children={<Category category={categoryDessert}/>}/>}/>

                        <Route path="/beer" exact
                               element={<Layout children={<Products category={"beer"} url={apiDrinks}/>}/>}/>
                        <Route path="/drinks/ice" exact
                               element={<Layout children={<Products category={"ice"} url={apiDrinks}/>}/>}/>
                        <Route path="/drinks/hot" exact
                               element={<Layout children={<Products category={"hot"} url={apiDrinks}/>}/>}/>
                        <Route path="/drinks/milk" exact
                               element={<Layout children={<Products category={"milk"} url={apiDrinks}/>}/>}/>

                        <Route path="/desserts/ice-cream" exact
                               element={<Layout children={<Products category={"ice-cream"} url={apiDesserts}/>}/>}/>
                        <Route path="/desserts/gingerbread" exact
                               element={<Layout children={<Products category={"donut"} url={apiDesserts}/>}/>}/>
                        <Route path="/desserts/cake" exact
                               element={<Layout children={<Products category={"cake"} url={apiDesserts}/>}/>}/>
                        <Route path="/combo" exact
                               element={<Layout children={<Products category={"combo"} url={apiCombo}/>}/>}/>
                    </Routes>
                </Provider>
            </ThemeContextProvider>
        )
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthPage/>}/>
        </Routes>
    )
}