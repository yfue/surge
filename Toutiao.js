/*
[Script]
Toutiao = type=http-response,pattern=^https:\/\/api\w-normal-hl\.toutiaoapi\.com\/api(\/news)?\/feed(\/thread_aggr)?\/v.*\/,requires-body=1,max-size=524288,script-path=https://github.com/yfue/surge/raw/Module/Toutiao.js

[MITM]
hostname = api*-normal-c-hl.snssdk.com
*/

var obj = JSON.parse($response.body);
if (obj.data) {
  for (var i = obj.data.length - 1; i >= 0; i--) {
    if (obj.data[i].content.indexOf("广告") > 0) {
      obj.data.splice(i, 1);
    }
  }
}
if (obj.data) {
  for (var i = obj.data.length - 1; i >= 0; i--) {
    if (obj.data[i].content.indexOf("置顶") > 0) {
      obj.data.splice(i, 1);
    }
  }
}
$done({body: JSON.stringify(obj)});
