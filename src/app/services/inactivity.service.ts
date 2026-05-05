import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class InactivityService implements OnDestroy {

  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private readonly TIMEOUT_DURATION = 1 * 60 * 1000; // 15 minutes in ms

  // All events that count as "user activity"
  private readonly activityEvents = [
    'mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'
  ];

  private boundReset = this.resetTimer.bind(this);

  constructor(private authService: AuthService, private ngZone: NgZone) {}

  /** Call this once after login to start watching */
  startWatching(): void {
    // Run outside Angular zone for performance (no change detection on every mousemove)
    this.ngZone.runOutsideAngular(() => {
      this.activityEvents.forEach(event =>
        window.addEventListener(event, this.boundReset, { passive: true })
      );
    });
    this.resetTimer();
  }

  /** Call this on logout to clean everything up */
  stopWatching(): void {
    this.activityEvents.forEach(event =>
      window.removeEventListener(event, this.boundReset)
    );
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  private resetTimer(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      // Re-enter Angular zone so navigation + state updates work correctly
      this.ngZone.run(() => {
        this.authService.logout(); // clears localStorage + redirects to /login
      });
    }, this.TIMEOUT_DURATION);
  }

  ngOnDestroy(): void {
    this.stopWatching();
  }
}
