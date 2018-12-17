
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';


// user
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// service
import { UserService } from './shared/user.service';
import { BehaviorSubject } from 'rxjs';
// route
import { appRoutes } from './routes';
// auth
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';

// student
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './student/navbar/navbar.component';
import { DashboardsComponent } from './student/navbar/dashboards/dashboards.component';
import { AssignedsupComponent } from './student/navbar/assignedsup/assignedsup.component';
import { CheckresComponent } from './student/navbar/checkres/checkres.component';
import { NotificationComponent } from './student/navbar/notification/notification.component';
import { ReqsupComponent } from './student/navbar/reqsup/reqsup.component';
import { EditstuprofComponent } from './student/navbar/editstuprof/editstuprof.component';
import { InboxComponent } from './student/navbar/inbox/inbox.component';
import { UpcourComponent } from './student/navbar/upcour/upcour.component';
import { UpdatepassstuuComponent } from './student/navbar/updatepassstuu/updatepassstuu.component';
// admin
import { AdminComponent } from './admin/admin.component';
import { NavbaradComponent } from './admin/navbarad/navbarad.component';
import { DashboardadComponent } from './admin/navbarad/dashboardad/dashboardad.component';
import { SupervisiorComponent } from './admin/navbarad/supervisior/supervisior.component';
import { SupcreateComponent } from './admin/navbarad/supervisior/supcreate/supcreate.component';
import { StudentdetailComponent } from './admin/navbarad/studentdetail/studentdetail.component';
import { StucreateComponent } from './admin/navbarad/studentdetail/stucreate/stucreate.component';
import { StudetComponent } from './admin/navbarad/studentdetail/studet/studet.component';
import { AssignSupervisiorComponent } from './admin/navbarad/assign-supervisior/assign-supervisior.component';
import { StudentRequestComponent } from './admin/navbarad/student-request/student-request.component';
import { ViewResultsComponent } from './admin/navbarad/view-results/view-results.component';
import { NotificationadComponent } from './admin/navbarad/notificationad/notificationad.component';
import { AnnouncementadComponent } from './admin/navbarad/announcementad/announcementad.component';
import { MessageComponent } from './admin/navbarad/message/message.component';

import { UpdatepasswordadminComponent } from './admin/navbarad/updatepasswordadmin/updatepasswordadmin.component';
// supervisor
import { SupervisorComponent } from './supervisor/supervisor.component';
import { NavbarsuvComponent } from './supervisor/navbarsuv/navbarsuv.component';
import { DashboardsuvComponent } from './supervisor/navbarsuv/dashboardsuv/dashboardsuv.component';
import { EditsupproComponent } from './supervisor/navbarsuv/editsuppro/editsuppro.component';
import { AssignStuComponent } from './supervisor/navbarsuv/assign-stu/assign-stu.component';
import { UpdateResultComponent } from './supervisor/navbarsuv/update-result/update-result.component';
import { NotificationsuperComponent } from './supervisor/navbarsuv/notificationsuper/notificationsuper.component';
import { AnnouncementsuperComponent } from './supervisor/navbarsuv/announcementsuper/announcementsuper.component';
import { UpdatepassauperComponent } from './supervisor/navbarsuv/updatepassauper/updatepassauper.component';
import { SeecourseComponent } from './supervisor/navbarsuv/seecourse/seecourse.component';
import { SupervisComponent } from './admin/navbarad/supervisior/supervis/supervis.component';
import { SupervisListComponent } from './admin/navbarad/supervisior/supervis-list/supervis-list.component';
import { StuListComponent } from './admin/navbarad/studentdetail/stu-list/stu-list.component';
import { AvatarModule } from 'ngx-avatar';
import { EqualValidator } from './equal-validator.directive';
import { AssignStudetailsComponent } from './supervisor/navbarsuv/assign-stu/assign-studetails/assign-studetails.component';









@NgModule({
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatStepperModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    StudentComponent,
    SupervisorComponent,
    SignInComponent,
    SignUpComponent,
    ForgetpasswordComponent,
    UserProfileComponent,
    NavbarComponent,
    DashboardsComponent,
    AssignedsupComponent,
    CheckresComponent,
    NotificationComponent,
    ReqsupComponent,
    NavbaradComponent,
    DashboardadComponent,
    NavbarsuvComponent,
    DashboardsuvComponent,
    EditstuprofComponent,
    InboxComponent,
    UpcourComponent,
    SupervisiorComponent,
    AssignSupervisiorComponent,
    StudentRequestComponent,
    ViewResultsComponent,
    NotificationadComponent,
    AnnouncementadComponent,
    MessageComponent,
    AssignStuComponent,
    UpdateResultComponent,
    NotificationsuperComponent,
    AnnouncementsuperComponent,
    UpdatepassauperComponent,
    SeecourseComponent,
    StudentdetailComponent,
    SupervisComponent,
    SupervisListComponent,
    StuListComponent,
    StudetComponent,
    EditsupproComponent,
    UpdatepasswordadminComponent,
    SupcreateComponent,
    StucreateComponent,
    EqualValidator,
    AssignStudetailsComponent,
    UpdatepassstuuComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService]
})
export class AppModule { }
