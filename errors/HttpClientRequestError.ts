/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HttpClientError} from './HttpClientError';

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export class HttpClientRequestError<T extends any> extends HttpClientError {
    public readonly statusCode: number;

    public readonly errors: Partial<T>;

    public readonly previousError: Error;

    constructor(message: string, statusCode: number, errors: Partial<T>, previousError: Error) {
        super(message);

        this.statusCode = statusCode;
        this.errors = errors;
        this.previousError = previousError;
    }
}
