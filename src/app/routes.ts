import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


// auth
import { AuthGuard } from './auth/auth.guard';

// student
import { StudentComponent } from './student/student.component';
import { DashboardsComponent } from './student/navbar/dashboards/dashboards.component';
import { AssignedsupComponent } from './student/navbar/assignedsup/assignedsup.component';
import { CheckresComponent } from './student/navbar/checkres/checkres.component';
import { NotificationComponent } from './student/navbar/notification/notification.component';
import { ReqsupComponent } from './student/navbar/reqsup/reqsup.component';
import { NavbarComponent } from './student/navbar/navbar.component';
import { EditstuprofComponent } from './student/navbar/editstuprof/editstuprof.component';
import { InboxComponent } from './student/navbar/inbox/inbox.component';
import { UpcourComponent } from './student/navbar/upcour/upcour.component';
import {  UpdatepassstuuComponent } from './student/navbar/updatepassstuu/updatepassstuu.component';
// admin
import { AdminComponent } from './admin/admin.component';
import { NavbaradComponent } from './admin/navbarad/navbarad.component';
import { DashboardadComponent } from './admin/navbarad/dashboardad/dashboardad.component';
import { EditsupproComponent } from './supervisor/navbarsuv/editsuppro/editsuppro.component';
import { SupervisiorComponent } from './admin/navbarad/supervisior/supervisior.component';
import { SupcreateComponent } from './admin/navbarad/supervisior/supcreate/supcreate.component';
import { SupervisComponent } from './admin/navbarad/supervisior/supervis/supervis.component';
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
import { AssignStuComponent } from './supervisor/navbarsuv/assign-stu/assign-stu.component';
import { UpdateResultComponent } from './supervisor/navbarsuv/update-result/update-result.component';
import { NotificationsuperComponent } from './supervisor/navbarsuv/notificationsuper/notificationsuper.component';
import { AnnouncementsuperComponent } from './supervisor/navbarsuv/announcementsuper/announcementsuper.component';
import { UpdatepassauperComponent } from './supervisor/navbarsuv/updatepassauper/updatepassauper.component';
import { SeecourseComponent } from './supervisor/navbarsuv/seecourse/seecourse.component';
import { AssignStudetailsComponent } from './supervisor/navbarsuv/assign-stu/assign-studetails/assign-studetails.component';
export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: 'forget', component: ForgetpasswordComponent
    },

    // student

    {
      path: 'student', component: StudentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dashboard', component:  NavbarComponent,
    children: [{ path: '', component: DashboardsComponent, canActivate: [AuthGuard] }]
},
{
    path: 'assignedsup', component:  NavbarComponent,
    children: [{ path: '', component: AssignedsupComponent, canActivate: [AuthGuard]  }]
},
{
    path: 'checkres', component:  NavbarComponent,
    children: [{ path: '', component: CheckresComponent, canActivate: [AuthGuard]  }]
},
{
    path: 'notification', component:  NavbarComponent,
    children: [{ path: '', component: NotificationComponent, canActivate: [AuthGuard]  }]
},
{
    path: 'reqsup', component:  NavbarComponent,
    children: [{ path: '', component: ReqsupComponent, canActivate: [AuthGuard]  }]
},
{
  path: 'editstuprof', component:  NavbarComponent,
  children: [{ path: '', component: EditstuprofComponent, canActivate: [AuthGuard]  }]
},
{
  path: 'inbox', component:  NavbarComponent,
  children: [{ path: '', component: InboxComponent, canActivate: [AuthGuard]  }]
},
{
  path: 'uploadcourse', component:  NavbarComponent,
  children: [{ path: '', component: UpcourComponent, canActivate: [AuthGuard]  }]
},
  {
  path: 'updatepassstu', component:  NavbarComponent,
  children: [{ path: '', component: UpdatepassstuuComponent, canActivate: [AuthGuard]  }]
},
// admin
{
  path: 'admin', component: AdminComponent, canActivate: [AuthGuard]
},
  {
    path: 'dashboardad', component:  NavbaradComponent,
    children: [{ path: '', component: DashboardadComponent, canActivate: [AuthGuard] }]
},
{
  path: 'superdetail', component:  NavbaradComponent,
  children: [{ path: '', component: SupervisiorComponent, canActivate: [AuthGuard] }]
},
{
  path: 'studet', component:  NavbaradComponent,
  children: [{ path: '', component: StudetComponent, canActivate: [AuthGuard] }]
},
{
  path: 'stucreate', component:  NavbaradComponent,
  children: [{ path: '', component: StucreateComponent, canActivate: [AuthGuard] }]
},
{
  path: 'superedit', component:  NavbaradComponent,
  children: [{ path: '', component: SupervisComponent, canActivate: [AuthGuard] }]
},
{
  path: 'supcreate', component:  NavbaradComponent,
  children: [{ path: '', component: SupcreateComponent, canActivate: [AuthGuard] }]
},
{
  path: 'studetail', component:  NavbaradComponent,
  children: [{ path: '', component: StudentdetailComponent, canActivate: [AuthGuard] }]
},
{
  path: 'assignesuper', component:  NavbaradComponent,
  children: [{ path: '', component: AssignSupervisiorComponent, canActivate: [AuthGuard] }]
},
{
  path: 'sturessuper', component:  NavbaradComponent,
  children: [{ path: '', component: StudentRequestComponent, canActivate: [AuthGuard] }]
},
{
  path: 'viewres', component:  NavbaradComponent,
  children: [{ path: '', component: ViewResultsComponent, canActivate: [AuthGuard] }]
},
{
  path: 'notificationad', component:  NavbaradComponent,
  children: [{ path: '', component: NotificationadComponent, canActivate: [AuthGuard] }]
},
{
  path: 'announcementad', component:  NavbaradComponent,
  children: [{ path: '', component:  AnnouncementadComponent , canActivate: [AuthGuard] }]
},
{
  path: 'Message', component:  NavbaradComponent,
  children: [{ path: '', component: MessageComponent, canActivate: [AuthGuard] }]
},

