import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  private routeParamsSubscription: Subscription;

  post$: Observable<Post>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.post$ = this.postService.getByKey(id);
      }
    });
  }
}
