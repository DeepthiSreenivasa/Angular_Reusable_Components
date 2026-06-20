import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchWithDebounce } from '../../components/search-with-debounce/search-with-debounce';
import { CommentThread } from '../../components/comment-thread/comment-thread';
import { MainLayout } from '../../layout/main-layout/main-layout';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'SearchWithDebounce',
    component: SearchWithDebounce,
  },
  { path: 'CommentThread', component: CommentThread },
  { path: 'Home', component: MainLayout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
