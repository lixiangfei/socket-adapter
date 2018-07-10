/**
 * WebSocket
 */

export default class WebNativeSocket {
    /**
     * url:socket链接地址
     * onopen{func} -->socket open处理
     * onmessage{func}--> socket onmessage处理
     * onclose{func} --》socket onclose处理
     */
    socketCfg = {};

    constructor(config) {
        this.socketCfg = Object.assign({}, this.socketCfg, config);

        return this.connect();
    }

    connect() {
        var ws = new WebSocket(this.socketCfg.url);
        ws.binaryType = 'arraybuffer'; //Note 不然blob数据无法解析

        ws.onopen = () => this.socketCfg.onopen();

        ws.onmessage = msg => this.socketCfg.onmessage(msg);

        ws.onclose = () => this.socketCfg.onclose();

        return ws;
    }
}