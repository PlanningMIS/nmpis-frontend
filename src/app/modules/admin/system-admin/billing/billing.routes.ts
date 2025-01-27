import { Routes } from '@angular/router';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { BillingCategoryComponent } from './billing-category/billing-category.component';
import { BillingItemCategoryComponent } from './billing-item-category/billing-item-category.component';
import { PriceComponent } from './price/price.component';


export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'payment-method',
    },
    {
        path: 'payment-method',
        component: PaymentMethodComponent,
    },
    {
        path: 'billing-category',
        component: BillingCategoryComponent,
    },
    {
        path: 'billing-item-category',
        component: BillingItemCategoryComponent,
    },
    {
        path: 'price',
        component: PriceComponent,
    },
] as Routes;
