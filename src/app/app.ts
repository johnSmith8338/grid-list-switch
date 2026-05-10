import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { ViewMode } from "./pages/layout/ui/view-toggle/view-toggle";

export interface PageOption {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('grid-list-switch');

  readonly pageOptions: PageOption[] = [
    {
      id: 1,
      name: 'layout',
      link: '/'
    },
    {
      id: 2,
      name: 'component',
      link: '/component'
    },
  ]
}
