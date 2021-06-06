import { React, useState, useEffect } from 'react';
import ShowPreviousComments from '../components/Comments/ShowPreviousComments'
import { getAllPreviousComments } from '../components/Comments/Comments.service'
import { getAllUsers } from '../components/Comments/Comments.service'
import { getApplications } from '../components/Comments/Comments.service'
import ComplaintsAudit2 from '../components/Comments/ComplaintsAudit2'
import ComplaintsAudit3 from '../components/Comments/ComplaintsAudit3'
function Comments() {
    const [list, setList] = useState([]);

    const [PreviousComments, setPreviousComments] = useState([]);
    const [applications, setApplications] = useState([])
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllPreviousComments().then((comments) => setPreviousComments(comments));
        getApplications().then((application) => setApplications(application));
        getAllUsers().then((usersList) => setUsers(usersList));
    }, []);
    console.log(PreviousComments)
    return (
        <div>
            <ShowPreviousComments PreviousComments={PreviousComments} applications={applications} />
            <ComplaintsAudit2 PreviousComments={PreviousComments} />
            <ComplaintsAudit3 users={users} />
        </div>
    );
}

export default Comments;
