import {Component, OnInit} from '@angular/core';

import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  posts: IPost[];

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts = value);
  }

}
