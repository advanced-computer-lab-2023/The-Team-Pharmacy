# MetaCare


Our Pharmacy Management System facilitates patient and pharmacist onboarding. Administrators control accounts, add new administrators, and manage pharmacist and patient accounts. Patients easily order medicines, view alternatives, and track orders, while pharmacists manage medicines, track sales, and receive timely notifications. The system ensures secure communication and reliable pharmaceutical operations.

## Build Status 🔨
* The project is currently in development.
* The admin system need some improvements
* Course Page and API' needs Pagagination.
* The Unit tests needs modifications.
* A CI/CD pipeline needs to be migrated to Jenkins.
* A caching layer needs to be added to the application.
* 
[![Build Status](Your_CI_Service_Build_Badge_Link)](Your_CI_Service_Build_Link)

The build status reflects the current state of continuous integration for this project. It helps ensure that the latest changes in the repository pass automated tests and maintain the integrity of the codebase.

Please note the following considerations:

- Styles: Prefer using external styles (CSS files) over inline styles for better separation of concerns. This practice promotes maintainability and readability in the long run.

- Reusable Components: Encourage the use of reusable components, such as AppBars, to enhance code modularity and maintainability. The project encourages encapsulating common functionalities in separate components for easier maintenance and future enhancements.

Addressing these considerations will contribute to a more robust and maintainable codebase.

## Code Style📜

The project follows a consistent coding style to ensure readability and maintainability. Please adhere to the following guidelines when contributing to the codebase:

 ### 1. File Organization

- Import Statements: Keep import statements organized at the top of each file.

 ### 2. Component Structure

- Ensure a clear and organized structure for React components.

 ### 3. React Hooks

- Leverage React Hooks (useState, useEffect, etc.) for managing state and side effects in functional components.

 ### 4. Axios Requests

- Make asynchronous requests using Axios within the useEffect hook.

 ### 5. Conditional Rendering

- Use conditional rendering to provide a better user experience during loading states.

 ### 6. State Naming

- Maintain consistency in naming conventions for states.

### 7. Error Handling

- Provide meaningful error messages and log errors for debugging purposes.
Feel free to refer to the existing codebase for examples of these conventions.

## Screenshots 🖵
here is the Patient's main page
![home page pharmacy](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/780abff2-a23d-4afb-b6f9-93780ac0fb91)

Store medications 
![Store Medications](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/4f126a0b-da61-483f-8b6f-1a95a90a9a9a)

 You can choose Billing details and payment methods 
![PHOTO-2023-12-17-04-35-53](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/d197ee17-242c-497b-b58b-d60a4a86fe2f)

You can also view your cart and totals
![PHOTO-2023-12-17-04-35-53 2](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/dde89037-9673-4039-a5c6-25c2ea0b0d47)

You can view med details 
![PHOTO-2023-12-17-04-35-54 2](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/c61246a4-33f4-445a-861a-fec84059cc22)

You can pay by visa 
![PHOTO-2023-12-17-04-35-54](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/f3f56dba-8ed4-4b73-8a1f-2f701aa087ca)

You can view your wallet balance
![PHOTO-2023-12-17-04-35-55 2](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/b510c7bf-da56-4258-9e4d-e21959504e3c)

Successful purchase 
![PHOTO-2023-12-17-04-35-55 3](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/ea7b9fe3-38dd-48e1-8669-07f4bd97bf34)

You can also see the med alternatives 
![PHOTO-2023-12-17-04-35-55](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/b126b362-77bb-41db-9b67-6233be66c48a)

here is the admin’s main page
![PHOTO-2023-12-17-04-43-08](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/01364f8f-6daf-444e-843d-4a806284ade0)
cefd0679-c13c-4db2-a49e-86c073574584)

Admin can view all patients and pharmacists and  their info

![PHOTO-2023-12-17-04-43-09](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/0823b9d3-e17b-46ac-add5-08679b9af94b)

Admins can view and decide on pharmacist requests

![PHOTO-2023-12-17-04-43-07](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/17391bd2-03cb-432b-b0f0-1a26fbd93061)


