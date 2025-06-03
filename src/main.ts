import { bootstrapApplication } from "@angular/platform-browser";
import { RootComponent } from "./root/root.component";
import { rootConfig } from "./root/root.config";

bootstrapApplication(RootComponent, rootConfig).catch((err) =>
  console.error(err)
);
