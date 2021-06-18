import React, { useState } from 'react';
import httpRequest from '../../common/apiServer';

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState(true);

    const getUserData = async () => {
        let userObj = await httpRequest('users/me', {}, 'GET');
        const { id, name, username, role } = userObj.result;
        const positionsList = await httpRequest('positions', {}, 'GET', true, {
            userId: id,
        });
        if (positionsList.result.list.length > 0) {
            console.log(positionsList.result.list, 'position');
            const position = positionsList.result.list[0];
            return setUser({
                id,
                name,
                username,
                role,
                position,
            });
        }
        return setUser({
            id,
            name,
            username,
            role,
        });
    };

    return (
        <UsersContext.Provider
            value={{
                user,
                users,
                setUser,
                setUsers,
                isAuthenticated,
                setIsAuthenticated,
                isLoading,
                setIsLoading,
                token,
                setToken,
                getUserData,
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
