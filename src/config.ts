export enum ENVIRONMENTS {
    dev = 0,
    prod,
  }
  
  export default {
    ENV: process.env.mode === "prod" ? ENVIRONMENTS.prod : ENVIRONMENTS.dev,
    PORT: process.env.mode === "prod" ? 3010 : 3010,
  };
  