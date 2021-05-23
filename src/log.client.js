
import {LogClient} from 'playnix-core';
import BrowserInformer from './device.informer';
import murmurhash3_32_gc from './murmurhash3';
import WebHelper from './web.helper';
import { PlaynixOptions } from 'playnix-types';

class BrowserLogClient extends LogClient
{
    /**
    * @public
    * @description Initializes playnix's logging client for browsers.
    * @param {String} key
    * @param {PlaynixOptions} options
    */
    init(key, options)
    {
        this.registerDeviceInformer(BrowserInformer);
        super.init(key, options);
    }

    generateClientId() 
    {
        let bar = '|';
        /**
         * @type {import('ua-parser-js')}
         */
        let parser = this.deviceInformer.parser;
        let browserData = parser.getResult();
        let userAgent = browserData.ua;
        let screenPrint = WebHelper.getScreenPrint();
        let pluginList = WebHelper.getPlugins();
        let localStorage = WebHelper.isLocalStorage();
        let sessionStorage = WebHelper.isSessionStorage();
        let timeZone = WebHelper.getTimeZone();
        let language = navigator.language;
        let systemLanguage = navigator.systemLanguage;
        let cookies = navigator.cookieEnabled;
  
        let key = userAgent + bar + screenPrint + bar + pluginList + bar + localStorage + bar + sessionStorage + bar + timeZone + bar + language + bar + systemLanguage + bar + cookies;
        let seed = 256;
        
        this._client_id = murmurhash3_32_gc(key, seed);
    }
}

const singleton = new BrowserLogClient();
export default singleton;