import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { GridIcon } from "../../../../components/grid-icon/grid-icon";
import { ListIcon } from "../../../../components/list-icon/list-icon";

export type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-view-toggle',
  imports: [GridIcon, ListIcon],
  templateUrl: './view-toggle.html',
  styleUrl: './view-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewToggle {
  readonly mode = model<ViewMode>('grid');

  protected set(mode: ViewMode) {
    this.mode.set(mode);
  }
}
