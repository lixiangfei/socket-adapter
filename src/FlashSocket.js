/**
 * 负责在页面中嵌入 通信的swf
 */
import swfObjEmbed from './swfobject';
import socketSwfUrl from './FlashSocket.swf';
export default class FlashSocket {

    swfUrl = socketSwfUrl;
    
    constructor(config) {

        // this.swfUrl = socketSwfUrl;
        //生成嵌入swf的容器
        this.swfContainer = document.createElement('div');

        this.swfWidth = '1px';
        this.swfHeight = '1px';
        this.swfContentId = 'FLASH_SOCKET_SWF';
        this.swfObject = null;
        this.socketCfg = Object.assign({}, config);

        this.swfContent.id = this.swfContentId;
        this.swfContent.style.width = this.swfWidth;
        this.swfContent.style.height = this.swfHeight;

        document.body.appendChild(this.swfContainer);

        this._createSwfObject();

    }

    //https://blog.csdn.net/maco_liao/article/details/50945719
    _createSwfObject() {
        let swfVersionStr = '9.0.0',
            xiSwfUrlStr = 'expressInstall.swf',
            flashvars = {},
            params = {},
            attributes = {};

        params.base = '.';
        params.wmode = 'transparent';
        params.allowscriptaccess = 'always'; //允许脚本执行
        params.allowfullscreen = 'true';
        params.allowFullScreenInteractive = 'true';

        attributes.id = 'Flash_Socket_Swf';
        attributes.name = 'Flash_Socket_Swf';
        attributes.align = 'middle';

        swfObjEmbed.embedSWF(
            this.swfUrl,
            this.swfContentId,
            this.swfWidth,
            this.swfHeight,
            swfVersionStr,
            flashvars,
            params,
            attributes,
            this._loaded.bind(this)
        );
    }

    /**
     * swf中有对应函数
     * ExternalInterface.addCallback('socketFlash.Command', function(cmd, msg){
     * 
     * })
     */
    get socketCommandFunc() {
        return this.swfObject["socketFlash.Command"];
    }

    _loaded(res) {
        if (res.success) {
            this.swfObject = res.ref;
        } else {
            console.log('加载flash_socket失败');
        }
    }

    //flashSocket加载完成时候调用
    connectServer() {
        //
        var ip = this.socketCfg.ip;
        var port = this.socketCfg.port;
        if (typeof ip == 'undefined' || typeof port == 'undefined') {
            console.log('传入ip以及端口');
            return;
        }
        var server = {
                'serverIp': ip,
                'serverPort': port
            }
            //通知flash链接socket
        this.socketCommandFunc("connect_server", JSON.stringify(server));
    }

    send(msgObject) {
        this.socketCommandFunc("send_data", JSON.stringify(msgObject));
    }

    close() {
        this.socketCommandFunc("close_socket");
    }

    /**
     * @method 连接socket成功事件
     */
    onopen() {
        //链接成功的初始化操作
        this.socketConfig.onopen();
    }

    /**
     * @method 收到socket消息事件
     */
    onmessage(msg) {
        this.socketConfig.onmessage(msg);
    }

    /**
     * @method 收到socket关闭事件
     */
    onclose() {
        this.socketConfig.onclose();
    }
}