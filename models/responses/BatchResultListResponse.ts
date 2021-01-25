/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {BatchResultResponse} from '@klipper/http-client/models/responses/BatchResultResponse';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export interface BatchResultListResponse<T = Record<string, any>> {
    status: string;
    has_errors: boolean;
    records: BatchResultResponse[];
}
