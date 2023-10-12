import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Popover, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AppBarComponent from '../Components/Appbar/AppbarPatientClinc';

export default function PatientsTable() {
  const [patients, setPatients] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [selectedPatientData, setSelectedPatientData] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Add state for appointments and filtered appointments
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/patients')
      .then((response) => {
        if (response.data) {
          const transformedData = response.data.map((item) => ({
            id: item._id,
            name: item.username,
            password: item.password,
            fullName: item.fullName,
            email: item.email,
            dateOfBirth: item.dateOfBirth,
            gender: item.gender,
            mobileNumber: item.mobileNumber,
          }));
          setPatients(transformedData);
          setFilteredRows(transformedData);
        } else {
          console.error('No data received from the API');
        }
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/apps/upcoming-appointments')
      .then((response) => {
        if (response.data) {
          setAppointments(response.data);
        } else {
          console.error('No data received for appointments from the API');
        }
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterValue(value);

    if (Array.isArray(patients)) {
      const filteredPatients = patients.filter((patient) => {
        return patient && patient.name && patient.name.toLowerCase().includes(value);
      });

      setFilteredRows(filteredPatients);
    }
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'password', headerName: 'Password', width: 200 },
    { field: 'fullName', headerName: 'Full Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 200 },
    { field: 'gender', headerName: 'Gender', width: 200 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 200 },
    {
      field: 'action',
      headerName: '',
      width: 120,
      renderCell: (params) => (
        <div>
          <Button variant="outlined" onClick={() => handleViewClick(params.row)}>
            VIEW
          </Button>
        </div>
      ),
      }
    
  ];

  const handleViewClick = (row) => {
    setSelectedPatientData(row);
    setPopoverAnchor(row);
  };

  const handleUpcomingTrips = () => {
    const url = `http://localhost:3000/apps/upcoming-appointments`;
  
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
  
        // Log the retrieved data and patient data for debugging
        console.log('Retrieved data:', data);
        console.log('Patients data:', patients);
  
        const matchingPatients = [];
  
        // Loop through patients and trips to find matches based on pid
        for (const patient of patients) {
          for (const trip of data) {
            if (trip.pid === patient.id) {
              matchingPatients.push(patient);
              break; // Once a match is found, no need to continue searching trips
            }
          }
        }
        setFilteredRows(matchingPatients)
        // Log the result of the filter operation for debugging
        console.log('Patients matching pid:', matchingPatients);
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
      });
  };
  
  

  return (
    <Box bgcolor="#daf4ff">
      <AppBarComponent />
      <h1>Patients</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'right',
          gap: '16px',
          padding: '10px',
        }}
      >
        <TextField
          label="Search by Name"
          variant="outlined"
          value={filterValue}
          onChange={handleFilterChange}
        />
        <Button variant="contained" onClick={handleUpcomingTrips}>
          Filter by Upcoming Appointments
        </Button>
      </Box>

      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
      />

      <Popover
        open={Boolean(selectedPatientData)}
        anchorEl={popoverAnchor}
        onClose={() => {
          setSelectedPatientData(null);
          setPopoverAnchor(null);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {selectedPatientData && (
          <Box p={2}>
            <Typography>Name: {selectedPatientData.name}</Typography>
            <Typography>Password: {selectedPatientData.password}</Typography>
            <Typography>Full Name: {selectedPatientData.fullName}</Typography>
            <Typography>Email: {selectedPatientData.email}</Typography>
            <Typography>Date of Birth: {selectedPatientData.dateOfBirth}</Typography>
            <Typography>Gender: {selectedPatientData.gender}</Typography>
            <Typography>Mobile Number: {selectedPatientData.mobileNumber}</Typography>
          </Box>
        )}
      </Popover>
    </Box>
  );
}
