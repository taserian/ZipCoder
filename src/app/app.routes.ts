import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, RouterOutlet, RouterOutletMap } from "@angular/router";
import { StateListComponent
        } from "./components/state-list/state-list.component";
import { StateRecordsComponent } from "./components/state-records/state-records.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'source/csv'},
    {path: 'source/:source', component: StateListComponent},
    {path: 'records/:source/state/:stateAbbr', component: StateRecordsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);