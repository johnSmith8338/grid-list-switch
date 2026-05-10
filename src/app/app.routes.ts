import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { NewComponent } from './pages/new-component/new-component';

export const routes: Routes = [
    {
        path: '', component: Layout
    },
    {
        path: 'component', component: NewComponent
    },
];
