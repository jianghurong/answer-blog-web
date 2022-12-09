---
sidebar: auto
---

## 安装  
[Redis 下载](https://github.com/tporadowski/redis/releases)

## 启动
```shell
redis-server.exe
redis-cli.exe -h 127.0.0.1 -p 6379
```

## 数据结构  
``Redis``有五种基本数据结构  
* String
* Hash
* List
* Set
* SortedSet

``Redis``其它数据结构  
* HyperLogLog  
* Geo  
* Pub/Sub

## String  
设值  
```shell
set test_data this.is.test.data
```
取值
```shell
get test_data
```
获取值长度
```shell
strlen test_data
```
获取子串
```shell
getrange test_data 5 10
```
覆盖子串(注意是覆盖不是插入)
```shell
setrange test_data 5 notis.tes
```
追加字串
```shell
append test_data .foo
```
如果字符串内容是一个整数，还是以当计数器使用  
```shell
set test_data 100
incrby test_data 200 // 300
decrby test_data 100 // 200
incr test_data // 201
decr test_data // 200
```
过期与删除  
字符串可以使用```del```主动删除，可以使用```expire```指令设置过期时间(被动删除)。可以使用```ttl```指令获取字符串离过期剩余时间。  
```shell
expire test_data 60 // 单位s
ttl test_data // -2 变量不存在 -1 没有设置过期时间
del test_data // 1 成功 0 失败
get test_data // nil
```

## List
Redis 将列表数据结构命名为 List 而不是 Array ,因为列表存储结构用的是链表(双向链表)而不是数组。  
随机定位性较差，首尾插入删除性能较优。使用时一定要注意链表相关操作的时间复杂度。  
List 可以使用负下标。  
```
# 右进左出  先进后出 堆栈
rpush test_data go // 1
rpush test_data java python // 3
lpop test_data // go
lpop test_data // java

# 右进右出 先进先出 队列
rpush test_data go // 1
rpush test_data java python // 3
rpop test_data // python
rpop test_data // java
```
获取长度
```shell
llen test_data
```
随机读取
```shell
lindex test_data 1 2
```
修改元素
```shell
lset test_data 0 javascript
```
插入元素(linsert可以指定方向before/after)
插入元素不是通过下标(在分布式环境下，列表元素频繁变动)，而是通过指定值插入
```shell
linsert test_data before javascript ruby
```
删除元素
也不是通过指定下标的方式，而是需要指定删除最大个数以及元素的值
```shell
lrem test_data 3 ruby
```
定长列表
```shell
ltrim test_data 1 100
```
快速列表
@TODO
