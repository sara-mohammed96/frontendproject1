import { React, useState, useEffect } from "react";
import { Typography, Box, Container } from "@material-ui/core";
import ComplaintsAudit1 from "./ComplaintsAudit1";
import AddingCommentSection from "./AddingCommentSection";
import Navbar from "../Navbar/Navbar";
import ShowPreviousComments from "./ShowPreviousComments";
import { getCommentsByApplicationId } from "./Comments.service";
import { getAllUsers } from "./Comments.service";
import { getApplications, getApplicationById } from "./Comments.service";
import { useParams } from "react-router";
import CommentsSection from "./CommentsSection";
import ComplainText from "./ComplainText";
export default function ComplaintsAudit() {
  const [comments, setComments] = useState([]);
  const [application, setApplication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { applicationId } = useParams();

  useEffect(() => {
    (async function () {
      const applicationsPromise = getApplications();
      const commentsPromise = getCommentsByApplicationId(applicationId);
      const [applications, comments] = await Promise.all([
        applicationsPromise,
        commentsPromise,
      ]);
      const chosenApplication = applications.find(
        (application) => application.id === parseInt(applicationId)
      );
      setApplication(chosenApplication);
      setComments(comments);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box style={{ backgroundColor: "#F5F4FA" }}>
      <Navbar />

      <ComplainText application={application} />
      <Box style={{ display: "flex" }}>
        <Box>
          {isLoading ? "" : <ComplaintsAudit1 application={application} />}
        </Box>
        <Box>
          <CommentsSection comments={comments} application={application} />
          <AddingCommentSection applicationId={parseInt(applicationId)} />
        </Box>
      </Box>
    </Box>
  );
}
