const express = require('express');
const router = express.Router();
const healthPackageController = require('../Controllers/HealthPackageController');

// Define routes for Health Packages
router.post('/', healthPackageController.createHealthPackage);
router.get('/', healthPackageController.getAllHealthPackages);
router.get('/:id', healthPackageController.findHealthPackageById); // New route to find by ID
router.put('/:id', healthPackageController.updateHealthPackage);
router.delete('/:id', healthPackageController.deleteHealthPackage);

module.exports = router;
