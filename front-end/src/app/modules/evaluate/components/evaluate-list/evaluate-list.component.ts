import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import {
  BaseTable,
  OptionsTable,
} from 'src/app/modules/table/interfaces/table.interface';
import { EvaluateCreateService } from '../../services/evaluate-create.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-evaluate-list',
  templateUrl: './evaluate-list.component.html',
  styleUrls: ['./evaluate-list.component.scss'],
  providers: [EvaluateCreateService],
})
export class EvaluateListComponent extends BaseComponent {
  initColumns: BaseTable[] = [
    {
      name: 'select',
      width: '10%',
    },
    {
      name: 'id',
      width: '10%',
      sort: true,
    },
    {
      name: 'name',
      width: '30%',
      sort: false,
    },
    {
      name: 'progress',
      width: '15%',
      sort: false,
    },
    {
      name: 'fruit',
      width: '15%',
      sort: false,
    },
    {
      name: 'action',
      width: '20%',
      buttonNamePrimary: 'edit',
      buttonNameSecond: 'delete',
    },
  ];

  options: OptionsTable = {
    filter: true,
    pagination: true,
  };
  data: any;

  constructor(private readonly evaluateCreateService: EvaluateCreateService) {
    super();
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.data = [...users];

    function createNewUser(id: number): UserData {
      const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';

      return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
      };
    }
  }

  editRecord(value: any) {
    console.log(value);
  }

  deleteRecord(value: any) {
    console.log(value);
  }
}
