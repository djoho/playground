import { Component, OnInit } from '@angular/core';
import {LightBoxService} from '../../services/light-box.service';

@Component({
  selector: 'acma-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  constructor(public lightBoxService: LightBoxService) { }

  ngOnInit() {
  }

}
