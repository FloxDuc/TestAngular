import { Routes } from '@angular/router';

import { HOME } from './home/home.routes';
import { GAZ } from './gaz/gaz.routes';
import { STATISTICS } from './statistics/statistics.routes';

export const appRoutes: Routes = [
    ...HOME,
    ...GAZ,
    ...STATISTICS
];
