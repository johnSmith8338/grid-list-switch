import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ViewMode, ViewToggle } from "./ui/view-toggle/view-toggle";
import { CardData, DataSvc } from '../../services/data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-layout',
  imports: [ViewToggle],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout implements OnInit {
  private dataSvc = inject(DataSvc);
  private destroyRef = inject(DestroyRef);

  cards = signal<CardData[]>([]);
  protected viewMode = signal<ViewMode>('grid');

  ngOnInit(): void {
    this.dataSvc.getCardsData().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(cards => {
      this.cards.set(cards);
    })
  }
}
