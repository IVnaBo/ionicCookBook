import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
import {IonicModule} from "ionic-angular";
import { CookProductsComponent } from './cook-products/cook-products';

@NgModule({
	declarations: [IonProductsComponent,
    CookProductsComponent
   ],
	imports: [IonicModule],
	exports: [IonProductsComponent,
    CookProductsComponent
    ]
})
export class ComponentsModule {}