Admins can view the sales report 
![PHOTO-2023-12-17-04-43-06 3](https://github.com/advanced-computer-lab-2023/The-Team-Pharmacy/assets/128514471/462a7da8-3c74-4760-abeb-986d5c5d7e7c)






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
The system serves different type of users (Admin, patient , pharmacist,guest)



As a guest I can,
Register  as a patient 
submit a request to register as pharmacist


As an admin I can,
Login/logout
remove a pharmacist/patient from the system
add another adminstrator with a set username and password
change my password
reset a forgotten password through OTP sent to email
view all of the information uploaded by a pharmacist to apply to join the platform
accept or reject the request of a pharmacist to join the platform
view a list of all available medicines (including picture of medicine, price, description)
search for medicine based on name
filter medicines based on medicinal use
view a total sales report based on a chosen month
filter sales report based on a medicine/date




As a patient,
Login/logout
change my password
reset a forgotten password through OTP sent to email
view a list of all available medicines (including picture of medicine, price, description)
search for medicine based on name
filter medicines based on medicinal use
add an over the counter medicine in my cart
add a prescription medicine to my cart based on my prescription
View cart items
remove an item from the cart
change the amount of an item in the cart
 checkout my order
add a new delivery address (or multiple addresses)
choose a delivery address from the delivery addresses available 
choose to pay with wallet, credit card (using Stripe) or cash on delivery 
view order details and status
cancel an order
view alternatives to a medicine that is out of stock based on main active ingredient



As a pharmacist,
Login/logout
change my password
reset a forgotten password through OTP sent to email
view a list of all available medicines (including picture of medicine, price, description)
search for medicine based on name
filter medicines based on medicinal use
add a medicine with its details (active ingredients) , price and available quantity 
upload medicine image
 edit medicine details and price
archive/ unarchive a medicine
view a total sales report based on a chosen month
 filter sales report based on a medicine/date 
chat with a doctor
Receive a notification once a medicine is out of stock on the system and via email





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
    const regex = /^(?=.[A-Z])(?=.\d).{4,}$/;
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
cd backend/server
npm start

The backend server will run at http://localhost:3000.
bash
cd frontend
npm start


Visit http://localhost:3001 in your web browser to view the application.

## API Reference 📚
### Base URL
The base URL for all API endpoints is http://localhost:3000/.

### medsRoutes
http://localhost:3000/meds/


### PatientsRoutes
http://localhost:3000/patients

### AppsRoutes 
http://localhost:3000/apps


### Health-RecordsRoutes
http://localhost:3000/HealthRecords

### PrescriptionRoutes
http://localhost:3000/Prescription

### AdminRoutes
http://localhost:3000/admin

### LoginRoutes
http://localhost:3000/login

### WalletRoutes
http://localhost:3000/wallet

### WalletdocRoutes
http://localhost:3000/walletDoc

### Cart
http://localhost:3000/cart

### AddressRoutes
http://localhost:3000/address

### MedhistoryRoutes
http://localhost:3000/medHistory



### OrderRoutes
http://localhost:3000/Order


### PharmacistRoutes
http://localhost:3000/pharmacists

### pharmcistReqRoutes
http://localhost:3000/api/pharmcistReq'

### PrescriptionRoutes
http://localhost:3000/Prescription'

### AddressRoutes
http://localhost:3000/address'


### medicalHistoryRoutes
http://localhost:3000/medHistory'


### EmploymentContract
http://localhost:3000/employmentContract'

### OrderRoutes
http://localhost:3000/Order'





## Tests 🧪
The api routes were tested using postman,
Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated. Postman offers many endpoint interaction methods. The following are some of the most used, including their functions:
*   GET: Obtain information
*   POST: Add information
*   PUT: Replace information
*   PATCH: Update certain information
*   DELETE: Delete information
& And we tested the behavior of our routes and if they produce the correct status code and response according to our project flow .you will fine the main routes in app.js. and the sub ones in each parts routes folder in the backend. For example, you will find something  like this in the app.js “app.use('/patients', PatientRoutes);” and something like this in the routes file of patients” router.get('/', PatientController.getPatient);” so you test like this.      http://localhost:3000/patients/  using “get” in postman. In this way you can test almost all aspects of the project for example here patient registration by getting all patients.



## How to use
 ### To run Backend
 -cd backend
 -cd server
 -node app

 ### To run Frontend
 -cd frontend
 -npm start

## Contribute
 We welcome contributions via pull requests! To contribute code, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix: git checkout -b feature-branch.
3. Write tests for your changes if applicable.
4. Commit your changes with a clear and descriptive commit message.
5. Push your branch to your fork: git push origin feature-branch.
6. Open a pull request on the [main repository](https://github.com/advanced-computer-lab-2023/The-Team-Clinic.git) with a clear title and description of your changes.

 ## Credits
 The main resources that helped us in our implementation:
https://www.youtube.com/@NetNinja
https://mui.com/
https://react-bootstrap.github.io/getting-started/introduction/
https://www.npmjs.com/            MERN Stack Crash Course Tutorial
• MERN stack authentication + profile                         MERN Auth Tutorial

 ## Lisence
- [Stripe](https://stripe.com): Payment processing library (License: Apache 2.0)
- [Axios](https://axios-http.com): HTTP client for making requests (License: MIT)
- [FontAwesome](https://fontawesome.com): Icons used in the project (License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/))
- [React](https://reactjs.org): JavaScript library for building user interfaces (License: MIT)
- [Node.js](https://nodejs.org): A JavaScript runtime (License: MIT)
- [MongoDB](https://www.mongodb.com): A NoSQL database (License: Server Side Public License (SSPL))
- [Socket.IO](https://socket.io): A library for real-time web applications (License: MIT)
- [Express (Node.js)](https://expressjs.com): A minimal and flexible web application framework (License: MIT)
- [Bootstrap](https://react-bootstrap.github.io): CSS framework (License: MIT)
- [Material-UI](https://material-ui.com): CSS framework (License: MIT)
- [Git](https://git-scm.com): Distributed version control system (License: GNU General Public License (GPL))