/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Errors} from '@klipper/http-client/models/responses/Errors';
import {MessageResponse} from '@klipper/http-client/models/responses/MessageResponse';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export interface ErrorsResponse extends MessageResponse, Errors {
    code: number;
}
