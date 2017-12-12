import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePostPage } from './create-post';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    CreatePostPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePostPage),
    ComponentsModule
  ],
  exports: [
    CreatePostPage
  ]
})
export class CreatePostPageModule {}
