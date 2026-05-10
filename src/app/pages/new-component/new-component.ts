import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ContentSwitcher, ViewMode } from "./ui/content-switcher/content-switcher";
import { CardData, DataSvc } from '../../services/data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new-component',
  imports: [ContentSwitcher],
  templateUrl: './new-component.html',
  styleUrl: './new-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  private dataSvc = inject(DataSvc);
  private destroyRef = inject(DestroyRef);

  cards = signal<CardData[]>([]);

  ngOnInit(): void {
    this.dataSvc.getCardsData().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(cards => {
      this.cards.set(cards);
    })
  }
}
