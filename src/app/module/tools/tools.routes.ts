import {ToolsComponent} from '../../tools/tools.component';
import {WeatherComponent} from '../../tools/weather/weather.component';
import {MapComponent} from '../../tools/map/map.component';
import {ExpressComponent} from '../../tools/express/express.component';
import {SoundComponent} from '../../ai/sound/sound.component';
import {PhotoComponent} from '../../ai/photo/photo.component';
import {NoteComponent} from '../../note/note.component';
import {SongComponent} from '../../song/song.component';
import {LoginService} from '../../serve/login.service';
import {EditComponent} from '../../admin/edit/edit.component';
import {WordEditComponent} from '../../word-edit/word-edit.component';

export const ToolRoutes = [
  {
    path: 'tools',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: WeatherComponent
      },
      {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'express',
        component: ExpressComponent
      },
    ]
  },
  {
    path: 'ai',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: SoundComponent
      },
      {
        path: 'sound',
        component: SoundComponent
      },
      {
        path: 'photo',
        component: PhotoComponent
      }
    ]
  },
  {
    path: 'note',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: NoteComponent
      }
    ]
  },
  {
    path: 'song',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: SongComponent
      }
    ]
  },
  {
    path: 'edit',
    component: ToolsComponent,
    children: [
      {
        path: '',
        component: WordEditComponent
      }
    ]
  }
];
