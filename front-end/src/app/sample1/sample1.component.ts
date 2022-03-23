import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/api/sampleConfig/config.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.scss'],
})
export class Sample1Component implements OnInit {
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe(data => console.log('data', data));
    console.log('sample 1');
  }
}
