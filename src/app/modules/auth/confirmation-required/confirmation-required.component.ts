import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { empowerAnimations } from '@empower/animations';

@Component({
    selector: 'auth-confirmation-required',
    templateUrl: './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: empowerAnimations,
    standalone: true,
    imports: [RouterLink],
})
export class AuthConfirmationRequiredComponent {
    /**
     * Constructor
     */
    constructor() {}
}
