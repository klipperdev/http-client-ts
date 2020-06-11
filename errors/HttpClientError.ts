/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export class HttpClientError extends Error {
    // tslint:disable-next-line:variable-name
    private __proto__: Error;

    /**
     * Constructor.
     *
     * @param {string} [message]
     */
    constructor(message?: string) {
        // fix checking of instanceof class extending the error (https://github.com/Microsoft/TypeScript/issues/13965)
        const trueProto = new.target.prototype;
        super(message);
        this.__proto__ = trueProto;
    }
}
