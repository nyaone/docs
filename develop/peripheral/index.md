# 基于 Misskey 平台的周边生态开发

## 限制与使用规约

我们开放 API 的使用权限，允许本站注册用户在遵守[合理使用规约](/aup/)的情况下适度使用本站的 API ，以进一步提升使用体验。

出于对整个联邦宇宙的资源合理利用原则，您不应当使用自动化程式高频执行任何意义上的操作，包括但不仅限于关注与取消关注、发送贴文、发送消息、搜索、获取数据等。站点使用 CloudFlare 进行保护，Misskey 本身也自带一套 API 速率限制的设置，请避免行为因请求过于频繁而遭到系统的保护性限制。

另外，出于提高辨识度的考虑，如果是只用于 bot 功能的账号，推荐您开启账号中的 bot 标记。

无论出于何种原因，如果您的账号出现了违反服务条款的行为，您都需要承担相应的责任。

## Misskey 的授权模式

请参见 [Misskey 的授权模式](./auth/)

## 使用 API Token

### 标准的使用方式

以获取当前用户信息为例，使用的 API 地址为 `/api/i` 。

该接口为使用 `POST` 方式提交 `json` 数据，请注意设置请求头中的 `Content-Type` 为 `application/json` ，以避免 HTTP 415 错误。

该接口需要传入的请求体为：

```json
{
  "i": "API Token"
}
```

返回结果的格式也是 JSON 。

当 API Token 正确时，会返回一个包含用户信息的 Object 。

### 进阶的使用方式

喵窝开发了一套简单的 API 转换工具，以尽可能提升 API 调用方式的兼容性。

您可以在 [nyaone/apiwrap](https://github.com/nyaone/apiwrap) 获取到这个工具的源码。这个工具可以用于兼容各种 API 调用模式，并以您喜欢的请求（例如 GET 来拉取， DELETE 来删除）来与 Misskey 的 API 进行交互。

但如果**非必要**，我们**不推荐**您使用这个工具。如果您是针对 Misskey 进行开发工作，而非用于将 Misskey 的接口接入其他现行可用的接口的话，我们更推荐您使用 Misskey 官方的请求接口，以避免可能出现的可用性问题。

对喵窝来说，我们将这个工具部署在 `https://api.nya.one` ，并省略了直接调用 Misskey 官方接口时所需提供的 `/api/` 路径。也就是您可以通过形如 `https://api.nya.one/i?i=xxxx` 的方式来调用它。

例如，我们在对喵窝的 [OAuth2](./auth/#oauth2) 改造过程中使用到了这个工具。因为当 OAuth2 客户端拿到 Token 后，会使用 `Authorization: Bearer <token>` 的方式 GET 请求用户信息端点以拉取信息，但 Misskey 自身是不支持这样的调用方式的，所以我们使用这个工具进行了一次中转。

## API 文档

Misskey 有内置的 API 文档系统，可以在 [/api-doc](https://nya.one/api-doc) 访问得到，不过请注意不同版本的请求接口可能会有些许变更，当之前的代码不再可用时您可以先尝试排查是否是由站点的版本升级导致。

需要注意的是，因为 Misskey 的接口多而复杂，打开这个内置文档时需要使用客户端整理所有的端点资讯，可能会出现浏览器的阻塞卡顿。如果您的计算机性能不佳，不是很推荐访问这个文档。

Misskey 官方提供了一套[独立的 API 文档系统](https://misskey-hub.net/docs/api/endpoints.html)，相对来说不那么消耗性能，但缺点是它只有日文版本的，您可以酌情参考使用。

## SDK

Misskey 官方提供了 JavaScript / TypeScript 使用的 SDK [misskey.js](https://github.com/misskey-dev/misskey.js) ，您可以直接使用。

也有一些第三方的 SDK 提供，您可以参照 Misskey Hub 上的 [ライブラリの一覧](https://misskey-hub.net/docs/api/libraries.html)。

另外，本站有时也会有一些我们开发的工具代码，您可以在 [nyaone](https://github.com/nyaone) 得到参考。
