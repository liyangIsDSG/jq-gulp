$(function(){$(".g-form-components").click(function(){var n=$(this);if(n.data("do")&&"1"===n.data("do"))return"";n.data("do","1");var a=$.formComData(n);if(!1===a)return n.data("do","0"),"";$.ajax({type:"POST",url:a.postUrl,data:a,dataType:"json",success:function(t){n.data("do","0");var a=n.data("comtag");if($("#"+a).find("img[name='captcha']").click(),"success"!==t._return)return"2"==t.code?(layer.alert($.languagePack(t.language),function(a){window.location.reload(),layer.close(a)}),$(".layui-layer-close").click(function(){window.location.reload()}),""):(t.message&&(layer.alert(t.message,function(a){if("1"==t.code){var e=n.data("comtag");$("#"+e).find("input[name='captcha']").focus()}layer.close(a)}),$(".layui-layer-close").click(function(){if("1"==t.code){var a=n.data("comtag");$("#"+a).find("input[name='captcha']").focus()}})),!1);t.message&&(layer.alert(t.message,function(a){window.location.reload(),layer.close(a)}),$(".layui-layer-close").click(function(){window.location.reload()}))},error:function(){return ajaxError()}})})}),function($){$.extend({formComData:function(options){void 0===this.privateFunction&&(this.privateFunction=$.extend({formGetFormComponents:function(a){var e=a.data("comtag"),t=$("#"+e);return!(t.length<1)&&t},formGetParmes:function(a){if(0<a.find("input[name='box-id']:hidden").length)var e=a.find("input[name='box-id']:hidden").val();if(0<a.find("input[name='post-url']:hidden").length)var t=a.find("input[name='post-url']:hidden").val();if(0<a.find("input[name='component-type']:hidden").length)var n=a.find("input[name='component-type']:hidden").val();if(0<a.find("input[name='page-id']:hidden").length)var o=a.find("input[name='page-id']:hidden").val();return void 0===e||void 0===t||void 0===n||void 0===o?(console.error("Undefined boxId OR postUrl"),!1):{boxId:e,postUrl:t,compType:n,pageId:o}},formGetFormData:function(_form,boxId){var result={},i=0;return _form.find("input").each(function(key){var _this=$(this);if(_this.data("boxid")==boxId&&void 0!==_this.data("variable")){var _data=eval(_this.data("variable"));_data.comthis=_this,_data.value=_this.val(),result[i]=_data,i++}}),result},formGetGivenData:function(a,n){var o={},i=0;return a.find("input").each(function(a){var e=$(this);if(e.data("boxid")==n&&void 0!==e.data("rule")){var t={comthis:e,comid:e.data("comid"),boxid:e.data("boxid"),rule:e.data("rule"),message:e.data("message")};o[i]=t,i++}}),o},formGetCaptcha:function(a){return 0<$.trim(a.find("input[name='captcha']")).length?$.trim(a.find("input[name='captcha']").val()):""}}));var _this=$.extend({errorInfos:{}},options),_componentsParent=this.privateFunction.formGetFormComponents(_this);if(!1===_componentsParent)return!1;var formParmes=this.privateFunction.formGetParmes(_componentsParent);if(!1===this.formParmes)return!1;var formData=this.privateFunction.formGetFormData(_componentsParent,formParmes.boxId);if(formData.length<1)return!1;this.formValidation=$.extend({messageBox:function(a,e){_this.errorInfos[e.data("comid")]={message:a,obj:e}},required:function(a,e){return void 0!==a.value&&""!==$.trim(a.value)&&0!==strlen(a.value)||(this.messageBox(e.message,a.comthis),!1)},rlength:function(a,e){return void 0!==e.is?strlen(a.value)==parseInt(e.is)||(this.messageBox(e.message,a.comthis),!1):void 0!==e.min&&strlen(a.value)<parseInt(e.min)?(this.messageBox(e.message,a.comthis),!1):!(void 0!==e.max&&strlen(a.value)>parseInt(e.max))||(this.messageBox(e.message,a.comthis),!1)},email:function(a,e){return""==a.value||(!!/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(a.value)||(this.messageBox(e.message,a.comthis),!1))},phone:function(a,e){return""==a.value||(!!/^[0-9\-\+\,\;\，\；]+$/.test(a.value)||(this.messageBox(e.message,a.comthis),!1))}}),this.givenValidation=$.extend({controller:function(a,e){var t=!0,n=null;for(var o in a){for(var i in a[o].comid,e)if(e[i].id==a[o].comid){n=e[i].value;break}"required"!==a[o].rule||null!==n&&""!==n||(t=!(_this.errorInfos[a[o].comid]={message:a[o].message,obj:a[o].comthis})),n=null}return t}});var givenData=this.privateFunction.formGetGivenData(_componentsParent,formParmes.boxId),bool=!0,formItem=new Array;if($.each(formData,function(a,e){!0===$.formComDataValidation(e)?formItem[a]={id:e.id,name:e.name,value:e.value,item:void 0!==e.item?e.item:0}:bool=!1}),!1===this.givenValidation.controller(givenData,formData)&&(bool=!1),!0!==bool)return _componentsParent.find("input[data-boxid='"+formParmes.boxId+"']").each(function(){if(_this.errorInfos[$(this).data("comid")]){var e=_this.errorInfos[$(this).data("comid")];return e.obj.data("variable")?(layer.alert(e.message,function(a){e.obj.focus(),layer.close(a)}),e.obj.focus()):layer.alert(e.message,function(a){layer.close(a)}),$(".layui-layer-close").click(function(){obj.focus()}),!1}}),!1;var captcha=this.privateFunction.formGetCaptcha(_componentsParent);if(""===captcha)return layer.alert(languagePack("verificationCodeCannotBeEmpty"),function(a){0<_componentsParent.find("input[name='captcha']").length&&_componentsParent.find("input[name='captcha']").focus(),layer.close(a)}),$(".layui-layer-close").click(function(){_componentsParent.find("input[name='captcha']").focus()}),!1;if(4!=captcha.length)return layer.alert(languagePack("pleaseEnter4VerificationCode"),function(a){0<_componentsParent.find("input[name='captcha']").length&&_componentsParent.find("input[name='captcha']").focus(),layer.close(a)}),$(".layui-layer-close").click(function(){_componentsParent.find("input[name='captcha']").focus()}),!1;var returnData={formItem:formItem,captcha:captcha,boxId:formParmes.boxId,pageId:formParmes.pageId,postUrl:formParmes.postUrl};return returnData},formComDataValidation:function(t){var n=!0,o=this.formValidation;return"string"==typeof t.rules&&""===t.rules||$.each(t.rules,function(a,e){if(!1===n)return"";switch(a){case"required":!1===o.required(t,e)&&(n=!1);break;case"length":!1===o.rlength(t,e)&&(n=!1);break;case"email":!1===o.email(t,e)&&(n=!1);break;case"phone":!1===o.phone(t,e)&&(n=!1);break;case"default":"NULL"===e&&(n=!0);break;default:return n=!1,console.error("Undefined rule : "+a),""}}),n}})}($);