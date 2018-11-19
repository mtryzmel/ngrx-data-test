import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.posts$ = postService.entities$;
  }

  ngOnInit() {
    this.postService.getAll();
  }

  viewPost(post: Post) {
    this.router.navigate(['post', post.id]);
  }
}
