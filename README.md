# MetaCare

MetaCare is a virtual clinic  where you can schedule and attend  appointments, chat with your doctor ,and prescribe to health packages by the click of a button.

## Build Status 🔨
[![Build Status](Your_CI_Service_Build_Badge_Link)](Your_CI_Service_Build_Link)

The build status reflects the current state of continuous integration for this project. It helps ensure that the latest changes in the repository pass automated tests and maintain the integrity of the codebase.

Please note the following considerations:

- **Styles:** Prefer using external styles (CSS files) over inline styles for better separation of concerns. This practice promotes maintainability and readability in the long run.

- **Reusable Components:** Encourage the use of reusable components, such as AppBars, to enhance code modularity and maintainability. The project encourages encapsulating common functionalities in separate components for easier maintenance and future enhancements.

Addressing these considerations will contribute to a more robust and maintainable codebase.

## Code Style📜

The project follows a consistent coding style to ensure readability and maintainability. Please adhere to the following guidelines when contributing to the codebase:

 ### 1. File Organization

- **Import Statements:** Keep import statements organized at the top of each file.

 ### 2. Component Structure

- Ensure a clear and organized structure for React components.

 ### 3. React Hooks

- Leverage React Hooks (`useState`, `useEffect`, etc.) for managing state and side effects in functional components.

 ### 4. Axios Requests

- Make asynchronous requests using Axios within the `useEffect` hook.

 ### 5. Conditional Rendering

- Use conditional rendering to provide a better user experience during loading states.

 ### 6. State Naming

- Maintain consistency in naming conventions for states.

### 7. Error Handling

- Provide meaningful error messages and log errors for debugging purposes.
Feel free to refer to the existing codebase for examples of these conventions.

## Screenshots 🖵
![Patient Home](src/Screenshots/Patient_Home.png)
![Health Packages](src/Screenshots/Health_Packages.png)
![Change Password form](src/Screenshots/Change_Password.png)
![Admin Home](src/Screenshots/Admin_Home.png)
![User Management](src/Screenshots/User_Management.png)
![Doctor Home](src/Screenshots/Doctor_Home.png)
![Doctor Appointments](src/Screenshots/Doctor_Apppointments.png)
![Store](src/Screenshots/Store.png)
![Pharmacist requests](src/Screenshots/Pharmacist_Requests.png)

## Tech/Framework used 🧰
Frontend Development:
React.js: A JavaScript library for building user interfaces. It's commonly used for creating dynamic and responsive frontend applications.

Backend Development:
Node.js: A JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server side, facilitating the use of a single language for both frontend and backend.

Database:
MongoDB: A NoSQL database that stores data in flexible, JSON-like documents. It's suitable for applications with evolving schemas.

Real-time Communication:
Socket.IO: A library for real-time web applications. It enables bidirectional communication between clients and servers.

APIs:
Express (Node.js): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Styling:
CSS Frameworks (Bootstrap, Material-UI): Pre-built CSS frameworks that provide styles and components for designing responsive and visually appealing user interfaces.

Version Control:
Git: A distributed version control system for tracking changes in source code during software development.

## Features✨
Patient Management System:
User registration and authentication.
Patient profile creation and management.
Appointment scheduling with doctors.
Prescription and medication history tracking.
Health record management.
Family member addition for shared health records.

Pharmacy Management System:
Medication inventory management.
Online medication ordering for patients.
Prescription validation and fulfillment.
Sales and revenue tracking.
Medication categorization and search.
Pharmacist profile and authentication.

Doctor Appointment System:
Doctor profile creation and specialization.
Appointment scheduling with patients.
Patient medical history access.
Prescription generation and management.
Automated reminders for appointments.
Secure messaging between doctors and patients.

Admin Dashboard:
User management and access control.
Health package creation and management.
Monitoring appointment requests.
Sales and revenue analytics.
Dashboard customization options.
System configuration settings.

Messaging System:
Real-time chat functionality.
Message history and archiving.
Secure messaging with end-to-end encryption.
Notification system for new messages.
Group messaging for healthcare teams.
File and image sharing in messages.

Medication Store:
Medication catalog with detailed information.
Medication search and filtering.
Shopping cart and order placement.
Order tracking and history.
Online payment integration.
User reviews and ratings for medications.

Health Package System:
Creation and customization of health packages.
Subscription management for users.
Health package analytics and reports.
Automated reminders for health checkups.
Integration with patient profiles.
Personalized health recommendations.

