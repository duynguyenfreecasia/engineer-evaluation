import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { CommonConstant } from 'src/app/infrastructure/constants/common.constant';
import { BaseTable, OptionsTable } from '../interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent {
  @Input() data: any[];
  @Input() initColumns: BaseTable[];
  @Input() options: OptionsTable;

  @Output() primaryEmitter = new EventEmitter<any>();
  @Output() secondaryEmitter = new EventEmitter<any>();

  dataSource: MatTableDataSource<any>;
  displayedColumns: any[];
  selection = new SelectionModel<any>(true, []);
  pageSizeOptions = CommonConstant.PAGE_SIZE_OPTIONS;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private readonly location: Location,
    private readonly formBuilder: FormBuilder
  ) {
    super();
  }

  protected override onInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = this.initColumns.map(col => col.name);
  }

  protected override onAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  public onPrimaryButtonClick(row: any) {
    this.primaryEmitter.next(row);
  }

  public onSecondaryButtonClick(row: any): void {
    this.secondaryEmitter.next(row);
  }
}
