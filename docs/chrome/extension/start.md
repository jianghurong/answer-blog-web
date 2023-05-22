## 创建应用/扩展程序

[Chrome Documentation](https://developer.chrome.com/docs/extensions/)  
[Chrome Documentation中文文档(非官方)](http://docs.getxhr.com/ChromeExtensionDocument/index.html)

### 1. 构建应用/扩展程序
* 创建JSON文件  
例：Hello Extensions
manifest.json
```json
{
    "manifest_version": 3,
    "name": "Hello Extensions",
    "description": "Base Level Extension",
    "version": "1.0",
    "action": {
        "default_popup": "hello.html",
        "default_icon": "hello_extensions.png"
    }
}
```
* 创建128*128像素徽标
* 扩展程序中选择开发者模式，加载已解压的扩展程序即可使用插件
* 目录结构如下
 > HelloExtensions  
 >> hello.html  
 >> hello_extensions.png  
 >> manifest.json  

 ### 2. 应用/扩展相关知识
* 浏览器中访问插件路径格式
```
chrome-extension://<扩展程序唯一标识符>/<文件路径>
```
例:
```
chrome-extension://gofdleamepcnnfdmbcighamlibgahbln/hello_extensions.png
```
