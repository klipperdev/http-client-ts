/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Canceler} from './Canceler';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export class CancelerBag {
    private bag: Canceler[] = [];

    public all(): Canceler[] {
        return this.bag;
    }

    public has(canceler: Canceler): boolean {
        return this.bag.indexOf(canceler) > -1;
    }

    public add(canceler: Canceler): Canceler {
        this.bag.push(canceler);

        return canceler;
    }

    public remove(canceler: Canceler): void {
        const  index = this.bag.indexOf(canceler);

        if (index > -1) {
            this.bag.splice(index, 1);
        }
    }

    public cancelAll(): void {
        const cancelers = this.bag;
        this.bag = [];

        for (const canceler of cancelers) {
            canceler.cancel();
        }
    }
}
