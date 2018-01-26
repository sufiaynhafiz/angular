import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  name : string = "";
  constructor(private route: ActivatedRoute) { 
    this.name = route.snapshot.params['name'];
  }

  ngOnInit() {
    console.log(this.name);
  }

}
