import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchWithDebounce } from '../../components/search-with-debounce/search-with-debounce';
import { CommentThread } from '../../components/comment-thread/comment-thread';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { Forms } from '../../components/forms/forms';
import { ReactiveForms } from '../../components/reactive-forms/reactive-forms';
import { SwitchMap } from '../../components/switch-map/switch-map';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'SearchWithDebounce',
    component: SearchWithDebounce,
  },
  { path: 'CommentThread', component: CommentThread },
  { path: 'Home', component: MainLayout },
  {
    path: 'NgModuleForms',
    component: Forms,
  },
  {
    path: 'ReactiveFormsPath',
    component: ReactiveForms,
  },
  {
    path: 'SwitchMapPath',
    component: SwitchMap,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
