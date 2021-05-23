import {DeviceInformer} from 'playnix-core';
import {UAParser} from 'ua-parser-js';

class BrowserInformer extends DeviceInformer
{
    init()
    {
        this.parser = new UAParser();
    }

    /**
     * @returns {{name:String,version:String}}
     */
    getOS() 
    {
        let browserData = this.parser.getResult();
        return browserData.os;
    }

    /**
    * @returns {{vendor:String,model:String}}
    */
    getDevice() 
    {
        let browserData = this.parser.getResult();
        return browserData.device;
    }

    /**
    * @returns {{name:String,version:String}}
    */
    getEngine() 
    {
        let browserData = this.parser.getResult();
        return browserData.engine;
    }
}

const instance = new BrowserInformer();
export default instance;