import React from "react";

// components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

const App = () => {
    return (
        <AccountProvider>
            <Messenger />
        </AccountProvider>
    );
}

export default App;
