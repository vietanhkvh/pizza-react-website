import React, { Children } from 'react';
import Mainpage from './client/mainpage';
import MenuDesserts from './client/menu-detail/menudesserts';
import MenuPizzas from './client/menu-detail/menupizzas';
import Menupage from './client/menupage';
import Orderpage from './client/orderpage';
import RegisterPage from './client/registerpage';
import SignInPage from './client/signinpage';
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