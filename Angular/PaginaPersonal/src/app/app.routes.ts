import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: 'informacion-perfil', component: Profile },
    { path: 'informacion-contacto', component: Contact },
];
