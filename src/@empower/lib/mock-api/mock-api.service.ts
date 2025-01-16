import { Injectable } from '@angular/core';
import { EmpowerMockApiHandler } from '@empower/lib/mock-api/mock-api.request-handler';
import { EmpowerMockApiMethods } from '@empower/lib/mock-api/mock-api.types';
import { compact, fromPairs } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class EmpowerMockApiService {
    private _handlers: { [key: string]: Map<string, EmpowerMockApiHandler> } = {
        get: new Map<string, EmpowerMockApiHandler>(),
        post: new Map<string, EmpowerMockApiHandler>(),
        patch: new Map<string, EmpowerMockApiHandler>(),
        delete: new Map<string, EmpowerMockApiHandler>(),
        put: new Map<string, EmpowerMockApiHandler>(),
        head: new Map<string, EmpowerMockApiHandler>(),
        jsonp: new Map<string, EmpowerMockApiHandler>(),
        options: new Map<string, EmpowerMockApiHandler>(),
    };

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Find the handler from the service
     * with the given method and url
     *
     * @param method
     * @param url
     */
    findHandler(
        method: string,
        url: string
    ): {
        handler: EmpowerMockApiHandler | undefined;
        urlParams: { [key: string]: string };
    } {
        // Prepare the return object
        const matchingHandler: {
            handler: EmpowerMockApiHandler | undefined;
            urlParams: { [key: string]: string };
        } = {
            handler: undefined,
            urlParams: {},
        };

        // Split the url
        const urlParts = url.split('/');

        // Get all related request handlers
        const handlers = this._handlers[method.toLowerCase()];

        // Iterate through the handlers
        handlers.forEach((handler, handlerUrl) => {
            // Skip if there is already a matching handler
            if (matchingHandler.handler) {
                return;
            }

            // Split the handler url
            const handlerUrlParts = handlerUrl.split('/');

            // Skip if the lengths of the urls we are comparing are not the same
            if (urlParts.length !== handlerUrlParts.length) {
                return;
            }

            // Compare
            const matches = handlerUrlParts.every(
                (handlerUrlPart, index) =>
                    handlerUrlPart === urlParts[index] ||
                    handlerUrlPart.startsWith(':')
            );

            // If there is a match...
            if (matches) {
                // Assign the matching handler
                matchingHandler.handler = handler;

                // Extract and assign the parameters
                matchingHandler.urlParams = fromPairs(
                    compact(
                        handlerUrlParts.map((handlerUrlPart, index) =>
                            handlerUrlPart.startsWith(':')
                                ? [handlerUrlPart.substring(1), urlParts[index]]
                                : undefined
                        )
                    )
                );
            }
        });

        return matchingHandler;
    }

    /**
     * Register GET request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onGet(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('get', url, delay);
    }

    /**
     * Register POST request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onPost(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('post', url, delay);
    }

    /**
     * Register PATCH request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onPatch(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('patch', url, delay);
    }

    /**
     * Register DELETE request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onDelete(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('delete', url, delay);
    }

    /**
     * Register PUT request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onPut(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('put', url, delay);
    }

    /**
     * Register HEAD request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onHead(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('head', url, delay);
    }

    /**
     * Register JSONP request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onJsonp(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('jsonp', url, delay);
    }

    /**
     * Register OPTIONS request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onOptions(url: string, delay?: number): EmpowerMockApiHandler {
        return this._registerHandler('options', url, delay);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register and return a new instance of the handler
     *
     * @param method
     * @param url
     * @param delay
     * @private
     */
    private _registerHandler(
        method: EmpowerMockApiMethods,
        url: string,
        delay?: number
    ): EmpowerMockApiHandler {
        // Create a new instance of EmpowerMockApiRequestHandler
        const empowerMockHttp = new EmpowerMockApiHandler(url, delay);

        // Store the handler to access it from the interceptor
        this._handlers[method].set(url, empowerMockHttp);

        // Return the instance
        return empowerMockHttp;
    }
}
