/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {BatchResultErrorsResponse} from '@klipper/http-client/models/responses/BatchResultErrorsResponse';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export interface BatchResultResponse<T = Record<string, any>> {
    status: string;
    id?: string|number;
    data: T;
    errors: BatchResultErrorsResponse;
}
