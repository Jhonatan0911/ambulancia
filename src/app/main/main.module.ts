import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ButtonModule]
})
export class MainModule { }
