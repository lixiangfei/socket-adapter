对于不支持WebSocket的浏览器，通常做法是在页面嵌入swf文件，通过js调用as3的方法，通过flash来进行通信，该项目对两种方式进行简单的封装

# socketLink

## 基本模块
    -- CCLink（业务层：封装weblink模块）
    -- MultiTabSocket（底层：多tab socket通信模块，一般不需要使用里面的方法）
    ---- FlashSocket（底层：flash socket封装，集成在MultiTabSocket内）
    ---- NativeSocket（底层：flash socket封装，集成在MultiTabSocket内）
    -- Utils（通用方法）

## CCLink

### 使用方法

1. 引入cclink.js
```html
<!-- 内网 -->
<script type="test/javascript" src="//dev.cc.163.com/web/beta/cclink/cclink.js"></script>
<!-- 外网 -->
<script type="text/javascript" src="//cc.res.netease.com/act/common/cclink/v0.1.0/cclink.js"></script>
```

2. 创建CCLink实例
```javascript
if (window.CCLink && !window.ccLink) {
    window.ccLink = new window.CCLink(
        {
            // 必选配置：根据内外网自行填写
            url: 'weblink.dev.cc.163.com',
            // 必选配置：是否使用wss，true 或 false
            useWss: false,
            // 可选配置：用户的urs账号，传了则表示用户已经登录，未传则表示用户没有登录
            urs: 'xxx@163.com', 
            // 必选配置
            // masterTab会在连接socket并注册等一系列完成后调用ready
            // childTab会在检测到master存活时调用
            // type 为child或master
            ready: function (type) {
                console.log('ready, type: ' + type);
            },
            // 可选配置，监听所有的信息
            onMessageAll: function (msg) {
                console.log('onMessageAll: ', msg);
            },
            // 可选配置，从child升级为master需要执行的内容
            master: function () {
                console.log('upgradeMasterFromChild!');
            }
        },
        // 可选配置，方法集合，将这些方法绑定到ccLink实例，其中this指向为ccLink，注意不要用箭头函数， 会修改this指向
        // 如：const Events_Will_Bind_To_Instance_Of_CCLink = {
        //        getAnchorName: function() {
        //            this.send({...someMsgObject});
        //        }
        //        getMyLevel: function() {
        //            this.send({...someMsgObject});
        //        }
        //    }
        Events_Will_Bind_To_Instance_Of_CCLink
    );
}
// 注意：以上ccLink中配置的function，this指向均为ccLink。
```

### CCLink实例属性、方法

1. `.MTS` 多tab socket底层模块实例，一般不需要用
```javascript
ccLink.MTS
```

2. `.eventEmitter` eventEmitter实例，如果自己不想引入eventEmitter的话可以使用
```javascript
ccLink.eventEmitter
```

3. `.send(msgObject)` 发送消息体
```javascript
/**
 * [send 发送消息体]
 * @param  {[int]} ccsid [ccsid] required
 * @param  {[int]} cccid [cccid] required
 */
ccLink.send({
    ccsid: 512,
    cccid: 1,
    roomId: xxx,
    cid: xxx,
    gametype: xxx
});
```

4. `onMessage` 订阅消息(持续订阅)
```javascript
/**
 * [onMessage 订阅消息(持续订阅)]
 * @param  {[int]} ccsid [ccsid] required
 * @param  {[int]} cccid [cccid] required
 * @param  {[function]} callback [回调函数] required
 */
ccLink.onMessage(ccsid, cccid, msgHandler);
```

5. `onMessageOnce` 订阅消息(单次订阅，阅后即焚)
```javascript
/**
 * [onMessageOnce 订阅消息(单次订阅，阅后即焚)]
 * @param  {[int]} ccsid [ccsid] required
 * @param  {[int]} cccid [cccid] required
 * @param  {[function]} callback [回调函数] required
 */
ccLink.onMessageOnce(ccsid, cccid, msgHandler);
```

6. `destroy` 销毁MTS，断开连接
```javascript
ccLink.destroy();
```

7. `command` 提供给flash使用，页面不要用

## MultiTabSocket(MTS)
### FlashSocket
### NativaSocket
