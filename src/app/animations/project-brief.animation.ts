import { trigger, transition, style, animate } from '@angular/animations';

export const projectBriefAnimation =
    trigger('projectBriefAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(30px)',
                opacity: 0,
            }),
            animate('.3s ease-out',
                style({
                    transform: '*',
                    opacity: '*'
                }))
        ]),
    ]);
