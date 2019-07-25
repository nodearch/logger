# NodeArch Config

### Usage

config file example

`server.json`
```json
[
  {
    "key": "host",
    "value": "http://localhost:3000",
    "type": "string",
    "env": "HOST",
    "required": true
  },
  {
    "key": "port",
    "value": 3000,
    "env": "PORT"
  }
]
```

`main.ts`
```typescript
import { createInstance, IEnv, config } from '@nodearch/config';
import * as path from 'path' ;

async function main () {
  // config folder path
  const configPath = path.join(__dirname, '..', 'config');
  // environment to use
  const env = process.env.NODE_ENV || 'development';
  // environment data object i.e ( environment variables )
  const envVars: IEnv = <IEnv>process.env;
  // create config instance
  await createInstance(configPath, env, envVars);

  console.log("host", config.get("server.host") );
  console.log("port", config.get("server.port") );
}

main()
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });

```
