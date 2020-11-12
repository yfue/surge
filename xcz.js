// 很好古诗古文化的软件，已充值支持，只是想破解玩玩，强烈建议充值一点支持

var obj = JSON.parse($response.body);
    obj.isAdmin=true;
    obj.lifetimeMembership=true;
    obj.bindWechat=true;
    obj.membership=true;
    obj.emailVerified=true;
    obj.mobilePhoneVerified=true;
$done({ body: JSON.stringify(obj) });

//$notify("会员已开启", "很好古诗古文化的软件，如果觉得好请务必充值支持，谢谢","仅个人尝试，禁止牟利");

/**
 * @supported F3F1280E2817 44243A07
 */
