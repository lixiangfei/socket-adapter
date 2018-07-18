import {
    eventEmitter,
    events
} from "./utils/events";

import Message from './msg/AbstractMessage';
import RC4 from './libs/rc4-es5';

import SocketAdapter from './SocketAdapter';

export default class SocketLink {



    constructor(config) {
        this.eventEmitter = eventEmitter;
        this.cfg = Object.assign({
            // 默认websocket url
            url: '',
            // 是否使用wss，默认false
            useWss: false,
            // 初始化完成后执行
            ready: () => {},
            messageKey: (data) => {
                return `msg-${data.sid}=${data.cid}`
            },
            //sock连接之后调用
            open: () => {}
        }, config);

        this.cfg.url = (this.cfg.useWss ? 'wss://' : 'ws://') + this.cfg.url;
        this._createSocketAdapter();
    }

    _createSocketAdapter() {
        this.SOCK = new SocketAdapter({
            url: this.cfg.url,
            open: this._open.bind(this),
            message: this._message.bind(this),
            close: this._close.bind(this),
            ready: this._ready.bind(this),
            parseMsg4Client: this._parseMsg4Client.bind(this),
            parseMsg4Server: this._parseMsg4Server.bind(this)
        });
    }

    /**
     * sock连接成功，在sock中被调用
     */
    _open() {
        console.log('链接sock');
        this.cfg.open.bind(this)();
    }

    /** 
     * sock连接关闭
     */
    _close() {
        console.log('连接关闭');
    }

    /**
     * 
     * @param {*} msgObject 收到消息处理 
     */
    _message(msgObject) {
        //包解析处理
        //或者抛出数据
        var msgKey = this.cfg.messageKey(msgObject);
        this.eventEmitter.emit(msgKey, msgObject);
    }

    send(msgObject) {
        if (this.destroyed) {
            console.log("destroyed");
            return;
        }
        //发送消息
        console.log("sendMsg:" + msgObject);
        this.SOCK.send(msgObject);
    }

    /**
     * @method 提供给flash_socket调用，方法调用说明使用FLASH-SOCK
     * @param {String} command类型
     * @param {String} msg消息体
     */
    command(command, msgString) {

        // 第一次decode
        let msgStringDecoded = decodeURIComponent(msgString);
        let flashSocketConnection = this.SOCK.socketConnection;

        if (command == 'receive_data') {
            debug.ccLinkFlashMsg('receive_data', JSON.parse(msgStringDecoded));
            flashSocketConnection.onmessage(msgStringDecodedTwice);
        } else {
            if (command == 'socket_flash_ready') {
                flashSocketConnection.connectServer();
            } else if (command == 'socket_connect_success') {
                flashSocketConnection.onopen();
            } else if (command == 'socket_connect_close') {
                flashSocketConnection.onclose();
            }
        }
    }


    /**
     * @method 格式化收到的消息为JSON格式
     * @param {Object} rawMessage 收到的消息体
     * @returns {Object} 格式化后的消息体，json
     * @description websocket模式下收到的消息为ArrayBuffer
     * @description flash_socket模式下为JSON（stringified）
     */
    _parseMsg4Client(rawMessage) {
        // 区分是原生socket还是flashsocket，原生socket需要转换
        if (this.SOCK.socketType == 'native_socket') {

        }
    }

    /**
     * 持续监听消息
     * @param {*} msgKeyData 用于事件拼接 
     * @param {*} msgHandler 
     */
    onMessage(msgKeyData, msgHandler) {
        let msgKey = this.cfg.messageKey(msgKeyData);
        this.eventEmitter.on(msgKey, msgHandler);
    }

    /**
     * 监听消息一次
     * @param {*} msgKeyData 
     * @param {*} msgHandler 
     */
    onMessageOnce(msgKeyData, msgHandler) {
        let msgKey = this.cfg.messageKey(msgKeyData);
        this.eventEmitter.once(msgKey, msgHandler);
    }

    destroy() {
        this.SOCK.destroy();
    }

    get destroyed() {
        return this.SOCK.destroyed;
    }
}