Prescription System:
Prescription creation with detailed instructions.
Integration with pharmacy for fulfillment.
Prescription history for doctors and patients.

## Code Examples💻
### Example 1: How to Create a Patient(Backend)

const patientModel = require('../Models/patients');
const patients = require('../Models/patients');
const walletModel = require('../Models/Wallet'); // Import the wallet model
const bcrypt = require('bcrypt');

exports.createPatient = async (req, res) => {
  const {
    fullName,
    email,
    dateOfBirth,
    gender,
    mobileNumber,
    emergencyContactFullName,
    emergencyContactMobileNumber,
    emergencyContactRelationToPatient,
    password, 
    username,
  } = req.body;
  try {
 
      const salt = await bcrypt.genSalt(); 
      const hashedPassword = await bcrypt.hash(password, salt);
      const newPatient= new patientModel({
        username,
        fullName,
        email,
        dateOfBirth,
        gender,
        mobileNumber ,
        emergencyContactFullName ,
        emergencyContactMobileNumber,
        emergencyContactRelationToPatient,
        password: hashedPassword,
      });

      const newWallet = new walletModel({
        patient: newPatient._id, // Assuming patientModel has an _id field
        balance: 0, // You can set an initial balance if needed
      });
      // Save the wallet
      const savedWallet = await newWallet.save();
      // Update the patient with the wallet information
      newPatient.wallet = savedWallet._id;
      const savedPatient = await newPatient.save();
      res.status(200).json(savedPatient)
  } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message })
  } };


### Example 2: How to add medicine to cart(Backend)
  exports.addToCart = async (req, res) => {
  try {
    const { patientId, medicationId, quantity } = req.body;

    // Find the patient's cart or create one if it doesn't exist
    let cart = await Cart.findOne({ patientId });

    if (!cart) {
      cart = new Cart({patientId, medications: [] });
    }

    // Check if the medication is already in the cart
    const existingMedication = cart.medications.find(
      (item) => item.medicationId.toString() === medicationId
    );

    if (existingMedication) {
      // If the medication is already in the cart, update its quantity
      existingMedication.quantity += quantity;
    } else {
      // If not, add the medication to the cart
      cart.medications.push({ medicationId, quantity });
    }

    // Save the cart
    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

### Example 2: How to Change Password(Frontend)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{4,}$/;
  return regex.test(password);
};
const handleCloseChangePassword = () => {
  setChangePasswordOpen(false);
};

const updatePassword = async (newPassword) => {
  try {
    // Replace '/api/reset-password' with your actual API endpoint
    const response = await axios.put('http://localhost:3000/changepassword', { id, newPassword });
    console.log(response.data);
    setAlertType('success');
    setAlertOpen(true);
  } catch (error) {
    console.error('Error updating password:', error);
    setAlertType('error');
    setAlertOpen(true);
  }
};

  const handleOpenChangePassword = () => {
    setChangePasswordOpen(true);
  };


## Installation 📥

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Git](https://git-scm.com/)

### Clone the Repository
git clone https://github.com/advanced-computer-lab-2023/The-Team-Clinic.git

### Install Dependencies

Navigate to the backend directory:
bash
cd backend


Install dependencies:

bash
npm Install


Frontend

Navigate to the frontend directory:
bash
cd frontend

Install dependencies:

bash
npm Install


###Run the Application

bash
cd backend
npm start

The backend server will run at http://localhost:3000.
bash
cd frontend
npm start


Visit http://localhost:3001 in your web browser to view the application.

## API Reference 📚
### Base URL
The base URL for all API endpoints is `http://localhost:3000/`.
### medsRoutes
`http://localhost:3000/meds/`
`http://localhost:3000/meds/:id`
`http://localhost:3000/meds/updateDescription/:id`
`http://localhost:3000/meds/updatePrice/:id`
`http://localhost:3000/meds/:medicationId`

### DoctorsRouts
`http://localhost:3000/doctors`

### PatientsRoutes
`http://localhost:3000/patients`

### AppsRoutes 
`http://localhost:3000/apps`

### Health-PackagesRoutes
`http://localhost:3000/health-packages`

### Doctors-RequestsRouts
`http://localhost:3000/api/drReq`

### Health-RecordsRoutes
`http://localhost:3000/HealthRecords`

### PrescriptionRoutes
`http://localhost:3000/Prescription`




## Tests 🧪







## How to use
 ### To run Backend
 -cd backend
 -cd server
 -node app

 ### To run Frontend
 -cd frontend
 -npm start