import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const DropRightAnimation = trigger('dropRightAnimation', [
  transition(':enter', [
    style({ width: 0, overflow: 'hidden' }),
    query('.animated', [style({ opacity: 0, transform: 'translateY(-50px)' })]),
    sequence([
      animate('200ms', style({ width: '*' })),
      query('.animated', [
        stagger(-50, [
          animate('400ms ease', style({ opacity: 1, transform: 'none' })),
        ]),
      ]),
    ]),
  ]),

  transition(':leave', [
    style({ width: '*', overflow: 'hidden' }),
    query('.animated', [style({ opacity: 1, transform: 'none' })]),
    sequence([
      query('.animated', [
        stagger(50, [
          animate(
            '400ms ease',
            style({ opacity: 0, transform: 'translateY(-50px)' })
          ),
        ]),
      ]),
      animate('200ms', style({ width: 0 })),
    ]),
  ]),
]);
