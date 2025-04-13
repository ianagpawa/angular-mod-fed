import "zone.js";
import { bootstrapApplication } from '@angular/platform-browser';

import { ExportComponent } from "./app/export/export.component";

const mount = () => {
    bootstrapApplication(ExportComponent)
    .catch(err => console.error(err));
}

export { mount }
