# 服务架构

## 服务供应商

| 服务           | 供应商             | 注册地          |
| -------------- | ------------------ | --------------- |
| 域名注册商     | Porkbun LLC        | 美国 :us:       |
| 域名解析与 CDN | Cloudflare, Inc    | 美国 :us:       |
| 主服务器       | OVH SAS            | 法国 :fr:       |
| 附属服务器     | Frantech Solutions | 加拿大 :canada: |

## 服务关系

| 内部代号 | 承载的服务               |
| -------- | ------------------------ |
| d-1      | Misskey                  |
| d-2      | Matrix + 中继 + 媒体代理 |
| v-1      | 邮件转发服务 + 部分 bot  |
| v-2      | 媒体资源反向代理保护     |
| v-3      | 开发环境                 |

## 服务器配置

| 内部代号 | 类型       | 机房所在地 | 处理器               | 内存                    | 硬盘              |
| -------- | ---------- | ---------- | -------------------- | ----------------------- | ----------------- |
| d-1      | 独立服务器 | :canada:   | Intel Xeon E5-1650v3 | 64 GB DDR4 ECC 2133 MHz | 2×480 GB SSD SATA |
| d-2      | 独立服务器 | :canada:   | Intel Xeon E3-1245v2 | 32 GB DDR3 1333 MHz     | 2×800 GB SSD SATA |
| v-1      | VPS        | :canada:   | 1 vCore              | 2 GB                    | 20 GB             |
| v-2      | VPS        | :us:       | 1 vCore              | 1 GB                    | 20 GB             |
| v-3      | VPS        | :canada:   | 4 vCore              | 16 GB                   | 30 GB             |
