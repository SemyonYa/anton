import { trigger, transition, style, animate, group } from '@angular/animations';

export const projectTitleAnimation =
    trigger('projectTitleAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-30px)',
                opacity: 0,
                height: 0,
            }),
            group([
                animate('.6s .3s ease-out',
                    style({
                        height: '*',
                    })),
                animate('.6s 1s ease-out',
                    style({
                        transform: '*',
                        opacity: '*'
                    })),
            ])
        ]),
        // transition(':leave', [
        //     style({
        //         transform: '*',
        //         opacity: '*'
        //     }),
        //     animate('0.3s ease-in',
        //         style({
        //             transform: 'translateX(-30px)',
        //             opacity: 0,
        //         }))
        // ])
    ]);
