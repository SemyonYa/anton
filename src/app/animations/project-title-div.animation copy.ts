import { trigger, transition, style, animate } from '@angular/animations';

export const projectTitleDivAnimation =
    trigger('projectTitleDivAnimation', [
        transition(':enter', [
            style({
                height: '0',
                opacity: '0',
            }),
            animate('1s 1s ease-out',
                style({
                    height: '*',
                    opacity: '*',
                }))
        ]),
        transition(':leave', [
            style({
                height: '*',
                opacity: '*',
            }),
            animate('0.3s ease-in',
                style({
                    height: '0',
                    opacity: '0',
                }))
        ])
    ]);
