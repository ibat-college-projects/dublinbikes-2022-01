import { Component, OnInit } from '@angular/core';
import { Dublinbike } from 'src/app/models/dublinbike';
import { DublinbikeService } from 'src/app/services/dublinbike.service';

@Component({
  selector: 'app-dublinbike',
  templateUrl: './dublinbike.component.html',
  styleUrls: ['./dublinbike.component.css']
})
export class DublinbikeComponent implements OnInit {

  constructor(private dublinBikeService: DublinbikeService) { }

  ngOnInit(): void {

    this.getStations();
  }

  dublinBikeStations: Dublinbike[] = [];
  searchText: string | any;

  getStations() {

    this.dublinBikeService.getStations().subscribe(listOfStations=>{

      console.log(listOfStations);

      this.dublinBikeStations = listOfStations;

    })

  }

}
