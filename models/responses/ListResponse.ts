/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {MapKey} from './../MapKey';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export interface ListResponse<T = MapKey> {
    page: number;
    limit: number;
    pages: number;
    total: number;
    results: T[];
}
