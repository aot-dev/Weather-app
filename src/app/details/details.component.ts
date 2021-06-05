import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  forcastDays = 5; //as per assignment, you can change it if you wish to
  city:string = '';
  forcastData: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('name')!;
    this.apiService.getUpcomingForcast(this.city,this.forcastDays).subscribe((data:any)=>{
      this.forcastData = data.list;
    })
  }

}
