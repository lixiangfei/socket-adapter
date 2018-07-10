import 'babel-polyfill';
import msgpack5 from "./lib/msgpack.min";
import pako from './lib/pako_inflate';
/**消息处理 */
export default class Message {

    constructor(msgObject) {
        //消息处理

        //可以抽离单独的handler出来，解析不同的消息格式

    }

    /**
     * @method 格式化为json或string
     * @param {*} type 
     */
    format(type) {
            if (type == 'json') {
                return Object.assign({}, {
                    ccsid: this.ccsid,
                    cccid: this.cccid,
                }, this.msgWithOutSidCid);
            }

            if (type == 'string') {
                return JSON.stringify(this);
            }

            return this;
        }
        /**
         * @method 打包成buffer
         */
    dumps() {


            return buffer;
        }
        /**
         * @static 解包为JSON
         * @param {Uint8Array} uint8Array 服务器返回的ArrayBuffer转成的Uint8Array
         * @returns new CCMessage
         */
    static unpack(uint8Array) {

            let dv = new DataView(uint8Array.buffer);
            //todo
            return Message();
        }
        /**
         * @static 替换换行符
         * @param {String/Object} msg
         * @returns {Object} 替换后的Object
         */
    static replaceLinkBreak(msg) {

        // 如果传进来的是一个object，先转为string
        if (typeof msg === 'object') {
            msg = JSON.stringify(msg);
        }
        msg = msg.replace(/\\r\\n/g, '');
        return JSON.parse(msg);
    }
}