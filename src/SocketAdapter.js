import {
    Browser
} from "../utils";

import {
    eventEmitter,
    events
} from "../utils/events";

import NativeSocket from './NativeSocket';
import FlashSocket from './FlashSocket';
export default class SocketAdapter {

    socketType = Browser.Ie && !Browser.Ie11 && !Browser.Edge ? 'flash_socket' : (localStorage.getItem('socketType') || 'native_socket');
    // 默认配置
    _defaultConfig = {
        socketReconnectTimeArray: [3000, 6000, 9000], // socket重连的时间间隔，重连次数就是数组的长度
        url: '', // websocket url
        open: () => {}, // socket 连接成功
        message: () => {}, // socket 收到消息
        close: () => {}, // socket 断开链接
        parseMsg4Client: () => {}, // 转换服务端发送过来的数据为客户端可读格式
        parseMsg4Server: () => {} // 转换客户端要发送的数据为服务端可读格式
    };

    constructor(config) {
        if (!config.url) {
            console.error(`${config.url}不能为空`);
            return false;
        }
        this.cfg = Object.assign({}, this._defaultConfig, config);
        this._init();
    }

    _init() {
        console.log('初始化开始');
    }

    _connect() {
        //选择socket并初始化
    }

    /**Sock重连 */
    _reconnect() {

    }

    /**
     * @method socket连接成功
     * 
     */
    open() {
        // 重置重连次数
        this._socketReconnectTime = 0;

        this.cfg.open();
    }

    /**
     * @method socket连接关闭
     * @param {String} closeType 关闭的模式
     */
    close(closeType) {
        this.cfg.close();
        // if (closeType != 'pageUnload') {
        //     this._reconnect();
        // }
    }

    /**
     * @method socket收到消息
     * @param {Object} rawMessage 收到的未经过任何处理的原始消息
     * @description 
     */
    message(rawMessage) {
        // 转换消息格式为client可读
        let messageForClient = this.cfg.parseMsg4Client(rawMessage);
        // master直接使用messageForClient
        this.cfg.message(messageForClient);
    }

    /**
     * @method 发送消息
     * @param {Object} message 消息体
     */
    send(message) {
        let messageForServer = this.cfg.parseMsg4Server(message);
        this.socketConnection.send(messageForServer);

    }

    /**
     * @method 销毁连接
     */
    destroy() {
        //其他操作
        // 销毁socket连接
        if (this.socketConnection !== null) {
            this.socketConnection.close();
            this.socketConnection = null;
        }
    }

}