import { trigger, transition, style, animate } from '@angular/animations';

export const projectTitleAnimation =
    trigger('projectTitleAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-30px)',
                opacity: 0,
            }),
            animate('.3s 1s ease-out',
                style({
                    transform: '*',
                    opacity: '*'
                }))
        ]),
        transition(':leave', [
            style({
                transform: '*',
                opacity: '*'
            }),
            animate('0.3s ease-in',
                style({
                    transform: 'translateX(-30px)',
                    opacity: 0,
                }))
        ])
    ]);
