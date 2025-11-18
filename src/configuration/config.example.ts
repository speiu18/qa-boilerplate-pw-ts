import { config } from './config.service';

// Example usage of the configuration service

// Get all configuration values
console.log('All configuration values:', config.getAll());

// Get a single configuration value
const baseUrl = config.get('BASE_URL');
console.log('BASE_URL:', baseUrl);

// Get a required configuration value (throws error if missing)
try {
  const apiUrl = config.getRequired('API_URL');
  console.log('API_URL:', apiUrl);
} catch (error) {
  console.error('Error:', error);
}

// Get a value that might not exist
const optionalValue = config.get('OPTIONAL_VALUE');
console.log('OPTIONAL_VALUE:', optionalValue || 'Not set');
