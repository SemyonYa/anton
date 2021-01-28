import { trigger, transition, style, animate } from '@angular/animations';

export const pageAnimation =
    trigger('pageAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(30px)',
                opacity: 0,
            }),
            animate('.6s .3s ease-out',
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
