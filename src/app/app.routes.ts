import { Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LayoutComponent } from './layouts/auth/layout/layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [


    {path: '' , redirectTo:'gallery',pathMatch:'full'}
   ,
    {path: '' , component:LayoutComponent , children:
        [
            {path:'login' , component:LoginComponent},
            {path:'register' , component:RegisterComponent},
        ]
    },


   
    {path:''  , component:BlankLayoutComponent ,
        children:[
            {path:'gallery' , loadComponent:()=>import('./pages/gallery/gallery.component').then((c)=>c.GalleryComponent) , title:'Gallery'},
            {path:'details/:id' , loadComponent:()=>import('./pages/details/details.component').then((c)=>c.DetailsComponent) , title:'Details'},
        
        ]
    }


];
