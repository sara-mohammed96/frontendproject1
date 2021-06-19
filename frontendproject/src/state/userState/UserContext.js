import React, { useEffect, useState } from 'react';
import httpRequest from '../../common/apiServer';
import { getAllPositions } from '../../components/Positions/positions.service';

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [positions, setPositions] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState(true);

    useEffect(() => {
        if (user) {
            setIsAdmin(user.role === 'admin')
        }
    }, [user])

    const getUserRelatedPositions = async (userId, managerId) => {
        const positions = await getAllPositions()
        return positions.filter(position => position.userId !== userId && (position.managerId === userId || position.managerId === managerId))
    }

    const getUserData = async () => {
        let userObj = await httpRequest('users/me', {}, 'GET');
        const { id, name, username, role } = userObj.result;
        const positionsList = await httpRequest('positions', {}, 'GET', true, {
            userId: id,
        });
        if (positionsList.result.list.length > 0) {
            const position = positionsList.result.list[0];
            const positions = await getUserRelatedPositions(id, position.managerId)
            setPositions(positions)
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
                isAdmin,
                positions,
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
