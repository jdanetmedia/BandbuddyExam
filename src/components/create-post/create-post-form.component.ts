import { Component } from '@angular/core';
import { Post } from "../../models/post/post.interface";
import { User } from "firebase";
import { DataService } from "../../providers/data/data.service";

@Component({
  selector: 'app-create-post-form',
  templateUrl: 'create-post-form.component.html'
})
export class CreatePostFormComponent {

  private authenticatedUser: User;
  post = {} as Post;

  constructor(private data: DataService) {

  }

  async createPost() {
    console.log('test');

    if (this.authenticatedUser) {

      this.post.date = new Date();
      const result = await this.data.createPost(this.authenticatedUser, this.post);
      console.log(result);

    }
  }

}
