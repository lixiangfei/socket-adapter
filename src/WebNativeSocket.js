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


    constructor(config) {
        this.socketCfg = Object.assign({}, config);

        return this.connect();
    }

    connect() {
        var ws = new WebSocket(this.socketCfg.url);
        ws.binaryType = 'arraybuffer'; //Note:显示指定收到的是arraybuffer

        ws.onopen = () => this.socketCfg.onopen();

        ws.onmessage = evt => this.socketCfg.onmessage(evt.data);

        ws.onclose = () => this.socketCfg.onclose();

        return ws;
    }
}