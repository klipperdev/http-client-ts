/*
 * This file is part of the Klipper package.
 *
 * (c) François Pluchino <francois.pluchino@klipper.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Interface for the map of key value.
 *
 * @author François Pluchino <francois.pluchino@klipper.dev>
 */
export interface MapKey<V = any> {
    [key: string]: V;
}
