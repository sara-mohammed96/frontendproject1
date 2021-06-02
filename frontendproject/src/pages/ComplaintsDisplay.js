import { React, useState } from 'react';
import ComplaintsHeader from '../components/ComplaintsDisplay/ComplaintsHeader';
import ComplaintsSideBar from '../components/ComplaintsDisplay/ComplaintsSideBar';
import {
 Container,
 Box,
 Grid,
 Modal,
 Hidden,
 Typography,
} from '@material-ui/core';
import ComplaintsMessage from '../components/ComplaintsDisplay/ComplaintsMessage';
import Complains from '../components/ComplaintsDisplay/Complains';
import ComplaintsDetails from '../components/ComplaintsDisplay/ComplaintsDetails';

function ComplaintsDisplay() {
 const [list, setList] = useState([]);
 fetch('http://localhost:3000/applications')
  .then((res) => res.json())
  .then((res) => res.result)
  .then((res) => res.list)
  .then((res) => setList(res));

 return (
  <div>
   <Complains />
  </div>
 );
}

export default ComplaintsDisplay;
