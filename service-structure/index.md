# 服务架构

## 服务供应商

| 服务           | 供应商                   | 注册地    |
| -------------- | ------------------------ | --------- |
| 域名注册商     | Porkbun LLC              | 美国 :us: |
| 域名解析与 CDN | Cloudflare, Inc          | 美国 :us: |
| 服务器         | OVH SAS                  | 法国 :fr: |
| 对象存储       | Wasabi Technologies, Inc | 美国 :us: |

## 服务关系

| 内部代号 | 承载的服务                          | 功能           |
| -------- | ----------------------------------- | -------------- |
| d-1      | Misskey + MiSSO                     | 主站服务器     |
| d-2      | Matrix + 中继 + 媒体代理 + 开发环境 | 附属服务器     |
| d-3      | meilisearch                         | 搜索引擎       |
| v-1      | 邮件转发服务                        | 邮件转发服务器 |

## 服务器配置

| 内部代号 | 类型       | 所在机房      | 处理器               | 内存               | 硬盘              |
| -------- | ---------- | ------------- | -------------------- | ------------------ | ----------------- |
| d-1      | 独立服务器 | BHS7 :canada: | Intel Xeon E3-1270v6 | 32 GB ECC 2400 MHz | 2×450 GB SSD NVMe |
| d-2      | 独立服务器 | BHS2 :canada: | Intel Xeon E3-1245v2 | 32 GB 1333 MHz     | 2×800 GB SSD SATA |
| d-3      | 独立服务器 | BHS2 :canada: | Intel Xeon E3-1245v2 | 32 GB 1333 MHz     | 3×2 TB HDD SATA   |
| v-1      | VPS        | BHS2 :canada: | 1 vCore              | 2 GB               | 20 GB             |
