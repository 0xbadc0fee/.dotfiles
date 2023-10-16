LPServer.emergencyAccess=function(){var s="legacy_helper.php",n="lmiapi/emergency-access",a=function(e){var r=new LPServer.ext.RSAKey;LPServer.ext.parsePublicKey(r,e.params.recipient.publickey);var a=r.encrypt(LPServer.ext.bin2hex(LPServer.ext.getLocalKey()));LPServer.jsonRequest({url:s,data:{action:"update_sharee",semail:e.params.recipient.username,enc_key:a,prio:1,hours:e.params.recipient.hours_to_override},userSupplied:e})},e=(r=function(e,r){e.errors instanceof Array&&0<e.errors.length?r.callbacks&&r.callbacks.nosharingkeys?r.callbacks.nosharingkeys(e,r):r.error("nosharingkeys"):e.noemail instanceof Array&&0<e.noemail.length?(r.callbacks&&r.callbacks.invite&&r.callbacks.invite({emails:e.noemail}),r.error("")):e[r.params.recipient.username]?(r.params.recipient.publickey=e[r.params.recipient.username],a(r)):r.error()},function(e){LPServer.jsonRequest({url:s,data:{action:"get_pubkey",emails:e.params.recipient.username},success:r,userSupplied:e})}),r,c,i,t,u,l,p=(o=function(e,r){r.callbacks&&r.callbacks.successGranted&&r.callbacks.successGranted(e,r)},d=function(e,r){r.callbacks&&r.callbacks.successLinked&&r.callbacks.successLinked(e,r)},m=function(e,r){var a=new LPServer.ext.RSAKey;LPServer.ext.parsePrivateKey(a);var n=a.decrypt(e.enc_key);LPServer.xmlRequest({url:s,data:{action:"link",name:r.params.sharer.username,legacy:1,sharekey:e.enc_key,sharename:LPServer.ext.encrypt(r.params.sharer.username,LPServer.ext.hex2bin(n))},callbacks:{ok:d},userSupplied:r})},function(e){LPServer.jsonRequest({url:s,data:{action:"confirm",lemail:e.params.sharer.username},callbacks:{success:o,allowed:m},userSupplied:e})}),o,d,m,S,f,y=function(e){if(!e||!e.length||!g_uid)return!1;LPServer.lmiapi.jsonRequest({url:n+"/sharees",method:"POST",data:e})},v=function(r,a){LPServer.lmiapi.jsonRequest({url:n+"/sharees",type:"GET",contentType:"application/json",dataType:"json",success:function(e){r&&r(e)},error:function(e){"undefined"!=typeof Raven&&Raven.captureException(e,{extra:{uid:g_uid}}),a&&a()}})},h;return{updateRecipient:a,addRecipient:e,removeRecipient:function(e){LPServer.jsonRequest({url:s,data:{action:"revoke_offer",email:e.params.email},userSupplied:e})},getRecipientInfo:function(e){LPServer.jsonRequest({url:s,data:{action:"get_sharees",lemail:e.params.email},userSupplied:e})},getSharerInfo:function(e){LPServer.jsonRequest({url:s,data:{action:"get_sharers"},userSupplied:e})},acceptOffer:function(e){LPServer.jsonRequest({url:s,data:{action:"accept_offer",email:e.params.sharer.username},userSupplied:e})},declineOffer:function(e){LPServer.jsonRequest({url:s,data:{action:"decline_offer",email:e.params.email},userSupplied:e})},requestAccess:p,denyAccess:function(e){LPServer.jsonRequest({url:s,data:{action:"deny_access",email:e.params.email},userSupplied:e})},unlinkAccount:function(e){LPServer.jsonRequest({url:s,data:{action:"unlink",lemail:e.params.email},userSupplied:e})},updateShareeKey:y,getEmergencyAccessShareeData:v,checkEmergencyAccessHealth:function(){v(function(e){if(e){var s=[];e.forEach(function(e){var r=e.publicSharingKey;if(r&&e.updateRequired){var a=new RSAKey;if(parse_public_key(a,r)){var n=a.encrypt(LPServer.ext.bin2hex(LPServer.ext.getLocalKey()));s.push({userId:e.userId,encryptedVaultKey:n})}}}),e.length&&reduxApp&&"function"==typeof reduxApp.completeSecondaryOnboardingSkill&&reduxApp.completeSecondaryOnboardingSkill("SetUpEmergencyAccess"),s.length&&y(s)}})}}}();