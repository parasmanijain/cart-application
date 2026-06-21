import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideHttpClient, withXhr } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(withXhr()),
    // Add any other global providers here
  ],
}).catch((err) => console.error(err));
