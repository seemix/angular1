import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router";
import {IPostDetails} from "../../models/postDetails.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetailsObject: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, router: Router) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
        let {state: {data}} = history;
        this.postDetailsObject = data;
      }
    )
  }
}



