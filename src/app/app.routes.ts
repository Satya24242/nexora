import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Portfolio } from './pages/portfolio/portfolio';
import { Blog } from './pages/blog/blog';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Nexora IT Solutions — Managed IT, Cloud & Cybersecurity' },
  { path: 'services', component: Services, title: 'Services — Nexora IT Solutions' },
  { path: 'about', component: About, title: 'About Us — Nexora IT Solutions' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio — Nexora IT Solutions' },
  { path: 'blog', component: Blog, title: 'Insights — Nexora IT Solutions' },
  { path: 'contact', component: Contact, title: 'Contact — Nexora IT Solutions' },
  { path: '**', component: NotFound, title: 'Page Not Found — Nexora IT Solutions' },
];
