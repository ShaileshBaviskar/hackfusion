import { healthService } from '../services/healthService';

// Example health data submission
const handleSubmit = async (e) => {
  e.preventDefault();
  const healthData = {
    userId: currentUser.id,
    bloodPressure: '120/80',
    heartRate: 75,
    temperature: 98.6,
    glucose: 90,
    weight: 70,
    height: 175,
    notes: 'Regular checkup'
  };

  const result = await healthService.addHealthRecord(healthData);
  if (result.success) {
    alert('Health data saved successfully!');
  } else {
    alert('Error saving health data');
  }
};

// Example fetching health records
const fetchHealthRecords = async () => {
  const records = await healthService.getHealthRecords(currentUser.id);
  // Process the records as needed
};
