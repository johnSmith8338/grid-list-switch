import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { GridIcon } from "../../../../components/grid-icon/grid-icon";
import { ListIcon } from "../../../../components/list-icon/list-icon";

export type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-content-switcher',
  imports: [GridIcon, ListIcon],
  templateUrl: './content-switcher.html',
  styleUrl: './content-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSwitcher {
  readonly mode = model<ViewMode>('grid');

  protected set(mode: ViewMode) {
    this.mode.set(mode);
  }
}
