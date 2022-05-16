import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services";
import {IComment} from "../../models";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  commentDetailsObject: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
        this.commentService.getById(id).subscribe(value => this.commentDetailsObject = value)
      }
    )
  }
}
