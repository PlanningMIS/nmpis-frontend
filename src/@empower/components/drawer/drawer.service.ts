import { Injectable } from '@angular/core';
import { EmpowerDrawerComponent } from '@empower/components/drawer/drawer.component';

@Injectable({ providedIn: 'root' })
export class EmpowerDrawerService {
    private _componentRegistry: Map<string, EmpowerDrawerComponent> = new Map<
        string,
        EmpowerDrawerComponent
    >();

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: EmpowerDrawerComponent): void {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): EmpowerDrawerComponent | undefined {
        return this._componentRegistry.get(name);
    }
}
