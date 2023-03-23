import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  TableComponent,
  TableHeaderTemplateDirective,
  TableRowTemplateDirective,
} from "./ui/table.component";
import { Employee, Inventory } from "./model";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <!-- No templates provided, will use default layout -->
    <h3>Basic usage. No custom template</h3>
    <app-table [data]="employees" />
    <!-- Basic configured template -->
    <h3>Basic configuration</h3>
    <app-table [data]="employees">
      <ng-template appTableHeader>
        <th>First</th>
        <th>Last</th>
      </ng-template>
    </app-table>
    <!-- Highly configured template with conditional elements -->
    <h3>Highly configuration</h3>
    <app-table [data]="inventory">
      <ng-template [appTableHeader]="inventory" let-header>
        <th>Item</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </ng-template>
      <!-- we can use the shorthand syntax as well -->
      <ng-container *appTableRow="inventory; let row">
        <td>{{ row.name }}</td>
        <td>{{ row.price | currency : row.currency }}</td>
        <td>
          <button *ngIf="row.inStock > 0" (click)="purchaseItem(row.plu)">
            Buy now
          </button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </ng-container>
    </app-table>
  `,
  imports: [
    TableComponent,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective,
    CommonModule,
  ],
})
export class HomeComponent {
  employees: Employee[] = [
    { firstName: "Chau", lastName: "Tran" },
    { firstName: "Trash", lastName: "Dev" },
  ];

  inventory: Inventory[] = [
    {
      plu: 110,
      supplier: "X Corp",
      name: "Table extender",
      inStock: 500,
      price: 50,
      currency: "GBP",
    },
    {
      plu: 120,
      supplier: "X Corp",
      name: "Heated toilet seat",
      inStock: 0,
      price: 80,
      currency: "GBP",
    },
    {
      plu: 155,
      supplier: "Y Corp",
      name: "Really good pencil",
      inStock: 1,
      price: 8000,
      currency: "AUD",
    },
  ];

  purchaseItem(plu: number) {
    console.log("handle purchase for", plu);
  }
}
