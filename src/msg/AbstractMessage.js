import msgpack5 from "../libs/msgpack.min";
import pako from '../libs/pako_inflate';

const msgpack = msgpack5();
/**消息处理 */
export default class Message {

    constructor(msgObject) {
        this.msgObject = msgObject;
    }

    /**
     * @method 格式化为json或string
     * @param {*} type 
     */
    format(type) {
        if (type == 'json') {
            return Object.assign({}, this.msgObject);
        }

        if (type == 'string') {
            return JSON.stringify(this);
        }
        return this;
    }

    /**
     * @method 打包成buffer
     * @return Uint8Array
     */
    dumps() {

    }

    /**
     * @static 解包为JSON
     * @param {Uint8Array} uint8Array 服务器返回的ArrayBuffer转成的Uint8Array
     * @returns
     */
    static unpack(uint8Array) {

    }

}