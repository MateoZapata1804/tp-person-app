import app from "./app";
import { apiEnv } from "./config/env";

app.listen(apiEnv.PORT, () => {
  console.log(`Server is running on https://localhost:${apiEnv.PORT}`);
});
