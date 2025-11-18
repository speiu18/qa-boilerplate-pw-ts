# Configuration Service

This service manages environment-specific configuration using dotenv.

## Usage

The configuration service automatically loads the appropriate `.env` file based on the `ENV` environment variable.

### Setting the Environment

Set the `ENV` environment variable to one of: `dev`, `stage`, or `prod` (defaults to `dev` if not set).

**Windows (PowerShell):**
```powershell
$env:ENV="stage"
```

**Windows (CMD):**
```cmd
set ENV=stage
```

**Linux/Mac:**
```bash
export ENV=stage
```

### Using the Configuration Service

```typescript
import { config } from './src/configuration/config.service';

// Get a single configuration value
const baseUrl = config.get('BASE_URL');

// Get a required configuration value (throws error if missing)
const apiUrl = config.getRequired('API_URL');

// Get all configuration values
const allConfig = config.getAll();
console.log(allConfig);
```

### Environment Files

- `.env.dev` - Development environment configuration
- `.env.stage` - Staging environment configuration
- `.env.prod` - Production environment configuration

**Note:** The actual `.env.*` files are included as examples. For real projects, add them to `.gitignore` and use `.env.*.example` files instead.
