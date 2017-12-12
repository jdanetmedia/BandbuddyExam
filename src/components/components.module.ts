import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { CreatePostFormComponent } from './create-post/create-post-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    CreatePostFormComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    CreatePostFormComponent
  ]
})

export class ComponentsModule {

}
