declare module 'playnix-browser/index' {
  export { default as playnix } from "playnix-browser/playnix";

}
declare module 'playnix-browser/playnix' {
  export default singleton;
  const singleton: PlaynixSession;
  class PlaynixSession {
      /**
      * @protected
      * @param {PlaynixOptions} options
      */
      protected _setup(options: any): void;
      options: any;
      lognetic: any;
      /**
       * @private
       * @param {String} method
       * @param {String} url
       */
      private _createXHR;
      /**
       * @public
       * @param {String} sid Social prodiver user Id
       * @param {String} provider Social provider ie {Goole, Facebook}
       * @param {String} token Access token generated from social login
       */
      public authenticate(sid: string, provider: string, token: string): Promise<any>;
      token: any;
      getLoginStatus(): void;
      /**
       * @public
       * @param {Object} data Player data
       */
      public saveGameData(data: any): Promise<any>;
      /**
       * @public
       */
      public loadGameData(): Promise<any>;
  }

}
declare module 'playnix-browser' {
  import main = require('playnix-browser/index');
  export = main;
}