import React from 'react';
import Mainpage from './client/mainpage';
import Menupage from './client/menupage';
import Orderpage from './client/orderpage';
import RegisterPage from './client/registerpage';
import SignInPage from './client/signinpage';
import CheckOut from './client/checkout'
import UserPage from './client/userpage'
import ManagePage from './manager/managepage'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Mainpage />
    },
    {
        path: '/menu',
        exact: false,
        main: () => <Menupage />
        
    },
    {
        path: '/order-cart',
        exact: false,
        main: () => <Orderpage />
    },
    {
        path: '/signin',
        exact: false,
        main: () => <SignInPage/>
    },
    {
        path: '/signup',
        exact: false,
        main: () => <RegisterPage/>
    },
    {
        path: '/product-finish',
        exact: false,
        main: () => <CheckOut/>
    },
    {
        path: '/user/id=',
        exact: false,
        main: () => <UserPage/>
    },
    {
        path: '/manage',
        exact: false,
        main: () => <ManagePage/>
    },
    // {
    //     path : '/notfound',
    //     exact : false,
    //     // main : () => <NotFound />
    // },
    // {
    //     path : '/products',
    //     exact : false,
    //     main : ({ match, location }) => <Products match={match} location={location} />
    // },
    // {
    //     path : '/sign-in',
    //     exact : false,
    //     main : ({location}) => <Login location={location} />
    // }
];

export default routes;