import * as dotenv from 'dotenv';
import * as path from 'path';

export class ConfigService {
  private static instance: ConfigService;
  private config: Record<string, string>;

  private constructor() {
    const environment = (process.env.ENV || 'dev').trim();
    const envFile = `.env.${environment}`;
    const envPath = path.resolve(process.cwd(), envFile);

    const result = dotenv.config({ path: envPath });

    if (result.error) {
      throw new Error(`Failed to load ${envFile}: ${result.error.message}`);
    }

    this.config = result.parsed || {};
  }

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }

  public get(key: string): string | undefined {
    return this.config[key];
  }

  public getAll(): Record<string, string> {
    return { ...this.config };
  }

  public getRequired(key: string): string {
    const value = this.config[key];
    if (value === undefined) {
      throw new Error(`Required configuration key "${key}" is missing`);
    }
    return value;
  }
}

export const config = ConfigService.getInstance();
