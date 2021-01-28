import { trigger, transition, style, animate } from '@angular/animations';

export const projectTitleDivAnimation =
    trigger('projectTitleDivAnimation', [
        transition(':enter', [
            style({
                height: '0',
                opacity: '0',
            }),
            animate('.6s ease-out',
                style({
                    height: '*',
                    opacity: '*',
                }))
        ])
    ]);
