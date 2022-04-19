import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dublinbike } from 'src/app/models/dublinbike';
import { DublinbikeService } from 'src/app/services/dublinbike.service';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dublinBikeService: DublinbikeService) { }

  ngOnInit(): void {

    const stationId = Number(this.route.snapshot.paramMap.get('id'));
    this.getBikeStation(stationId)
  }

  station: Dublinbike | any;
  getBikeStation(stationId: number) {

    this.dublinBikeService.getStation(stationId).subscribe(station => {
      console.log(station);
      this.station = station;
    })

  }

}
