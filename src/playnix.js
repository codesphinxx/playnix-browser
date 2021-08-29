import {PlaynixBaseClient} from 'playnix-core';
import {lognetic} from 'lognetic-browser';
import {PlaynixOptions} from 'playnix-types';

class PlaynixSession extends PlaynixBaseClient
{
    /**
    * @protected
    * @param {PlaynixOptions} options
    */
    _setup(options)
    {
        lognetic.init(options);
        this.options = lognetic.options;
        this.lognetic = lognetic;              
    }

    /**
     * @private
     * @param {String} method
     * @param {String} url
     */
    _createXHR(method, url)
    {
        let xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        return xhttp;
    }

    /**
     * @public
     * @param {String} sid Social prodiver user Id
     * @param {String} provider Social provider ie {Goole, Facebook}
     * @param {String} token Access token generated from social login
     */
    authenticate(sid, provider, token) 
    {
        let data = {
            sid,
            token,
            client:this.game
        };

        return new Promise((resolve, reject) => {
            let xhr = this._createXHR('POST', `${this.options.protocol}:${this.options.uri}/auth/${provider}`);
            
            xhr.onload = () => {
                if (xhr.status == 200) 
                {
                    let resp = JSON.parse(xhr.responseText);
                    this.token = resp.token;
                    delete resp.token;
                    resolve(resp);
                } 
                else 
                {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(JSON.stringify(data));
        });
    }

    getLoginStatus() 
    {
        throw new Error('NotImplementedException: This method was not implemented for the target framework');
    }

    /**
     * @public
     * @param {Object} data Player data
     */
    saveGameData(data) 
    {
        return new Promise((resolve, reject) => {
            let xhr = this._createXHR('POST', `${this.options.protocol}:${this.options.uri}/api/player`);
            xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);
            
            xhr.onload = () => {
                if (xhr.status == 200) 
                {
                    resolve(JSON.parse(xhr.responseText));
                } 
                else 
                {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(JSON.stringify(data));
        });
    }

    /**
     * @public
     */
    loadGameData() 
    {
        return new Promise((resolve, reject) => {
            let xhr = this._createXHR('GET', `${this.options.protocol}:${this.options.uri}/api/player`);
            xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);
            
            xhr.onload = () => {
                if (xhr.status == 200)
                {
                    resolve(JSON.parse(xhr.responseText));
                } 
                else 
                {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
}

const singleton = new PlaynixSession();
export default singleton;