import { trigger, transition, style, animate } from '@angular/animations';

export const arrowLeftAnimation =
    trigger('arrowLeftAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-30px)',
                opacity: 0,
            }),
            animate('.6s .6s ease-out',
                style({
                    transform: '*',
                    opacity: '*'
                }))
        ]),
        transition(':leave', [
            style({
                // transform: '*',
                opacity: '*'
            }),
            animate('0.9s ease-in',
                style({
                    // transform: 'translateY(30px)',
                    opacity: 0,
                }))
        ])
    ]);
