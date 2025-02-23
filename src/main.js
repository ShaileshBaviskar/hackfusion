import { storeHealthData } from './storeHealthData';

// Example health data
const healthData = {
  heartRate: 72,
  bloodPressure: "120/80",
  temperature: 98.6,
  timestamp: new Date()
};

// Store the health data
storeHealthData(healthData);
