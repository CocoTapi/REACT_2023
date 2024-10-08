import React, { useState, useEffect }from 'react';

const AuthContext = React.createContext({
    isLoggledIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
    };

    return ( 
        <AuthContext.Provider 
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler, 
                onLogin: loginHandler,
            }}
        >
        {PaymentResponse.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;