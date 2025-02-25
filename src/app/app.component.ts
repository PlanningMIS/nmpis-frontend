import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent {
    private idleTimeout: any;

    constructor(private router: Router) {}
  
    ngOnInit(): void {
      this.resetIdleTimer(); // Start idle timer when app loads
    }
  
    // Detect user activity (Mouse move, Click, Key press)
    @HostListener('window:mousemove')
    @HostListener('window:keydown')
    @HostListener('window:click')
    resetIdleTimer(): void {
      clearTimeout(this.idleTimeout); // Clear previous timeout
      this.idleTimeout = setTimeout(() => {
        this.signOut(); // Call logout after 10 seconds of inactivity
      }, 300000); // 300 seconds
    }
  
    // Log out user and redirect to login page
    logoutUser(): void {
      console.log('User inactive for 10 seconds. Logging out...');
      localStorage.clear(); // Clear stored user session (optional)
      this.router.navigate(['/sign-in']); // Redirect to login page
    }

        /**
     * Sign out
     */
        signOut(): void {
            this.router.navigate(['/sign-out']);
        }

// Inside a component
// hasPermission(permission: string): boolean {
//   return this.authService.getPermissions().includes(permission);
// }
     
}
