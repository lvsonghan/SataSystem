import {RegadminComponent} from '../../admin/edit/regadmin/regadmin.component';
import {FriengsComponent} from '../../nowstatus/friengs/friengs.component';
import {AddadminComponent} from '../../admin/addadmin/addadmin.component';
import {UserComponent} from '../../user/user.component';
import {ShowadminComponent} from '../../admin/showadmin/showadmin.component';
import {NowstatusComponent} from '../../nowstatus/nowstatus.component';
import {DeladminComponent} from '../../admin/edit/deladmin/deladmin.component';
import {ShopComponent} from '../../nowstatus/shop/shop.component';
import {ResdataComponent} from '../../data/resdata/resdata.component';
import {AssaydataComponent} from '../../data/assaydata/assaydata.component';
import {OurComponent} from '../../our/our.component';
import {SettingComponent} from '../../setting/setting.component';
import {MapdataComponent} from '../../data/mapdata/mapdata.component';
import {HomeComponent} from '../../home/home.component';

export const HomeRoutes = [
  {
    path: 'data',
    component: HomeComponent,
    /*canActivate: [LoginService],*/
    children: [
      {
        path: '',
        component: ResdataComponent
      },
      {
        path: 'assaydata',
        component: AssaydataComponent
      },
      {
        path: 'mapdata',
        component: MapdataComponent
      },
      {
        path: 'resdata',
        component: ResdataComponent
      }
    ]
  },
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ShowadminComponent,
      },
      {
        path: 'show',
        component : ShowadminComponent
      },
      {
        path: 'add',
        component: AddadminComponent,
      },
      {
        path: 'del',
        component: DeladminComponent
      },
      {
        path: 'reg',
        component: RegadminComponent
      }
    ]
  },
  {
    path: 'status',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: NowstatusComponent
      },
      {
        path: 'fri',
        component: FriengsComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      }
    ]
  },
  {
    path: 'user',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UserComponent
      }
    ]
  },
  {
    path: 'about',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: OurComponent
      }
    ]
  },
  {
    path: 'setting',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SettingComponent
      }
    ]
  }
];