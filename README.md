对于不支持WebSocket的浏览器，通常做法是在页面嵌入swf文件，通过js调用as3的方法，通过flash来进行通信，该项目对两种方式进行简单的封装

# socketLink

## 基本模块
    -- socketlink 业务层
    -- SocketAdapter（底层：sock适配,代理层）
    ---- FlashSocket（底层：flash socket封装，集成在SocketAdapter内)
    ---- WebNativeSocket（底层：WebSocket封装，集成在SocketAdapter内）
    -- Utils（通用方法）



### 结构

    -------------
      socketlink          封装SocketAdapter,以及业务接口,提供发送,监听消息以及与flash交互的api
    -------------
        |
    -------------------
        SocketAdapter     1.负责sock选择与创建  2.封装底层sock的方法，供上层调用,通过构造配置将SOCK操作统一 3.负责重连
    ------------------ 
     |               |
    ---------       --------------
      WS SOCK          Flash Sock 
    --------        ---------------

    WS SOCK
    负责websocket创建返回，监听onopen,onmessage,onclose事件

    FlashSock
     负责flash swf的创建以及嵌入，提供js调用的接口以及 as调用js后的接口，共最上层调用,从而统一流程
### ws
    ws为应用层协议,内部解决了tcp的分包粘包问题,所以用来解析数据就很easy

###record
    7.18 添加webpack进行打包
 