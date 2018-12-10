import React, {Suspense} from 'react';
//import UserGreeting from './UserGreeting';
//import GuestGreeting from './GuestGreeting';
const UserGreeting = React.lazy(() => import('./UserGreeting'));
const GuestGreeting = React.lazy(() => import('./GuestGreeting'));

const Greeting = ({isLoggedIn}) => (
    <Suspense fallback={() => "cargando"}>
        {
            isLoggedIn
            ? <UserGreeting/>
            : <GuestGreeting/>
        }
    </Suspense> );

export default Greeting;