{
  path: 'updatepasswordadmin', component:  NavbaradComponent,
  children: [{ path: '', component: UpdatepasswordadminComponent, canActivate: [AuthGuard] }]
},

// supervisor

{
  path: 'supervisor', component: SupervisorComponent, canActivate: [AuthGuard]
},
{
  path: 'dashboardsuv', component:  NavbarsuvComponent,
  children: [{ path: '', component: DashboardsuvComponent, canActivate: [AuthGuard] }]
},
{
  path: 'editsupprof', component:  NavbarsuvComponent,
  children: [{ path: '', component: EditsupproComponent, canActivate: [AuthGuard] }]
},
{
  path: 'assignedstu', component:  NavbarsuvComponent,
  children: [{ path: '', component: AssignStuComponent, canActivate: [AuthGuard] }]
},
{
  path: 'seecourse', component:  NavbarsuvComponent,
  children: [{ path: '', component: SeecourseComponent, canActivate: [AuthGuard] }]
},
{
  path: 'updateres', component:  NavbarsuvComponent,
  children: [{ path: '', component: UpdateResultComponent, canActivate: [AuthGuard] }]
},
{
  path: 'notificationfroad', component:  NavbarsuvComponent,
  children: [{ path: '', component:  NotificationsuperComponent, canActivate: [AuthGuard] }]
},
{
  path: 'announad', component:  NavbarsuvComponent,
  children: [{ path: '', component: AnnouncementsuperComponent, canActivate: [AuthGuard] }]
},
  {
    path: 'studetails', component:  NavbarsuvComponent,
    children: [{ path: '', component: AssignStudetailsComponent, canActivate: [AuthGuard] }]
  },
  {
  path: 'updatepasssuv', component:  NavbarsuvComponent,
  children: [{ path: '', component: UpdatepassauperComponent, canActivate: [AuthGuard] }]
},


    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
