export default class SocketLink {
    // 是否cfg.ready已经执行，只执行一次
    _readyExecuted = false;

    constructor(config) {
        this.cfg = Object.assign({
            // 默认websocket url
            url: '',
            // 是否使用wss，默认false
            useWss: false,
            // 初始化完成后执行
            ready: () => {}
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

    /**socket初始化完成，sock连接后调用 */
    _ready(readyType) {

    }

    /**
     * sock连接成功
     */
    _open() {

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
    }

    send(msgObject) {
        //发送消息
    }

    /**
     * @method 提供给flash_socket调用，用于flash_socket通知页面消息
     * @param {String} command类型
     * @param {String} msg消息体
     */
    command(command, msgString) {

        // 第一次decode
        let msgStringDecoded = decodeURIComponent(msgString);


        let flashSocketConnection = this.MTS.socketConnection;

        if (command == 'receive_data') {
            // 这里需要decode多一次，因为flash那边encode了两次~~~
            let msgStringDecodedTwice = decodeURIComponent(msgStringDecoded);

            debug.ccLinkFlashMsg('receive_data', JSON.parse(msgStringDecodedTwice));

            flashSocketConnection.onmessage(msgStringDecodedTwice);
        } else {

            // 因为已经启用roomApi.player.msg，不打印出来
            if (command != 'roomApi.player.msg') {
                debug.ccLinkFlashMsg(command);
            }

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
     * @description native_socket模式下收到的消息为ArrayBuffer
     * @description flash_socket模式下为JSON（stringified）
     */
    _parseMsg4Client(rawMessage) {
        // 区分是原生socket还是flashsocket，原生socket需要转换，flashsocket直接将rawMessage替换一下换行符即可
        if (this.SOCK.socketType == 'native_socket') {
            // 将 ArrayBuffer 转为 Uint8Array
            let msgArrayUint8Array = new Uint8Array(rawMessage);

            // 解密
            if (this._rc4Key.recv) {
                msgArrayUint8Array = this._rc4Key.recv.encrypt(msgArrayUint8Array);
            }

            // 将buffer(Uint8Array)转为前端可读
            return Message.unpack(msgArrayUint8Array).format('json');
        }

        return Message.replaceLinkBreak(rawMessage);
    }
    destroy() {
        this.SOCK.destroy();
    }
}