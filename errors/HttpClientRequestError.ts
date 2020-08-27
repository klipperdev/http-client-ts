/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HttpClientError} from '@klipper/http-client/errors/HttpClientError';
import {Errors} from '@klipper/http-client/models/responses/Errors';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export class HttpClientRequestError extends HttpClientError {
    public readonly statusCode: number;

    public readonly errors: Errors;

    public readonly previousError: Error;

    constructor(message: string, statusCode: number, errors: Errors, previousError: Error) {
        super(message);

        this.statusCode = statusCode;
        this.errors = errors;
        this.previousError = previousError;
    }
}
