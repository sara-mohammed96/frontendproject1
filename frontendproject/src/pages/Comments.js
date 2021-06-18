import { React, useState, useEffect } from 'react';
import ShowPreviousComments from '../components/Comments/ShowPreviousComments';
import { getAllPreviousComments } from '../components/Comments/Comments.service';
import { getAllUsers } from '../components/Comments/Comments.service';
import { getApplications } from '../components/Comments/Comments.service';
import ComplaintsAudit2 from '../components/Comments/ComplaintsAudit2';
import AddingCommentSection from '../components/ComplaintsAudit/AddingCommentSection';
import NavbarHeader from '../components/Navbar/Navbar';
import CommentsSection from '../components/ComplaintsAudit/CommentsSection'
function Comments() {
    const [PreviousComments, setPreviousComments] = useState([]);
    const [applications, setApplications] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllPreviousComments().then((comments) => setPreviousComments(comments));
        getApplications().then((application) => setApplications(application));
        getAllUsers().then((usersList) => setUsers(usersList));
    }, []);

    return (
        <div>
            <NavbarHeader />
            <ShowPreviousComments
                PreviousComments={PreviousComments}
                applications={applications}
            />
            <ComplaintsAudit2 PreviousComments={PreviousComments} />
            <AddingCommentSection users={users} />

        </div>
    );
}

export default Comments;
