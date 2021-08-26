import React from "react";

import Nav from "./components/website/Nav";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./page/404";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import Product from "./page/products";

import Header from "./components/website/Header";
import Footer from "./components/website/Footer";
import Contact from "./page/contact";
import DetailProduct from "./page/detailProduct";
import LayoutWebsite from "./components/layouts/website";
import LayoutAdmin from "./components/layouts/admin";
import ProductManagerPage from "./components/admin/products";
import ProductAddPage from "./components/admin/products/add";
import EditProduct from "./components/admin/products/edit";
import DashboardPage from "./components/admin/dashboard";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";
import PrivateRoute from "./components/auth/privateRoute";
import UserDashboard from "./user/userDashboard";
import CategoryPage from "./page/categoryPage";
import Category from "./components/admin/category";
import CategoryAddPage from "./components/admin/category/add";
import EditCategory from "./components/admin/category/edit";
import AdminRouter from "./components/auth/adminRouter";
const Routes = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <AdminRouter path="/admin/:path?">
            <LayoutAdmin>
              <Switch>
                <Route exact path="/admin">
                  <Redirect to="/admin/dashboard" />
                </Route>
                <Route exact path="/admin/dashboard">
                  <DashboardPage />
                </Route>
                <Route exact path="/admin/products">
                  <ProductManagerPage {...props} />
                </Route>
                
                <Route exac path="/admin/categories">
                  <Category {...props}/>
                </Route>
                <Route exac path="/admin/category/add">
                  <CategoryAddPage {...props}/>
                </Route>
                <Route exac path="/admin/category/edit/:id">
                  <EditCategory {...props}/>
                </Route>
                <Route exact path="/admin/products/add">
                  <ProductAddPage {...props}/>
                </Route>
                <Route exact path="/admin/product/edit/:id">
                  <EditProduct {...props}/>
                </Route>
              </Switch>
            </LayoutAdmin>
          </AdminRouter>
          <Route>
            <LayoutWebsite>
              <Nav />
              <Header {...props}/>
              <Switch>
                <Route exact path="/">
                  <HomePage {...props} />
                </Route>
                <Route exact path="/about">
                  <AboutPage />
                </Route>
                <Route exact path="/products">
                  <Product {...props} />
                </Route>
                <Route exact path="/category/:id">
<CategoryPage {...props}/>
                </Route>
                <Route exact path="/product/:id">
                  <DetailProduct />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/user/signup">
                  <SignUp />
                </Route>
                <Route exact path="/user/signin">
                  <SignIn />
                </Route>
                <PrivateRoute exact path="/user/dashboard">
                    <UserDashboard />
                </PrivateRoute>
                <Route exact path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
              <Footer />
            </LayoutWebsite>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
