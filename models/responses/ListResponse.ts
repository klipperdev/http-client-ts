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
export interface ListResponse<T = Record<string, any>> {
    page: number;
    limit: number;
    pages: number;
    total: number;
    results: T[];
}

export async function createEmptyListResponse(): Promise<ListResponse> {
    return Promise.resolve({
        limit: 0,
        page: 1,
        pages: 1,
        results: [],
        total: 0,
    } as ListResponse);
}
