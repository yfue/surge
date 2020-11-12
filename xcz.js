// 很好古诗古文化的软件，已充值支持，只是想破解玩玩，强烈建议充值一点支持

var obj = JSON.parse($response.body);
    obj.isAdmin=true;
    obj.lifetimeMembership=true;
    obj.bindWechat=true;
    obj.membership=true;
    obj.emailVerified=true;
    obj.mobilePhoneVerified=true;
$done({ body: JSON.stringify(obj) });

/**
 */
