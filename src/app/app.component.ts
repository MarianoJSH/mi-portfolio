import { Component, OnInit, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, FooterComponent, HomeComponent,
    ContactComponent, AboutComponent, ProjectsComponent, ExperienciaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  title = 'Mariano Suárez';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS only if running in the browser
      import('aos').then(AOS => {
        AOS.init({
          // your AOS configuration
        });
      });
    }
  }

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const glow = document.getElementById("cursor-glow")

    if (glow) {
      const x = event.clientX - 64; // centramos el circulo (w-32/2)
      const y = event.clientY - 64;

      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const pulse = document.createElement('div');
    pulse.className = 'cursor-click';
    pulse.style.left = `${event.clientX}px`;
    pulse.style.top = `${event.clientY}px`;

    document.body.appendChild(pulse);

    setTimeout(() => {
      pulse.remove();
    }, 400); // igual que la duración del @keyframes
  }
}


