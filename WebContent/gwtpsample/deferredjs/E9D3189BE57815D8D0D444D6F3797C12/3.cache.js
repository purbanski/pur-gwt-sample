var $intern_68 = '"', $intern_200 = '">', $intern_119 = '%', $intern_195 = '&', $intern_198 = "'", $intern_53 = "'><\/span>", $intern_131 = ', Row size: ', $intern_49 = '0', $intern_61 = '2', $intern_63 = '735px', $intern_197 = '<', $intern_204 = '<\/div>', $intern_199 = '<\/tr>', $intern_52 = "<span id='", $intern_196 = '>', $intern_76 = 'AUTO', $intern_100 = 'GPBYFDELG', $intern_101 = 'GPBYFDEMG', $intern_102 = 'GPBYFDENG', $intern_78 = 'HIDDEN', $intern_58 = 'Ins\xE9rer storage', $intern_203 = 'Invalid table section tag: ', $intern_97 = 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.', $intern_183 = 'Range', $intern_130 = 'Row index: ', $intern_67 = 'String', $intern_98 = 'Style names cannot be empty', $intern_77 = 'VISIBLE', $intern_180 = '[Lcom.google.gwt.user.client.ui.', $intern_236 = '[Lcom.gwtplatform.dispatch.shared.', $intern_221 = '[Lcom.gwtplatform.dispatch.shared.BatchResult;/569845401', $intern_222 = '[Lcom.gwtplatform.dispatch.shared.Result;/3987005119', $intern_237 = '[Ljava.util.', $intern_45 = 'align', $intern_79 = 'blur', $intern_60 = 'border', $intern_205 = 'button', $intern_50 = 'cellPadding', $intern_48 = 'cellSpacing', $intern_116 = 'center', $intern_80 = 'change', $intern_55 = 'className', $intern_103 = 'click', $intern_235 = 'com.google.gwt.user.client.rpc.', $intern_215 = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533', $intern_216 = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298', $intern_217 = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109', $intern_185 = 'com.gwtplatform.dispatch.shared.', $intern_218 = 'com.gwtplatform.dispatch.shared.ActionException/2451163915', $intern_219 = 'com.gwtplatform.dispatch.shared.ActionImpl/2338109017', $intern_220 = 'com.gwtplatform.dispatch.shared.BatchResult/3569380335', $intern_223 = 'com.gwtplatform.dispatch.shared.ServiceException/918872072', $intern_224 = 'com.gwtplatform.dispatch.shared.UnsecuredActionImpl/3290230922', $intern_225 = 'com.gwtplatform.dispatch.shared.UnsupportedActionException/26432650', $intern_207 = 'dblclick', $intern_192 = 'dir', $intern_69 = 'direction', $intern_114 = 'display', $intern_206 = 'error', $intern_99 = 'focus', $intern_234 = 'fromIndex: ', $intern_212 = 'gesturechange', $intern_213 = 'gestureend', $intern_211 = 'gesturestart', $intern_62 = 'height', $intern_74 = 'hidden', $intern_194 = 'html is null', $intern_149 = 'input', $intern_154 = 'java.lang.', $intern_226 = 'java.lang.String/2004016611', $intern_169 = 'java.util.', $intern_227 = 'java.util.ArrayList/4159755760', $intern_228 = 'java.util.Arrays$ArrayList/2507071751', $intern_229 = 'java.util.Collections$EmptyList/4157118744', $intern_230 = 'java.util.Collections$SingletonList/1586180994', $intern_231 = 'java.util.LinkedList/3953877921', $intern_232 = 'java.util.Stack/1346942793', $intern_233 = 'java.util.Vector/3057315478', $intern_64 = 'keydown', $intern_81 = 'keypress', $intern_82 = 'keyup', $intern_134 = 'load', $intern_193 = 'ltr', $intern_214 = 'marginBottom', $intern_108 = 'mousedown', $intern_208 = 'mousemove', $intern_107 = 'mouseout', $intern_104 = 'mouseover', $intern_209 = 'mouseup', $intern_210 = 'mousewheel', $intern_132 = 'none', $intern_128 = 'offsetHeight', $intern_127 = 'offsetWidth', $intern_111 = 'overflow', $intern_124 = 'relative', $intern_70 = 'rtl', $intern_75 = 'scroll', $intern_118 = 'table', $intern_112 = 'tbody', $intern_44 = 'td', $intern_150 = 'text', $intern_202 = 'tfoot', $intern_201 = 'thead', $intern_83 = 'touchcancel', $intern_84 = 'touchend', $intern_85 = 'touchmove', $intern_86 = 'touchstart', $intern_47 = 'tr', $intern_51 = 'value', $intern_46 = 'verticalAlign', $intern_54 = 'width';
function com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static){
  if (!this$static.com_google_gwt_animation_client_Animation_isRunning) {
    return;
  }
  this$static.com_google_gwt_animation_client_Animation_wasStarted = this$static.com_google_gwt_animation_client_Animation_isStarted;
  this$static.com_google_gwt_animation_client_Animation_element = null;
  this$static.com_google_gwt_animation_client_Animation_isRunning = false;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  if (this$static.com_google_gwt_animation_client_Animation_requestHandle) {
    this$static.com_google_gwt_animation_client_Animation_requestHandle.cancel__V();
    this$static.com_google_gwt_animation_client_Animation_requestHandle = null;
  }
  this$static.onCancel__V();
}

function com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2ILcom_google_gwt_dom_client_Element_2V(this$static, duration, element){
  com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static, duration, com_google_gwt_core_client_Duration_currentTimeMillis__D(), element);
}

function com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static, duration, startTime, element){
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static);
  this$static.com_google_gwt_animation_client_Animation_isRunning = true;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  this$static.com_google_gwt_animation_client_Animation_duration = duration;
  this$static.com_google_gwt_animation_client_Animation_startTime = startTime;
  this$static.com_google_gwt_animation_client_Animation_element = element;
  ++this$static.com_google_gwt_animation_client_Animation_runId;
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static.com_google_gwt_animation_client_Animation_callback, com_google_gwt_core_client_Duration_currentTimeMillis__D());
}

function com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.com_google_gwt_animation_client_Animation_runId;
  finished = curTime >= this$static.com_google_gwt_animation_client_Animation_startTime + this$static.com_google_gwt_animation_client_Animation_duration;
  if (this$static.com_google_gwt_animation_client_Animation_isStarted && !finished) {
    progress = (curTime - this$static.com_google_gwt_animation_client_Animation_startTime) / this$static.com_google_gwt_animation_client_Animation_duration;
    this$static.onUpdate__DV((1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId;
  }
  if (!this$static.com_google_gwt_animation_client_Animation_isStarted && curTime >= this$static.com_google_gwt_animation_client_Animation_startTime) {
    this$static.com_google_gwt_animation_client_Animation_isStarted = true;
    this$static.onStart__V();
    if (!(this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.com_google_gwt_animation_client_Animation_isRunning = false;
    this$static.com_google_gwt_animation_client_Animation_isStarted = false;
    this$static.onComplete__V();
    return false;
  }
  return true;
}

function com_google_gwt_animation_client_Animation_Animation__V(){
  com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V.call(this, (com_google_gwt_animation_client_AnimationSchedulerImpl_$clinit__V() , com_google_gwt_animation_client_AnimationSchedulerImpl_INSTANCE));
}

function com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V(scheduler){
  this.com_google_gwt_animation_client_Animation_callback = new com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this);
  this.com_google_gwt_animation_client_Animation_scheduler = scheduler;
}

function com_google_gwt_animation_client_Animation(){
}

_ = com_google_gwt_animation_client_Animation.prototype = new java_lang_Object;
_.onCancel__V = function com_google_gwt_animation_client_Animation_onCancel__V(){
  this.com_google_gwt_animation_client_Animation_wasStarted && this.onComplete__V();
}
;
_.onComplete__V = function com_google_gwt_animation_client_Animation_onComplete__V(){
  this.onUpdate__DV((1 + Math.cos(6.283185307179586)) / 2);
}
;
_.onStart__V = function com_google_gwt_animation_client_Animation_onStart__V(){
  this.onUpdate__DV((1 + Math.cos(3.141592653589793)) / 2);
}
;
_.com_google_gwt_animation_client_Animation_duration = -1;
_.com_google_gwt_animation_client_Animation_element = null;
_.com_google_gwt_animation_client_Animation_isRunning = false;
_.com_google_gwt_animation_client_Animation_isStarted = false;
_.com_google_gwt_animation_client_Animation_requestHandle = null;
_.com_google_gwt_animation_client_Animation_runId = -1;
_.com_google_gwt_animation_client_Animation_scheduler = null;
_.com_google_gwt_animation_client_Animation_startTime = -1;
_.com_google_gwt_animation_client_Animation_wasStarted = false;
function com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static, timestamp){
  com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static.com_google_gwt_animation_client_Animation$1_this$0, timestamp)?(this$static.com_google_gwt_animation_client_Animation$1_this$0.com_google_gwt_animation_client_Animation_requestHandle = this$static.com_google_gwt_animation_client_Animation$1_this$0.com_google_gwt_animation_client_Animation_scheduler.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(this$static.com_google_gwt_animation_client_Animation$1_this$0.com_google_gwt_animation_client_Animation_callback, this$static.com_google_gwt_animation_client_Animation$1_this$0.com_google_gwt_animation_client_Animation_element)):(this$static.com_google_gwt_animation_client_Animation$1_this$0.com_google_gwt_animation_client_Animation_requestHandle = null);
}

function com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this$0){
  this.com_google_gwt_animation_client_Animation$1_this$0 = this$0;
}

function com_google_gwt_animation_client_Animation$1(){
}

_ = com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V.prototype = com_google_gwt_animation_client_Animation$1.prototype = new java_lang_Object;
_.execute__DV = function com_google_gwt_animation_client_Animation$1_execute__DV(timestamp){
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this, timestamp);
}
;
_.com_google_gwt_animation_client_Animation$1_this$0 = null;
function com_google_gwt_animation_client_AnimationScheduler(){
}

_ = com_google_gwt_animation_client_AnimationScheduler.prototype = new java_lang_Object;
function com_google_gwt_animation_client_AnimationScheduler$AnimationHandle(){
}

_ = com_google_gwt_animation_client_AnimationScheduler$AnimationHandle.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_animation_client_AnimationScheduler$AnimationHandle]);
function com_google_gwt_animation_client_AnimationSchedulerImpl_$clinit__V(){
  com_google_gwt_animation_client_AnimationSchedulerImpl_$clinit__V = nullMethod;
  var impl;
  impl = new com_google_gwt_animation_client_AnimationSchedulerImplWebkit_AnimationSchedulerImplWebkit__V;
  !!impl && (impl.isNativelySupported__Z() || (impl = new com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V));
  com_google_gwt_animation_client_AnimationSchedulerImpl_INSTANCE = impl;
}

function com_google_gwt_animation_client_AnimationSchedulerImpl(){
}

_ = com_google_gwt_animation_client_AnimationSchedulerImpl.prototype = new com_google_gwt_animation_client_AnimationScheduler;
var com_google_gwt_animation_client_AnimationSchedulerImpl_INSTANCE = null;
function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this$static, requestId){
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_size == 0 && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer);
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit, makeCastMap([Q$com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_$1, Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl, this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_size, 0);
  curAnimations = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, curAnimations), Q$com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_$1);
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
    com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(requestId.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback, duration.com_google_gwt_core_client_Duration_start);
  }
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_size > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, java_lang_Math_max__III(5, 16 - (com_google_gwt_core_client_Duration_currentTimeMillis__D() - duration.com_google_gwt_core_client_Duration_start)));
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V(){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this);
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer(){
}

_ = com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V.prototype = com_google_gwt_animation_client_AnimationSchedulerImplTimer.prototype = new com_google_gwt_animation_client_AnimationSchedulerImpl;
_.isNativelySupported__Z = function com_google_gwt_animation_client_AnimationSchedulerImplTimer_isNativelySupported__Z(){
  return true;
}
;
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplTimer_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var requestId;
  requestId = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this, callback);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_size == 1 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, 16);
  return requestId;
}
;
function com_google_gwt_user_client_Timer_$clinit__V(){
  com_google_gwt_user_client_Timer_$clinit__V = nullMethod;
  com_google_gwt_user_client_Timer_timers = new java_util_ArrayList_ArrayList__V;
  com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_Timer$1_Timer$1__V);
}

function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_google_gwt_user_client_Timer_timers, this$static);
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be positive');
  }
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_google_gwt_user_client_Timer_timers, this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = com_google_gwt_user_client_Timer_createTimeout__Lcom_google_gwt_user_client_Timer_2II(this$static, delayMillis);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_google_gwt_user_client_Timer_timers, this$static);
}

function com_google_gwt_user_client_Timer_clearInterval__IV(id){
  $wnd.clearInterval(id);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(id){
  $wnd.clearTimeout(id);
}

function com_google_gwt_user_client_Timer_createTimeout__Lcom_google_gwt_user_client_Timer_2II(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire__V();
  }
  ), delay);
}

function com_google_gwt_user_client_Timer(){
}

_ = com_google_gwt_user_client_Timer.prototype = new java_lang_Object;
_.fire__V = function com_google_gwt_user_client_Timer_fire__V(){
  this.com_google_gwt_user_client_Timer_isRepeating || java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_google_gwt_user_client_Timer_timers, this);
  this.run__V();
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_Timer]);
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = 0;
var com_google_gwt_user_client_Timer_timers;
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$0){
  com_google_gwt_user_client_Timer_$clinit__V();
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$0 = this$0;
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1(){
}

_ = com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V.prototype = com_google_gwt_animation_client_AnimationSchedulerImplTimer$1.prototype = new com_google_gwt_user_client_Timer;
_.run__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_run__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$0);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_Timer]);
_.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$0 = null;
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this$0, callback){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$0 = this$0;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback = callback;
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl(){
}

_ = com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V.prototype = com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl.prototype = new com_google_gwt_animation_client_AnimationScheduler$AnimationHandle;
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$0, this);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_animation_client_AnimationScheduler$AnimationHandle, Q$com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl]);
_.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback = null;
_.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$0 = null;
function com_google_gwt_animation_client_AnimationSchedulerImplWebkit_$cancelAnimationFrameImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2DV(requestId){
  $wnd.webkitCancelRequestAnimationFrame(requestId);
}

function com_google_gwt_animation_client_AnimationSchedulerImplWebkit_$requestAnimationFrameImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2D(callback, element){
  var _callback = callback;
  var wrapper = $entry(function(time){
    time = time || com_google_gwt_core_client_Duration_currentTimeMillis__D();
    _callback.execute__DV(time);
  }
  );
  return $wnd.webkitRequestAnimationFrame(wrapper, element);
}

function com_google_gwt_animation_client_AnimationSchedulerImplWebkit_AnimationSchedulerImplWebkit__V(){
}

function com_google_gwt_animation_client_AnimationSchedulerImplWebkit(){
}

_ = com_google_gwt_animation_client_AnimationSchedulerImplWebkit_AnimationSchedulerImplWebkit__V.prototype = com_google_gwt_animation_client_AnimationSchedulerImplWebkit.prototype = new com_google_gwt_animation_client_AnimationSchedulerImpl;
_.isNativelySupported__Z = function com_google_gwt_animation_client_AnimationSchedulerImplWebkit_isNativelySupported__Z(){
  return !!($wnd.webkitRequestAnimationFrame && $wnd.webkitCancelRequestAnimationFrame);
}
;
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplWebkit_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var requestId;
  requestId = com_google_gwt_animation_client_AnimationSchedulerImplWebkit_$requestAnimationFrameImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2D(callback, element);
  return new com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_AnimationSchedulerImplWebkit$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2DV(requestId);
}
;
function com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_AnimationSchedulerImplWebkit$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2DV(requestId){
  this.com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_requestId = requestId;
}

function com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl(){
}

_ = com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_AnimationSchedulerImplWebkit$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2DV.prototype = com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl.prototype = new com_google_gwt_animation_client_AnimationScheduler$AnimationHandle;
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplWebkit_$cancelAnimationFrameImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2DV(this.com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_requestId);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_animation_client_AnimationScheduler$AnimationHandle]);
_.com_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_requestId = 0;
function com_google_gwt_cell_client_AbstractSafeHtmlCell_$render__Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2Lcom_google_gwt_cell_client_Cell$Context_2Ljava_lang_Object_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2V(data, sb){
  data != null && com_google_gwt_cell_client_TextCell_$render__Lcom_google_gwt_cell_client_TextCell_2Lcom_google_gwt_cell_client_Cell$Context_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2V(data == null?(com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V() , com_google_gwt_safehtml_shared_SafeHtmlUtils_EMPTY_1SAFE_1HTML):(com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V() , new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(data))), sb);
}

function com_google_gwt_cell_client_TextCell_$render__Lcom_google_gwt_cell_client_TextCell_2Lcom_google_gwt_cell_client_Cell$Context_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2V(value, sb){
  !!value && (java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb, value.com_google_gwt_safehtml_shared_SafeHtmlString_html) , sb);
}

function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_Duration_currentTimeMillis__D();
}

function com_google_gwt_core_client_Duration_currentTimeMillis__D(){
  return (new Date).getTime();
}

function com_google_gwt_core_client_Duration(){
}

_ = com_google_gwt_core_client_Duration_Duration__V.prototype = com_google_gwt_core_client_Duration.prototype = new java_lang_Object;
function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands) {
    oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = null;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = []);
    com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  }
  !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_runRepeatingTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands));
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands || !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  if (!this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning) {
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = true;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = new com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue = new com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue, 50);
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, false]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands, [cmd, false]);
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_runRepeatingTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, i, length, newTasks, start, t;
  length = tasks.length;
  if (length == 0) {
    return null;
  }
  canceledSomeTasks = false;
  start = com_google_gwt_core_client_Duration_currentTimeMillis__D();
  while (com_google_gwt_core_client_Duration_currentTimeMillis__D() - start < 100) {
    for (i = 0; i < length; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length; ++i) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  $wnd.setTimeout(function(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0 = this$0;
}

function com_google_gwt_core_client_impl_SchedulerImpl$Flusher(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V.prototype = com_google_gwt_core_client_impl_SchedulerImpl$Flusher.prototype = new java_lang_Object;
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0);
}
;
_.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$0 = null;
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$0 = this$0;
}

function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V.prototype = com_google_gwt_core_client_impl_SchedulerImpl$Rescuer.prototype = new java_lang_Object;
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$0.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
_.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$0 = null;
function com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(this$static){
  var parent;
  parent = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(this$static);
  !!parent && parent.removeChild(this$static);
}

function com_google_gwt_dom_client_Node_$replaceChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += $intern_39);
    this$static.className = oldClassName + className;
  }
}

function com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static, name){
  return parseInt(this$static[name]) || 0;
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name){
  return this$static[name] == null?null:String(this$static[name]);
}

function com_google_gwt_dom_client_Element_$removeClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(oldStyle.substr(0, idx - 0));
    end = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(java_lang_String_$substring__Ljava_lang_String_2ILjava_lang_String_2(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + $intern_39 + end);
    this$static.className = newClassName;
  }
}

function com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className){
  this$static.className = className;
}

function com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, html){
  this$static.innerHTML = html || $intern_7;
}

function com_google_gwt_dom_client_Element_$setScrollTop__Lcom_google_gwt_dom_client_Element_2IV(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl_$getNextSiblingElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent = node.parentNode;
  (!parent || parent.nodeType != 1) && (parent = null);
  return parent;
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text){
  elem.textContent = text || $intern_7;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(elem){
  if (com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem)) {
    return (elem.scrollLeft || 0) - ((elem.scrollWidth || 0) - elem.clientWidth);
  }
  return elem.scrollLeft || 0;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(elem){
  return typeof elem.tabIndex != $intern_18?elem.tabIndex:-1;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent, child){
  while (child) {
    if (parent == child) {
      return true;
    }
    child = child.parentNode;
    child && child.nodeType != 1 && (child = null);
  }
  return false;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, $intern_7).direction == $intern_70;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$setScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2IV(elem, left){
  com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem) && (left += (elem.scrollWidth || 0) - elem.clientWidth);
  elem.scrollLeft = left;
}

function com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_16)?this$static.documentElement:this$static.body).clientHeight;
}

function com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_16)?this$static.documentElement:this$static.body).clientWidth;
}

function com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(this$static, elementId){
  return this$static.getElementById(elementId);
}

function java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this$static, other){
  return this$static.java_lang_Enum_ordinal - other.java_lang_Enum_ordinal;
}

_ = java_lang_Enum.prototype;
_.compareTo__Ljava_lang_Object_2I$ = function java_lang_Enum_compareTo__Ljava_lang_Object_2I(other){
  return java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(other, Q$java_lang_Enum));
}
;
function com_google_gwt_dom_client_Style$Display_$clinit__V(){
  com_google_gwt_dom_client_Style$Display_$clinit__V = nullMethod;
  com_google_gwt_dom_client_Style$Display_NONE = new com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_BLOCK = new com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE = new com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK = new com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_$VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_dom_client_Style$Display, [com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK]);
}

function com_google_gwt_dom_client_Style$Display(){
}

_ = com_google_gwt_dom_client_Style$Display.prototype = new java_lang_Enum;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$Display, Q$com_google_gwt_dom_client_Style$HasCssName, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
var com_google_gwt_dom_client_Style$Display_$VALUES, com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_NONE;
function com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'NONE', 0);
}

function com_google_gwt_dom_client_Style$Display$1(){
}

_ = com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Display$1.prototype = new com_google_gwt_dom_client_Style$Display;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$Display, Q$com_google_gwt_dom_client_Style$HasCssName, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'BLOCK', 1);
}

function com_google_gwt_dom_client_Style$Display$2(){
}

_ = com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Display$2.prototype = new com_google_gwt_dom_client_Style$Display;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$Display, Q$com_google_gwt_dom_client_Style$HasCssName, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'INLINE', 2);
}

function com_google_gwt_dom_client_Style$Display$3(){
}

_ = com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Display$3.prototype = new com_google_gwt_dom_client_Style$Display;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$Display, Q$com_google_gwt_dom_client_Style$HasCssName, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'INLINE_BLOCK', 3);
}

function com_google_gwt_dom_client_Style$Display$4(){
}

_ = com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Display$4.prototype = new com_google_gwt_dom_client_Style$Display;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$Display, Q$com_google_gwt_dom_client_Style$HasCssName, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Overflow_$clinit__V(){
  com_google_gwt_dom_client_Style$Overflow_$clinit__V = nullMethod;
  com_google_gwt_dom_client_Style$Overflow_VISIBLE = new com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_HIDDEN = new com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_SCROLL = new com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_AUTO = new com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_$VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1dom_1client_1Style$Overflow_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_dom_client_Style$Overflow, [com_google_gwt_dom_client_Style$Overflow_VISIBLE, com_google_gwt_dom_client_Style$Overflow_HIDDEN, com_google_gwt_dom_client_Style$Overflow_SCROLL, com_google_gwt_dom_client_Style$Overflow_AUTO]);
}

function com_google_gwt_dom_client_Style$Overflow(){
}

_ = com_google_gwt_dom_client_Style$Overflow.prototype = new java_lang_Enum;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$HasCssName, Q$com_google_gwt_dom_client_Style$Overflow, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
var com_google_gwt_dom_client_Style$Overflow_$VALUES, com_google_gwt_dom_client_Style$Overflow_AUTO, com_google_gwt_dom_client_Style$Overflow_HIDDEN, com_google_gwt_dom_client_Style$Overflow_SCROLL, com_google_gwt_dom_client_Style$Overflow_VISIBLE;
function com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, $intern_77, 0);
}

function com_google_gwt_dom_client_Style$Overflow$1(){
}

_ = com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Overflow$1.prototype = new com_google_gwt_dom_client_Style$Overflow;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$HasCssName, Q$com_google_gwt_dom_client_Style$Overflow, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, $intern_78, 1);
}

function com_google_gwt_dom_client_Style$Overflow$2(){
}

_ = com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Overflow$2.prototype = new com_google_gwt_dom_client_Style$Overflow;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$HasCssName, Q$com_google_gwt_dom_client_Style$Overflow, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'SCROLL', 2);
}

function com_google_gwt_dom_client_Style$Overflow$3(){
}

_ = com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Overflow$3.prototype = new com_google_gwt_dom_client_Style$Overflow;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$HasCssName, Q$com_google_gwt_dom_client_Style$Overflow, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, $intern_76, 3);
}

function com_google_gwt_dom_client_Style$Overflow$4(){
}

_ = com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV.prototype = com_google_gwt_dom_client_Style$Overflow$4.prototype = new com_google_gwt_dom_client_Style$Overflow;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_dom_client_Style$HasCssName, Q$com_google_gwt_dom_client_Style$Overflow, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
_ = com_google_gwt_dom_client_Style$Unit$1.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$1_getType__Ljava_lang_String_2(){
  return $intern_26;
}
;
_ = com_google_gwt_dom_client_Style$Unit$2.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$2_getType__Ljava_lang_String_2(){
  return $intern_119;
}
;
_ = com_google_gwt_dom_client_Style$Unit$3.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$3_getType__Ljava_lang_String_2(){
  return 'em';
}
;
_ = com_google_gwt_dom_client_Style$Unit$4.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$4_getType__Ljava_lang_String_2(){
  return 'ex';
}
;
_ = com_google_gwt_dom_client_Style$Unit$5.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$5_getType__Ljava_lang_String_2(){
  return 'pt';
}
;
_ = com_google_gwt_dom_client_Style$Unit$6.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$6_getType__Ljava_lang_String_2(){
  return 'pc';
}
;
_ = com_google_gwt_dom_client_Style$Unit$7.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$7_getType__Ljava_lang_String_2(){
  return 'in';
}
;
_ = com_google_gwt_dom_client_Style$Unit$8.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$8_getType__Ljava_lang_String_2(){
  return 'cm';
}
;
_ = com_google_gwt_dom_client_Style$Unit$9.prototype;
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$9_getType__Ljava_lang_String_2(){
  return 'mm';
}
;
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    typeKey = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), Q$com_google_gwt_event_dom_client_DomEvent$Type);
    if (typeKey) {
      currentNative = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
      currentRelativeElem = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
      com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
      com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
      com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
      com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
      com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
    }
  }
}

function com_google_gwt_event_dom_client_DomEvent(){
}

_ = com_google_gwt_event_dom_client_DomEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return this.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2();
}
;
_.com_google_gwt_event_dom_client_DomEvent_nativeEvent = null;
_.com_google_gwt_event_dom_client_DomEvent_relativeElem = null;
var com_google_gwt_event_dom_client_DomEvent_registered = null;
function com_google_gwt_event_dom_client_HumanInputEvent(){
}

_ = com_google_gwt_event_dom_client_HumanInputEvent.prototype = new com_google_gwt_event_dom_client_DomEvent;
function com_google_gwt_event_dom_client_MouseEvent(){
}

_ = com_google_gwt_event_dom_client_MouseEvent.prototype = new com_google_gwt_event_dom_client_HumanInputEvent;
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = nullMethod;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V($intern_103, new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

function com_google_gwt_event_dom_client_ClickEvent(){
}

_ = com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V.prototype = com_google_gwt_event_dom_client_ClickEvent.prototype = new com_google_gwt_event_dom_client_MouseEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_google_gwt_event_dom_client_ClickHandler).onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_ClickEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(eventName, flyweight){
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, eventName, this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = eventName;
}

function com_google_gwt_event_dom_client_DomEvent$Type(){
}

_ = com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V.prototype = com_google_gwt_event_dom_client_DomEvent$Type.prototype = new com_google_gwt_event_shared_GwtEvent$Type;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_dom_client_DomEvent$Type]);
_.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = null;
_.com_google_gwt_event_dom_client_DomEvent$Type_name = null;
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[key] = value;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

function com_google_gwt_event_dom_client_PrivateMap(){
}

_ = com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V.prototype = com_google_gwt_event_dom_client_PrivateMap.prototype = new java_lang_Object;
_.com_google_gwt_event_dom_client_PrivateMap_map = null;
function com_google_gwt_event_logical_shared_AttachEvent_$dispatch__Lcom_google_gwt_event_logical_shared_AttachEvent_2Lcom_google_gwt_event_logical_shared_AttachEvent$Handler_2V(this$static, handler){
  this$static.com_google_gwt_event_logical_shared_AttachEvent_attached?com_google_gwt_touch_client_TouchScroller_$setupBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(handler.com_google_gwt_touch_client_TouchScroller$1_this$0):com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(handler.com_google_gwt_touch_client_TouchScroller$1_this$0);
}

function com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV(attached){
  this.com_google_gwt_event_logical_shared_AttachEvent_attached = attached;
}

function com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(source, attached){
  var event;
  if (com_google_gwt_event_logical_shared_AttachEvent_TYPE) {
    event = new com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV(attached);
    !!source.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source.com_google_gwt_user_client_ui_Widget_handlerManager, event);
  }
}

function com_google_gwt_event_logical_shared_AttachEvent(){
}

_ = com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV.prototype = com_google_gwt_event_logical_shared_AttachEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_AttachEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_logical_shared_AttachEvent_$dispatch__Lcom_google_gwt_event_logical_shared_AttachEvent_2Lcom_google_gwt_event_logical_shared_AttachEvent$Handler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_google_gwt_event_logical_shared_AttachEvent$Handler));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_AttachEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_AttachEvent_TYPE;
}
;
_.com_google_gwt_event_logical_shared_AttachEvent_attached = false;
var com_google_gwt_event_logical_shared_AttachEvent_TYPE = null;
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(autoClosed){
  this.com_google_gwt_event_logical_shared_CloseEvent_autoClosed = autoClosed;
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source, autoClosed){
  var event;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(autoClosed);
    source.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event);
  }
}

function com_google_gwt_event_logical_shared_CloseEvent(){
}

_ = com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV.prototype = com_google_gwt_event_logical_shared_CloseEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_google_gwt_event_logical_shared_CloseHandler).onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
_.com_google_gwt_event_logical_shared_CloseEvent_autoClosed = false;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE = null;
function com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV(){
}

function com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV(source){
  var event;
  if (com_google_gwt_event_logical_shared_ResizeEvent_TYPE) {
    event = new com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event);
  }
}

function com_google_gwt_event_logical_shared_ResizeEvent(){
}

_ = com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV.prototype = com_google_gwt_event_logical_shared_ResizeEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ResizeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_google_gwt_event_logical_shared_ResizeHandler).onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ResizeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ResizeEvent_TYPE = null;
function com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(this$static, e){
  return com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, e);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type, source, handler){
  var l, removed, com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type, source);
  removed = l.remove__Ljava_lang_Object_2Z(handler);
  removed && l.isEmpty__Z() && (com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type), Q$java_util_Map) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.remove__Ljava_lang_Object_2Ljava_lang_Object_2(source), Q$java_util_List) , com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.isEmpty__Z() && java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type) , undefined);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static, eventKey){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, eventKey);
}

_ = com_google_web_bindery_event_shared_SimpleEventBus.prototype;
_.doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_web_bindery_event_shared_SimpleEventBus_doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(type, source, handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this, type, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, type, source, handler);
}
;
_ = com_google_gwt_event_shared_HandlerManager$Bus.prototype;
_.doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_event_shared_HandlerManager$Bus_doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(type, source, handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this, type, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, type, source, handler);
}
;
function com_google_gwt_i18n_client_AutoDirectionHandler_AutoDirectionHandler__Lcom_google_gwt_i18n_client_AutoDirectionHandler$Target_2Lcom_google_gwt_i18n_shared_DirectionEstimator_2V(){
}

function com_google_gwt_i18n_client_AutoDirectionHandler(){
}

_ = com_google_gwt_i18n_client_AutoDirectionHandler_AutoDirectionHandler__Lcom_google_gwt_i18n_client_AutoDirectionHandler$Target_2Lcom_google_gwt_i18n_shared_DirectionEstimator_2V.prototype = com_google_gwt_i18n_client_AutoDirectionHandler.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_dom_client_KeyUpHandler, Q$com_google_gwt_event_shared_EventHandler]);
function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, $intern_192);
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z($intern_70, dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z($intern_193, dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        elem[$intern_192] = $intern_70;
        break;
      }

    case 1:
      {
        elem[$intern_192] = $intern_193;
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && (elem[$intern_192] = $intern_7 , undefined);
        break;
      }

  }
}

function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = nullMethod;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('RTL', 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('LTR', 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('DEFAULT', 2);
  com_google_gwt_i18n_client_HasDirection$Direction_$VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_i18n_client_HasDirection$Direction, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_i18n_client_HasDirection$Direction(){
}

_ = com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV.prototype = com_google_gwt_i18n_client_HasDirection$Direction.prototype = new java_lang_Enum;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_i18n_client_HasDirection$Direction, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
var com_google_gwt_i18n_client_HasDirection$Direction_$VALUES, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
function com_google_gwt_inject_client_AbstractGinModule(){
}

_ = com_google_gwt_inject_client_AbstractGinModule.prototype = new java_lang_Object;
function com_google_gwt_lang_Array_clone___3Ljava_lang_Object_2_3Ljava_lang_Object_2(array){
  return com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(array, 0, array.length);
}

function com_google_gwt_lang_Cast_round_1int__DI(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function com_google_gwt_layout_client_Layout_$adjustHorizontalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.com_google_gwt_layout_client_Layout$Layer_left * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_leftUnit, false);
  rightPx = l.com_google_gwt_layout_client_Layout$Layer_right * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_rightUnit, false);
  widthPx = l.com_google_gwt_layout_client_Layout$Layer_width * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_widthUnit, false);
  if (l.com_google_gwt_layout_client_Layout$Layer_setLeft && !l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft) {
    l.com_google_gwt_layout_client_Layout$Layer_setLeft = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setWidth) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceRight = (parentWidth - (leftPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit, false);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceWidth = (parentWidth - (leftPx + rightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit, false);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setWidth && !l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth) {
    l.com_google_gwt_layout_client_Layout$Layer_setWidth = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setLeft) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceRight = (parentWidth - (leftPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit, false);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceLeft = (parentWidth - (rightPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit, false);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setRight && !l.com_google_gwt_layout_client_Layout$Layer_setTargetRight) {
    l.com_google_gwt_layout_client_Layout$Layer_setRight = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setWidth) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceLeft = (parentWidth - (rightPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit, false);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceWidth = (parentWidth - (leftPx + rightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit, false);
    }
  }
  l.com_google_gwt_layout_client_Layout$Layer_setLeft = l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft;
  l.com_google_gwt_layout_client_Layout$Layer_setRight = l.com_google_gwt_layout_client_Layout$Layer_setTargetRight;
  l.com_google_gwt_layout_client_Layout$Layer_setWidth = l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth;
  l.com_google_gwt_layout_client_Layout$Layer_leftUnit = l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit;
  l.com_google_gwt_layout_client_Layout$Layer_rightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit;
  l.com_google_gwt_layout_client_Layout$Layer_widthUnit = l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit;
}

function com_google_gwt_layout_client_Layout_$adjustVerticalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.com_google_gwt_layout_client_Layout$Layer_top * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_topUnit, true);
  bottomPx = l.com_google_gwt_layout_client_Layout$Layer_bottom * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_bottomUnit, true);
  heightPx = l.com_google_gwt_layout_client_Layout$Layer_height * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_heightUnit, true);
  if (l.com_google_gwt_layout_client_Layout$Layer_setTop && !l.com_google_gwt_layout_client_Layout$Layer_setTargetTop) {
    l.com_google_gwt_layout_client_Layout$Layer_setTop = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setHeight) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceBottom = (parentHeight - (topPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit, true);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceHeight = (parentHeight - (topPx + bottomPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit, true);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setHeight && !l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight) {
    l.com_google_gwt_layout_client_Layout$Layer_setHeight = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setTop) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceBottom = (parentHeight - (topPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit, true);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetTop = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceTop = (parentHeight - (bottomPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit, true);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setBottom && !l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom) {
    l.com_google_gwt_layout_client_Layout$Layer_setBottom = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setHeight) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetTop = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceTop = (parentHeight - (bottomPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit, true);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceHeight = (parentHeight - (topPx + bottomPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit, true);
    }
  }
  l.com_google_gwt_layout_client_Layout$Layer_setTop = l.com_google_gwt_layout_client_Layout$Layer_setTargetTop;
  l.com_google_gwt_layout_client_Layout$Layer_setBottom = l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom;
  l.com_google_gwt_layout_client_Layout$Layer_setHeight = l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight;
  l.com_google_gwt_layout_client_Layout$Layer_topUnit = l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit;
  l.com_google_gwt_layout_client_Layout$Layer_bottomUnit = l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit;
  l.com_google_gwt_layout_client_Layout$Layer_heightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit;
}

function com_google_gwt_layout_client_Layout_$attachChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2Lcom_google_gwt_layout_client_Layout$Layer_2(this$static, child, userObject){
  var container, layer;
  container = com_google_gwt_layout_client_LayoutImpl_$attachChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_layout_client_Layout_parentElem, child);
  layer = new com_google_gwt_layout_client_Layout$Layer_Layout$Layer__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2V(container, child, userObject);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_layout_client_Layout_layers, layer);
  return layer;
}

function com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, unit, vertical){
  return com_google_gwt_layout_client_LayoutImpl_$getUnitSizeInPixels__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static.com_google_gwt_layout_client_Layout_impl, this$static.com_google_gwt_layout_client_Layout_parentElem, unit, vertical);
}

function com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static, duration, callback){
  var l, l$iterator, parentHeight, parentWidth;
  !!this$static.com_google_gwt_layout_client_Layout_animation && com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static.com_google_gwt_layout_client_Layout_animation);
  if (duration == 0) {
    for (l$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_layout_client_Layout_layers); l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
      l = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(l$iterator), Q$com_google_gwt_layout_client_Layout$Layer);
      l.com_google_gwt_layout_client_Layout$Layer_left = l.com_google_gwt_layout_client_Layout$Layer_sourceLeft = l.com_google_gwt_layout_client_Layout$Layer_targetLeft;
      l.com_google_gwt_layout_client_Layout$Layer_top = l.com_google_gwt_layout_client_Layout$Layer_sourceTop = l.com_google_gwt_layout_client_Layout$Layer_targetTop;
      l.com_google_gwt_layout_client_Layout$Layer_right = l.com_google_gwt_layout_client_Layout$Layer_sourceRight = l.com_google_gwt_layout_client_Layout$Layer_targetRight;
      l.com_google_gwt_layout_client_Layout$Layer_bottom = l.com_google_gwt_layout_client_Layout$Layer_sourceBottom = l.com_google_gwt_layout_client_Layout$Layer_targetBottom;
      l.com_google_gwt_layout_client_Layout$Layer_width = l.com_google_gwt_layout_client_Layout$Layer_sourceWidth = l.com_google_gwt_layout_client_Layout$Layer_targetWidth;
      l.com_google_gwt_layout_client_Layout$Layer_height = l.com_google_gwt_layout_client_Layout$Layer_sourceHeight = l.com_google_gwt_layout_client_Layout$Layer_targetHeight;
      l.com_google_gwt_layout_client_Layout$Layer_setLeft = l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft;
      l.com_google_gwt_layout_client_Layout$Layer_setTop = l.com_google_gwt_layout_client_Layout$Layer_setTargetTop;
      l.com_google_gwt_layout_client_Layout$Layer_setRight = l.com_google_gwt_layout_client_Layout$Layer_setTargetRight;
      l.com_google_gwt_layout_client_Layout$Layer_setBottom = l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom;
      l.com_google_gwt_layout_client_Layout$Layer_setWidth = l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth;
      l.com_google_gwt_layout_client_Layout$Layer_setHeight = l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight;
      l.com_google_gwt_layout_client_Layout$Layer_leftUnit = l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit;
      l.com_google_gwt_layout_client_Layout$Layer_topUnit = l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit;
      l.com_google_gwt_layout_client_Layout$Layer_rightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit;
      l.com_google_gwt_layout_client_Layout$Layer_bottomUnit = l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit;
      l.com_google_gwt_layout_client_Layout$Layer_widthUnit = l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit;
      l.com_google_gwt_layout_client_Layout$Layer_heightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit;
      com_google_gwt_layout_client_LayoutImpl_$layout__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_layout_client_Layout$Layer_2V(l);
    }
    return;
  }
  parentWidth = this$static.com_google_gwt_layout_client_Layout_parentElem.clientWidth;
  parentHeight = this$static.com_google_gwt_layout_client_Layout_parentElem.clientHeight;
  for (l$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_layout_client_Layout_layers); l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    l = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(l$iterator), Q$com_google_gwt_layout_client_Layout$Layer);
    com_google_gwt_layout_client_Layout_$adjustHorizontalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentWidth, l);
    com_google_gwt_layout_client_Layout_$adjustVerticalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentHeight, l);
  }
  this$static.com_google_gwt_layout_client_Layout_animation = new com_google_gwt_layout_client_Layout$1_Layout$1__Lcom_google_gwt_layout_client_Layout_2V(this$static, callback);
  com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2ILcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_layout_client_Layout_animation, duration, this$static.com_google_gwt_layout_client_Layout_parentElem);
}

function com_google_gwt_layout_client_Layout_$removeChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_layout_client_Layout$Layer_2V(this$static, layer){
  com_google_gwt_layout_client_LayoutImpl_$removeChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(layer.com_google_gwt_layout_client_Layout$Layer_container, layer.com_google_gwt_layout_client_Layout$Layer_child);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_layout_client_Layout_layers, layer);
}

function com_google_gwt_layout_client_Layout_Layout__Lcom_google_gwt_dom_client_Element_2V(parent){
  this.com_google_gwt_layout_client_Layout_impl = new com_google_gwt_layout_client_LayoutImpl_LayoutImpl__V;
  this.com_google_gwt_layout_client_Layout_layers = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_layout_client_Layout_parentElem = parent;
  com_google_gwt_layout_client_LayoutImpl_$initParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(this.com_google_gwt_layout_client_Layout_impl, parent);
}

function com_google_gwt_layout_client_Layout(){
}

_ = com_google_gwt_layout_client_Layout_Layout__Lcom_google_gwt_dom_client_Element_2V.prototype = com_google_gwt_layout_client_Layout.prototype = new java_lang_Object;
_.com_google_gwt_layout_client_Layout_animation = null;
_.com_google_gwt_layout_client_Layout_parentElem = null;
function com_google_gwt_layout_client_Layout$1_Layout$1__Lcom_google_gwt_layout_client_Layout_2V(this$0, val$callback){
  this.com_google_gwt_layout_client_Layout$1_this$0 = this$0;
  this.com_google_gwt_layout_client_Layout$1_val$callback = val$callback;
  com_google_gwt_animation_client_Animation_Animation__V.call(this);
}

function com_google_gwt_layout_client_Layout$1(){
}

_ = com_google_gwt_layout_client_Layout$1_Layout$1__Lcom_google_gwt_layout_client_Layout_2V.prototype = com_google_gwt_layout_client_Layout$1.prototype = new com_google_gwt_animation_client_Animation;
_.onCancel__V = function com_google_gwt_layout_client_Layout$1_onCancel__V(){
  this.com_google_gwt_layout_client_Layout$1_this$0.com_google_gwt_layout_client_Layout_animation = null;
  com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this.com_google_gwt_layout_client_Layout$1_this$0, 0, null);
}
;
_.onComplete__V = function com_google_gwt_layout_client_Layout$1_onComplete__V(){
  this.com_google_gwt_layout_client_Layout$1_this$0.com_google_gwt_layout_client_Layout_animation = null;
  com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this.com_google_gwt_layout_client_Layout$1_this$0, 0, null);
}
;
_.onUpdate__DV = function com_google_gwt_layout_client_Layout$1_onUpdate__DV(progress){
  var l, l$iterator, com_google_gwt_user_client_ui_LayoutCommand$1_$onLayout__Lcom_google_gwt_user_client_ui_LayoutCommand$1_2Lcom_google_gwt_layout_client_Layout$Layer_2DV_child_0;
  for (l$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this.com_google_gwt_layout_client_Layout$1_this$0.com_google_gwt_layout_client_Layout_layers); l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    l = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(l$iterator), Q$com_google_gwt_layout_client_Layout$Layer);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft && (l.com_google_gwt_layout_client_Layout$Layer_left = l.com_google_gwt_layout_client_Layout$Layer_sourceLeft + (l.com_google_gwt_layout_client_Layout$Layer_targetLeft - l.com_google_gwt_layout_client_Layout$Layer_sourceLeft) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetRight && (l.com_google_gwt_layout_client_Layout$Layer_right = l.com_google_gwt_layout_client_Layout$Layer_sourceRight + (l.com_google_gwt_layout_client_Layout$Layer_targetRight - l.com_google_gwt_layout_client_Layout$Layer_sourceRight) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetTop && (l.com_google_gwt_layout_client_Layout$Layer_top = l.com_google_gwt_layout_client_Layout$Layer_sourceTop + (l.com_google_gwt_layout_client_Layout$Layer_targetTop - l.com_google_gwt_layout_client_Layout$Layer_sourceTop) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom && (l.com_google_gwt_layout_client_Layout$Layer_bottom = l.com_google_gwt_layout_client_Layout$Layer_sourceBottom + (l.com_google_gwt_layout_client_Layout$Layer_targetBottom - l.com_google_gwt_layout_client_Layout$Layer_sourceBottom) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth && (l.com_google_gwt_layout_client_Layout$Layer_width = l.com_google_gwt_layout_client_Layout$Layer_sourceWidth + (l.com_google_gwt_layout_client_Layout$Layer_targetWidth - l.com_google_gwt_layout_client_Layout$Layer_sourceWidth) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight && (l.com_google_gwt_layout_client_Layout$Layer_height = l.com_google_gwt_layout_client_Layout$Layer_sourceHeight + (l.com_google_gwt_layout_client_Layout$Layer_targetHeight - l.com_google_gwt_layout_client_Layout$Layer_sourceHeight) * progress);
    com_google_gwt_layout_client_LayoutImpl_$layout__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_layout_client_Layout$Layer_2V(l);
    !!this.com_google_gwt_layout_client_Layout$1_val$callback && (com_google_gwt_user_client_ui_LayoutCommand$1_$onLayout__Lcom_google_gwt_user_client_ui_LayoutCommand$1_2Lcom_google_gwt_layout_client_Layout$Layer_2DV_child_0 = l.com_google_gwt_layout_client_Layout$Layer_userObject , com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(com_google_gwt_user_client_ui_LayoutCommand$1_$onLayout__Lcom_google_gwt_user_client_ui_LayoutCommand$1_2Lcom_google_gwt_layout_client_Layout$Layer_2DV_child_0, Q$com_google_gwt_user_client_ui_RequiresResize) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_user_client_ui_LayoutCommand$1_$onLayout__Lcom_google_gwt_user_client_ui_LayoutCommand$1_2Lcom_google_gwt_layout_client_Layout$Layer_2DV_child_0, Q$com_google_gwt_user_client_ui_RequiresResize).onResize__V() , undefined);
  }
}
;
_.com_google_gwt_layout_client_Layout$1_this$0 = null;
_.com_google_gwt_layout_client_Layout$1_val$callback = null;
function com_google_gwt_layout_client_Layout$Layer_$setBottomHeight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, bottomUnit, height, heightUnit){
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = this$static.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = true;
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetTop = false;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetBottom = 0;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetHeight = height;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit = bottomUnit;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit = heightUnit;
}

function com_google_gwt_layout_client_Layout$Layer_$setLeftRight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, left, leftUnit, right, rightUnit){
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = this$static.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = false;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetLeft = left;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetRight = right;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit = leftUnit;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetRightUnit = rightUnit;
}

function com_google_gwt_layout_client_Layout$Layer_$setLeftWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, left, leftUnit, width, widthUnit){
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = this$static.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = true;
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetRight = false;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetLeft = left;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetWidth = width;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit = leftUnit;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit = widthUnit;
}

function com_google_gwt_layout_client_Layout$Layer_$setRightWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, rightUnit, width, widthUnit){
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetRight = this$static.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = true;
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = false;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetRight = 0;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetWidth = width;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetRightUnit = rightUnit;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit = widthUnit;
}

function com_google_gwt_layout_client_Layout$Layer_$setTopBottom__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, topUnit, bottom, bottomUnit){
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetTop = this$static.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = false;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetTop = 0;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetBottom = bottom;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetTopUnit = topUnit;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit = bottomUnit;
}

function com_google_gwt_layout_client_Layout$Layer_$setTopHeight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, top, topUnit, height, heightUnit){
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetTop = this$static.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = true;
  this$static.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = false;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetTop = top;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetHeight = height;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetTopUnit = topUnit;
  this$static.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit = heightUnit;
}

function com_google_gwt_layout_client_Layout$Layer_$setVisible__Lcom_google_gwt_layout_client_Layout$Layer_2ZV(this$static, visible){
  this$static.com_google_gwt_layout_client_Layout$Layer_visible = visible;
}

function com_google_gwt_layout_client_Layout$Layer_Layout$Layer__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2V(container, child, userObject){
  this.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit = (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX);
  this.com_google_gwt_layout_client_Layout$Layer_targetTopUnit = com_google_gwt_dom_client_Style$Unit_PX;
  this.com_google_gwt_layout_client_Layout$Layer_targetRightUnit = com_google_gwt_dom_client_Style$Unit_PX;
  this.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit = com_google_gwt_dom_client_Style$Unit_PX;
  this.com_google_gwt_layout_client_Layout$Layer_container = container;
  this.com_google_gwt_layout_client_Layout$Layer_child = child;
  this.com_google_gwt_layout_client_Layout$Layer_userObject = userObject;
}

function com_google_gwt_layout_client_Layout$Layer(){
}

_ = com_google_gwt_layout_client_Layout$Layer_Layout$Layer__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2V.prototype = com_google_gwt_layout_client_Layout$Layer.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_layout_client_Layout$Layer]);
_.com_google_gwt_layout_client_Layout$Layer_bottom = 0;
_.com_google_gwt_layout_client_Layout$Layer_bottomUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_child = null;
_.com_google_gwt_layout_client_Layout$Layer_container = null;
_.com_google_gwt_layout_client_Layout$Layer_height = 0;
_.com_google_gwt_layout_client_Layout$Layer_heightUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_left = 0;
_.com_google_gwt_layout_client_Layout$Layer_leftUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_right = 0;
_.com_google_gwt_layout_client_Layout$Layer_rightUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_setBottom = false;
_.com_google_gwt_layout_client_Layout$Layer_setHeight = false;
_.com_google_gwt_layout_client_Layout$Layer_setLeft = false;
_.com_google_gwt_layout_client_Layout$Layer_setRight = false;
_.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = false;
_.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetTop = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = false;
_.com_google_gwt_layout_client_Layout$Layer_setTop = false;
_.com_google_gwt_layout_client_Layout$Layer_setWidth = false;
_.com_google_gwt_layout_client_Layout$Layer_sourceBottom = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceHeight = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceLeft = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceRight = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceTop = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceWidth = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetBottom = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetHeight = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_targetLeft = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetRight = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetTop = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetWidth = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_top = 0;
_.com_google_gwt_layout_client_Layout$Layer_topUnit = null;
_.com_google_gwt_layout_client_Layout$Layer_userObject = null;
_.com_google_gwt_layout_client_Layout$Layer_visible = true;
_.com_google_gwt_layout_client_Layout$Layer_width = 0;
_.com_google_gwt_layout_client_Layout$Layer_widthUnit = null;
function com_google_gwt_layout_client_LayoutImpl_$clinit__V(){
  com_google_gwt_layout_client_LayoutImpl_$clinit__V = nullMethod;
  com_google_gwt_layout_client_LayoutImpl_fixedRuler = com_google_gwt_layout_client_LayoutImpl_createRuler__Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_DivElement_2((com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_CM), com_google_gwt_dom_client_Style$Unit_CM);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, com_google_gwt_layout_client_LayoutImpl_fixedRuler);
}

function com_google_gwt_layout_client_LayoutImpl_$attachChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(parent, child){
  var container;
  container = $doc.createElement($intern_22);
  container.appendChild(child);
  container.style[$intern_23] = (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_24);
  container.style[$intern_111] = (com_google_gwt_dom_client_Style$Overflow_$clinit__V() , $intern_74);
  com_google_gwt_layout_client_LayoutImpl_$fillParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(child);
  parent.insertBefore(container, null);
  return container;
}

function com_google_gwt_layout_client_LayoutImpl_$fillParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(elem){
  var style;
  style = elem.style;
  style[$intern_23] = (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_24);
  style[$intern_25] = 0 + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_26);
  style[$intern_27] = $intern_28;
  style[$intern_29] = $intern_28;
  style[$intern_30] = $intern_28;
}

function com_google_gwt_layout_client_LayoutImpl_$getUnitSizeInPixels__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, parent, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.java_lang_Enum_ordinal) {
    case 1:
      return (vertical?parent.clientHeight:parent.clientWidth) / 100;
    case 2:
      return (this$static.com_google_gwt_layout_client_LayoutImpl_relativeRuler.offsetWidth || 0) / 10;
    case 3:
      return (this$static.com_google_gwt_layout_client_LayoutImpl_relativeRuler.offsetHeight || 0) / 10;
    case 7:
      return (com_google_gwt_layout_client_LayoutImpl_fixedRuler.offsetWidth || 0) * 0.1;
    case 8:
      return (com_google_gwt_layout_client_LayoutImpl_fixedRuler.offsetWidth || 0) * 0.01;
    case 6:
      return (com_google_gwt_layout_client_LayoutImpl_fixedRuler.offsetWidth || 0) * 0.254;
    case 4:
      return (com_google_gwt_layout_client_LayoutImpl_fixedRuler.offsetWidth || 0) * 0.00353;
    case 5:
      return (com_google_gwt_layout_client_LayoutImpl_fixedRuler.offsetWidth || 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function com_google_gwt_layout_client_LayoutImpl_$initParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(this$static, parent){
  parent.style[$intern_23] = (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_124);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(parent, this$static.com_google_gwt_layout_client_LayoutImpl_relativeRuler = com_google_gwt_layout_client_LayoutImpl_createRuler__Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_DivElement_2((com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_EM), com_google_gwt_dom_client_Style$Unit_EX));
}

function com_google_gwt_layout_client_LayoutImpl_$layout__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_layout_client_Layout$Layer_2V(layer){
  var style;
  style = layer.com_google_gwt_layout_client_Layout$Layer_container.style;
  layer.com_google_gwt_layout_client_Layout$Layer_visible?(style[$intern_114] = $intern_7 , undefined):(style[$intern_114] = (com_google_gwt_dom_client_Style$Display_$clinit__V() , $intern_132) , undefined);
  style[$intern_25] = layer.com_google_gwt_layout_client_Layout$Layer_setLeft?layer.com_google_gwt_layout_client_Layout$Layer_left + $intern_26:$intern_7;
  style[$intern_27] = layer.com_google_gwt_layout_client_Layout$Layer_setTop?layer.com_google_gwt_layout_client_Layout$Layer_top + $intern_26:$intern_7;
  style[$intern_29] = layer.com_google_gwt_layout_client_Layout$Layer_setRight?layer.com_google_gwt_layout_client_Layout$Layer_right + $intern_26:$intern_7;
  style[$intern_30] = layer.com_google_gwt_layout_client_Layout$Layer_setBottom?layer.com_google_gwt_layout_client_Layout$Layer_bottom + $intern_26:$intern_7;
  style[$intern_54] = layer.com_google_gwt_layout_client_Layout$Layer_setWidth?layer.com_google_gwt_layout_client_Layout$Layer_width + $intern_26:$intern_7;
  style[$intern_62] = layer.com_google_gwt_layout_client_Layout$Layer_setHeight?layer.com_google_gwt_layout_client_Layout$Layer_height + $intern_26:$intern_7;
  style = layer.com_google_gwt_layout_client_Layout$Layer_child.style;
  switch (2) {
    case 0:
    case 1:
    case 2:
      style[$intern_25] = 0 + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_26);
      style[$intern_29] = $intern_28;
  }
  switch (2) {
    case 0:
    case 1:
    case 2:
      style[$intern_27] = 0 + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_26);
      style[$intern_30] = $intern_28;
  }
}

function com_google_gwt_layout_client_LayoutImpl_$removeChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(container, child){
  var style;
  com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(container);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(child) == container && com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(child);
  style = child.style;
  style[$intern_23] = $intern_7;
  style[$intern_25] = $intern_7;
  style[$intern_27] = $intern_7;
  style[$intern_54] = $intern_7;
  style[$intern_62] = $intern_7;
}

function com_google_gwt_layout_client_LayoutImpl_LayoutImpl__V(){
  com_google_gwt_layout_client_LayoutImpl_$clinit__V();
}

function com_google_gwt_layout_client_LayoutImpl_createRuler__Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_DivElement_2(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement($intern_22);
  com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(ruler, '&nbsp;');
  style = ruler.style;
  style[$intern_23] = (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_24);
  style[$intern_31] = '-32767';
  style[$intern_27] = -20 + heightUnit.getType__Ljava_lang_String_2();
  style[$intern_54] = 10 + widthUnit.getType__Ljava_lang_String_2();
  style[$intern_62] = 10 + heightUnit.getType__Ljava_lang_String_2();
  return ruler;
}

function com_google_gwt_layout_client_LayoutImpl(){
}

_ = com_google_gwt_layout_client_LayoutImpl_LayoutImpl__V.prototype = com_google_gwt_layout_client_LayoutImpl.prototype = new java_lang_Object;
_.com_google_gwt_layout_client_LayoutImpl_relativeRuler = null;
var com_google_gwt_layout_client_LayoutImpl_fixedRuler = null;
function com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(this$static, input, replacement){
  return input.replace(this$static, replacement);
}

function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(html){
  if (html == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V($intern_194);
  }
  this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html = html;
}

function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(){
}

_ = com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V.prototype = com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.prototype = new java_lang_Object;
_.asString__Ljava_lang_String_2 = function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_asString__Ljava_lang_String_2(){
  return this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html;
}
;
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_equals__Ljava_lang_Object_2Z(obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(obj, Q$com_google_gwt_safehtml_shared_SafeHtml)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(obj, Q$com_google_gwt_safehtml_shared_SafeHtml).asString__Ljava_lang_String_2());
}
;
_.hashCode__I$ = function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_safehtml_shared_SafeHtml, Q$java_io_Serializable]);
_.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html = null;
function com_google_gwt_safehtml_shared_SafeHtmlBuilder_$append__Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2(this$static, html){
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb, html.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  return this$static;
}

function com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V(){
  this.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb = new java_lang_StringBuilder_StringBuilder__V;
}

function com_google_gwt_safehtml_shared_SafeHtmlBuilder(){
}

_ = com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V.prototype = com_google_gwt_safehtml_shared_SafeHtmlBuilder.prototype = new java_lang_Object;
function com_google_gwt_safehtml_shared_SafeHtmlString_$equals__Lcom_google_gwt_safehtml_shared_SafeHtmlString_2Ljava_lang_Object_2Z(this$static, obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(obj, Q$com_google_gwt_safehtml_shared_SafeHtml)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.com_google_gwt_safehtml_shared_SafeHtmlString_html, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(obj, Q$com_google_gwt_safehtml_shared_SafeHtml).asString__Ljava_lang_String_2());
}

function com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(html){
  if (html == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V($intern_194);
  }
  this.com_google_gwt_safehtml_shared_SafeHtmlString_html = html;
}

function com_google_gwt_safehtml_shared_SafeHtmlString(){
}

_ = com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V.prototype = com_google_gwt_safehtml_shared_SafeHtmlString.prototype = new java_lang_Object;
_.asString__Ljava_lang_String_2 = function com_google_gwt_safehtml_shared_SafeHtmlString_asString__Ljava_lang_String_2(){
  return this.com_google_gwt_safehtml_shared_SafeHtmlString_html;
}
;
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_safehtml_shared_SafeHtmlString_equals__Ljava_lang_Object_2Z(obj){
  return com_google_gwt_safehtml_shared_SafeHtmlString_$equals__Lcom_google_gwt_safehtml_shared_SafeHtmlString_2Ljava_lang_Object_2Z(this, obj);
}
;
_.hashCode__I$ = function com_google_gwt_safehtml_shared_SafeHtmlString_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_SafeHtmlString_html);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_safehtml_shared_SafeHtml, Q$java_io_Serializable]);
_.com_google_gwt_safehtml_shared_SafeHtmlString_html = null;
function com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V(){
  com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V = nullMethod;
  com_google_gwt_safehtml_shared_SafeHtmlUtils_EMPTY_1SAFE_1HTML = new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V($intern_7);
  com_google_gwt_safehtml_shared_SafeHtmlUtils_AMP_1RE = new RegExp($intern_195, $intern_38);
  com_google_gwt_safehtml_shared_SafeHtmlUtils_GT_1RE = new RegExp($intern_196, $intern_38);
  com_google_gwt_safehtml_shared_SafeHtmlUtils_LT_1RE = new RegExp($intern_197, $intern_38);
  com_google_gwt_safehtml_shared_SafeHtmlUtils_SQUOT_1RE = new RegExp($intern_198, $intern_38);
  com_google_gwt_safehtml_shared_SafeHtmlUtils_QUOT_1RE = new RegExp($intern_68, $intern_38);
}

function com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(s){
  com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V();
  s.indexOf($intern_195) != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_AMP_1RE, s, '&amp;'));
  s.indexOf($intern_197) != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_LT_1RE, s, '&lt;'));
  s.indexOf($intern_196) != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_GT_1RE, s, '&gt;'));
  s.indexOf($intern_68) != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_QUOT_1RE, s, '&quot;'));
  s.indexOf($intern_198) != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_SQUOT_1RE, s, '&#39;'));
  return s;
}

var com_google_gwt_safehtml_shared_SafeHtmlUtils_AMP_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_EMPTY_1SAFE_1HTML, com_google_gwt_safehtml_shared_SafeHtmlUtils_GT_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_LT_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_QUOT_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_SQUOT_1RE;
function com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V(){
  this.com_google_gwt_storage_client_Storage_storage = 'localStorage';
}

function com_google_gwt_storage_client_Storage_getLocalStorageIfSupported__Lcom_google_gwt_storage_client_Storage_2(){
  !com_google_gwt_storage_client_Storage_supportDetectorImpl && (com_google_gwt_storage_client_Storage_supportDetectorImpl = new com_google_gwt_storage_client_Storage$StorageSupportDetector_Storage$StorageSupportDetector__V);
  if (com_google_gwt_storage_client_Storage_supportDetectorImpl.com_google_gwt_storage_client_Storage$StorageSupportDetector_isLocalStorageSupported) {
    !com_google_gwt_storage_client_Storage_localStorage && (com_google_gwt_storage_client_Storage_localStorage = new com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V);
    return com_google_gwt_storage_client_Storage_localStorage;
  }
  return null;
}

function com_google_gwt_storage_client_Storage(){
}

_ = com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V.prototype = com_google_gwt_storage_client_Storage.prototype = new java_lang_Object;
_.com_google_gwt_storage_client_Storage_storage = null;
var com_google_gwt_storage_client_Storage_localStorage = null, com_google_gwt_storage_client_Storage_supportDetectorImpl = null;
function com_google_gwt_storage_client_Storage$StorageSupportDetector_Storage$StorageSupportDetector__V(){
  this.com_google_gwt_storage_client_Storage$StorageSupportDetector_isLocalStorageSupported = typeof $wnd.localStorage != $intern_18;
  typeof $wnd.sessionStorage != $intern_18;
}

function com_google_gwt_storage_client_Storage$StorageSupportDetector(){
}

_ = com_google_gwt_storage_client_Storage$StorageSupportDetector_Storage$StorageSupportDetector__V.prototype = com_google_gwt_storage_client_Storage$StorageSupportDetector.prototype = new java_lang_Object;
function com_google_gwt_storage_client_StorageImpl_$getItem__Lcom_google_gwt_storage_client_StorageImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(storage, key){
  return $wnd[storage].getItem(key);
}

function com_google_gwt_text_shared_AbstractRenderer(){
}

_ = com_google_gwt_text_shared_AbstractRenderer.prototype = new java_lang_Object;
function com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V(){
}

function com_google_gwt_text_shared_testing_PassthroughParser(){
}

_ = com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V.prototype = com_google_gwt_text_shared_testing_PassthroughParser.prototype = new java_lang_Object;
var com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = null;
function com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V(){
}

function com_google_gwt_text_shared_testing_PassthroughRenderer(){
}

_ = com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V.prototype = com_google_gwt_text_shared_testing_PassthroughRenderer.prototype = new com_google_gwt_text_shared_AbstractRenderer;
var com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = null;
function com_google_gwt_touch_client_Point_Point__DDV(x, y){
  this.com_google_gwt_touch_client_Point_x = x;
  this.com_google_gwt_touch_client_Point_y = y;
}

function com_google_gwt_touch_client_Point(){
}

_ = com_google_gwt_touch_client_Point_Point__DDV.prototype = com_google_gwt_touch_client_Point.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_touch_client_Point_equals__Ljava_lang_Object_2Z(obj){
  var c;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(obj, Q$com_google_gwt_touch_client_Point)) {
    return false;
  }
  c = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(obj, Q$com_google_gwt_touch_client_Point);
  return this.com_google_gwt_touch_client_Point_x == c.com_google_gwt_touch_client_Point_x && this.com_google_gwt_touch_client_Point_y == c.com_google_gwt_touch_client_Point_y;
}
;
_.hashCode__I$ = function com_google_gwt_touch_client_Point_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(this.com_google_gwt_touch_client_Point_x) ^ com_google_gwt_lang_Cast_round_1int__DI(this.com_google_gwt_touch_client_Point_y);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_touch_client_Point]);
_.com_google_gwt_touch_client_Point_x = 0;
_.com_google_gwt_touch_client_Point_y = 0;
function com_google_gwt_touch_client_TouchScroller_$hitTest__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Z(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new com_google_gwt_touch_client_Point_Point__DDV(point1.com_google_gwt_touch_client_Point_x - point2.com_google_gwt_touch_client_Point_x, point1.com_google_gwt_touch_client_Point_y - point2.com_google_gwt_touch_client_Point_y);
  absDiffX = java_lang_Math_abs__DD(diff.com_google_gwt_touch_client_Point_x);
  absDiffY = java_lang_Math_abs__DD(diff.com_google_gwt_touch_client_Point_y);
  return absDiffX <= 25 && absDiffY <= 25;
}

function com_google_gwt_touch_client_TouchScroller_$isClickScrollTriggeringTouch__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this$static, clickPoint){
  if (this$static.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point) {
    return com_google_gwt_touch_client_TouchScroller_$hitTest__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Z(clickPoint, this$static.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point);
  }
  return false;
}

function com_google_gwt_touch_client_TouchScroller_$isClickTouchPositionDuringMomentum__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = com_google_gwt_core_client_Duration_currentTimeMillis__D();
  same = false;
  for (point$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_touch_client_TouchScroller_touchPositionsDuringMomentum); point$iterator.java_util_AbstractList$IteratorImpl_i < point$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    point = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(point$iterator), Q$com_google_gwt_touch_client_TouchScroller$TemporalPoint);
    if (currentTime - point.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time <= 2500 && com_google_gwt_touch_client_TouchScroller_$hitTest__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Z(clickPoint, point.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point)) {
      same = true;
      break;
    }
  }
  return same;
}

function com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static){
  if (this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg = null;
  }
}

function com_google_gwt_touch_client_TouchScroller_$setupBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static){
  com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
  this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg = com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static));
}

function com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$6_this$0 = this$0;
}

function com_google_gwt_touch_client_TouchScroller$6(){
}

_ = com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V.prototype = com_google_gwt_touch_client_TouchScroller$6.prototype = new java_lang_Object;
_.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V = function com_google_gwt_touch_client_TouchScroller$6_onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event){
  var clickPoint;
  if (1 == com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.type)) {
    clickPoint = new com_google_gwt_touch_client_Point_Point__DDV(event.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.clientX || 0, event.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.clientY || 0);
    if (com_google_gwt_touch_client_TouchScroller_$isClickScrollTriggeringTouch__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this.com_google_gwt_touch_client_TouchScroller$6_this$0, clickPoint) || com_google_gwt_touch_client_TouchScroller_$isClickTouchPositionDuringMomentum__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this.com_google_gwt_touch_client_TouchScroller$6_this$0, clickPoint)) {
      event.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
      event.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.stopPropagation();
      event.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.preventDefault();
    }
  }
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_shared_EventHandler, Q$com_google_gwt_user_client_Event$NativePreviewHandler]);
_.com_google_gwt_touch_client_TouchScroller$6_this$0 = null;
function com_google_gwt_uibinder_client_UiBinderUtil_attachToDom__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2(element){
  var origParent, origSibling;
  com_google_gwt_uibinder_client_UiBinderUtil_ensureHiddenDiv__V();
  origParent = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(element);
  origSibling = com_google_gwt_dom_client_DOMImpl_$getNextSiblingElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(element);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv, element);
  return new com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_UiBinderUtil$TempAttachment__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(origParent, origSibling, element);
}

function com_google_gwt_uibinder_client_UiBinderUtil_ensureHiddenDiv__V(){
  if (!com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv) {
    com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv = $doc.createElement($intern_22);
    com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv.style.display = $intern_132;
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_RootPanel_getBodyElement__Lcom_google_gwt_user_client_Element_2(), com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv);
  }
}

function com_google_gwt_uibinder_client_UiBinderUtil_orphan__Lcom_google_gwt_dom_client_Node_2V(node){
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(node.parentNode, node);
}

var com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv = null;
function com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_UiBinderUtil$TempAttachment__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(origParent, origSibling, element){
  this.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent = origParent;
  this.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origSibling = origSibling;
  this.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element = element;
}

function com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment(){
}

_ = com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_UiBinderUtil$TempAttachment__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V.prototype = com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment.prototype = new java_lang_Object;
_.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element = null;
_.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent = null;
_.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origSibling = null;
function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, eventTypeName){
  com_google_gwt_user_client_DOM_sinkBitlessEvent__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, eventTypeName);
}

function com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(elem, style, add){
  if (!elem) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V($intern_97);
  }
  style = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_98);
  }
  add?com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, style):com_google_gwt_dom_client_Element_$removeClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, style);
}

function com_google_gwt_user_client_ui_UIObject(){
}

_ = com_google_gwt_user_client_ui_UIObject.prototype = new java_lang_Object;
_.getOffsetHeight__I = function com_google_gwt_user_client_ui_UIObject_getOffsetHeight__I(){
  return com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this.com_google_gwt_user_client_ui_UIObject_element, $intern_128);
}
;
_.getOffsetWidth__I = function com_google_gwt_user_client_ui_UIObject_getOffsetWidth__I(){
  return com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this.com_google_gwt_user_client_ui_UIObject_element, $intern_127);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_UIObject]);
_.com_google_gwt_user_client_ui_UIObject_element = null;
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type){
  var typeInt;
  typeInt = com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(type.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, type.com_google_gwt_event_dom_client_DomEvent$Type_name):this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, typeInt | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.isAttached__Z()) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_impl_DOMImpl_$setEventListener__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, bitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= bitsToAdd));
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
  com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(this$static, true);
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event){
  var related;
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event.type)) {
    case 16:
    case 32:
      related = event.relatedTarget;
      if (!!related && com_google_gwt_dom_client_DOMImplStandardBase_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.isAttached__Z()) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload__V();
    com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    (com_google_gwt_user_client_ui_RootPanel_$clinit__V() , java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static)) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(this$static.com_google_gwt_user_client_ui_Widget_parent, Q$com_google_gwt_user_client_ui_HasWidgets)) {
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_Widget_parent, Q$com_google_gwt_user_client_ui_HasWidgets).remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets");
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent) {
    try {
      !!oldParent && oldParent.isAttached__Z() && this$static.onDetach__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent');
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent;
    parent.isAttached__Z() && this$static.onAttach__V();
  }
}

function com_google_gwt_user_client_ui_Widget(){
}

_ = com_google_gwt_user_client_ui_Widget.prototype = new com_google_gwt_user_client_ui_UIObject;
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_user_client_ui_Widget_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event){
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this, event);
}
;
_.isAttached__Z = function com_google_gwt_user_client_ui_Widget_isAttached__Z(){
  return this.com_google_gwt_user_client_ui_Widget_attached;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Widget_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_Widget_onUnload__V(){
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
_.com_google_gwt_user_client_ui_Widget_handlerManager = null;
_.com_google_gwt_user_client_ui_Widget_layoutData = null;
_.com_google_gwt_user_client_ui_Widget_parent = null;
function com_google_gwt_user_client_ui_Composite_$isAttached__Lcom_google_gwt_user_client_ui_Composite_2Z(this$static){
  if (this$static.com_google_gwt_user_client_ui_Composite_widget) {
    return this$static.com_google_gwt_user_client_ui_Composite_widget.isAttached__Z();
  }
  return false;
}

function com_google_gwt_user_cellview_client_AbstractHasData_$checkRowBounds__Lcom_google_gwt_user_cellview_client_AbstractHasData_2IV(this$static, row){
  if (!(row >= 0 && row < com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleItemCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter))) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_130 + row + $intern_131 + com_google_gwt_user_cellview_client_HasDataPresenter_$getCurrentState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount);
  }
}

function com_google_gwt_user_cellview_client_AbstractHasData_$replaceChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Ljava_util_List_2ILcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static, start, html){
  var newChildren;
  newChildren = com_google_gwt_user_cellview_client_AbstractCellTable$Impl_$convertToSectionElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_dom_client_TableSectionElement_2(com_google_gwt_user_cellview_client_AbstractCellTable_TABLE_1IMPL, this$static, $intern_112, html);
  com_google_gwt_user_cellview_client_AbstractHasData_replaceChildren__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static.com_google_gwt_user_cellview_client_DataGrid_tableData.com_google_gwt_user_cellview_client_DataGrid$TableWidget_section, newChildren, start);
}

function com_google_gwt_user_cellview_client_AbstractHasData_$setFocusable__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Lcom_google_gwt_dom_client_Element_2ZV(this$static, elem, focusable){
  var rowElem;
  if (focusable) {
    rowElem = elem;
    com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(rowElem, this$static.com_google_gwt_user_cellview_client_AbstractHasData_tabIndex);
  }
   else {
    elem.tabIndex = -1;
    elem.removeAttribute('tabIndex');
    elem.removeAttribute('accessKey');
  }
}

function com_google_gwt_user_cellview_client_AbstractHasData_$setRowCount__Lcom_google_gwt_user_cellview_client_AbstractHasData_2IV(this$static, count){
  com_google_gwt_user_cellview_client_HasDataPresenter_$setRowCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2IZV(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter, count, true);
}

function com_google_gwt_user_cellview_client_AbstractHasData_$setRowData__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Ljava_util_List_2V(this$static, values){
  com_google_gwt_user_cellview_client_AbstractHasData_$setRowCount__Lcom_google_gwt_user_cellview_client_AbstractHasData_2IV(this$static, values.java_util_ArrayList_size);
  com_google_gwt_user_cellview_client_AbstractHasData_$setVisibleRange__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Lcom_google_gwt_view_client_Range_2V(this$static, new com_google_gwt_view_client_Range_Range__IIV(0, values.java_util_ArrayList_size));
  com_google_gwt_user_cellview_client_HasDataPresenter_$setRowData__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2ILjava_util_List_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter, values);
}

function com_google_gwt_user_cellview_client_AbstractHasData_$setVisibleRange__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Lcom_google_gwt_view_client_Range_2V(this$static, range){
  com_google_gwt_user_cellview_client_HasDataPresenter_$setVisibleRange__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_view_client_Range_2ZZV(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter, range, false);
}

function com_google_gwt_user_cellview_client_AbstractHasData_replaceChildren__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_safehtml_shared_SafeHtml_2V(childContainer, newChildren, start){
  var childCount, count, i, nextSibling, toReplace;
  childCount = childContainer.childNodes.length;
  toReplace = null;
  start < childCount && (toReplace = childContainer.childNodes[start]);
  count = newChildren.childNodes.length;
  for (i = 0; i < count; ++i) {
    if (!toReplace) {
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(childContainer, newChildren.childNodes[0]);
    }
     else {
      nextSibling = com_google_gwt_dom_client_DOMImpl_$getNextSiblingElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(toReplace);
      com_google_gwt_dom_client_Node_$replaceChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(childContainer, newChildren.childNodes[0], toReplace);
      toReplace = nextSibling;
    }
  }
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$createHeaders__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ZV(this$static, isFooter){
  var className, classesBuilder, columnCount, curColumn, firstColumnStyle, hasHeader, header, headerBuilder, headerHtml, lastColumnStyle, prevColspan, prevHeader, sb, section, theHeaders;
  theHeaders = isFooter?this$static.com_google_gwt_user_cellview_client_AbstractCellTable_footers:this$static.com_google_gwt_user_cellview_client_AbstractCellTable_headers;
  section = isFooter?this$static.com_google_gwt_user_cellview_client_DataGrid_tableFooter.com_google_gwt_user_cellview_client_DataGrid$TableWidget_section:this$static.com_google_gwt_user_cellview_client_DataGrid_tableHeader.com_google_gwt_user_cellview_client_DataGrid$TableWidget_section;
  className = isFooter?'GPBYFDEHG':'GPBYFDEIG';
  firstColumnStyle = $intern_39 + (isFooter?'GPBYFDEFG':'GPBYFDEGG');
  lastColumnStyle = $intern_39 + (isFooter?'GPBYFDEPG':'GPBYFDEAH');
  hasHeader = false;
  sb = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb, '<tr>');
  columnCount = this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns.java_util_ArrayList_size;
  if (columnCount > 0) {
    this$static.com_google_gwt_user_cellview_client_AbstractCellTable_sortList.com_google_gwt_user_cellview_client_ColumnSortList_infos.java_util_ArrayList_size == 0?null:com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_cellview_client_AbstractCellTable_sortList.com_google_gwt_user_cellview_client_ColumnSortList_infos, 0));
    prevHeader = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2((java_util_AbstractList_checkIndex__IIV(0, theHeaders.java_util_ArrayList_size) , theHeaders.java_util_ArrayList_array[0]), Q$com_google_gwt_user_cellview_client_Header);
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns, 0), Q$com_google_gwt_user_cellview_client_Column);
    prevColspan = 1;
    classesBuilder = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(className);
    com_google_gwt_core_client_impl_StringBufferImplAppend_$append__Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2Ljava_lang_Object_2Ljava_lang_String_2V(classesBuilder.java_lang_StringBuilder_impl, firstColumnStyle);
    for (curColumn = 1; curColumn < columnCount; ++curColumn) {
      header = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2((java_util_AbstractList_checkIndex__IIV(curColumn, theHeaders.java_util_ArrayList_size) , theHeaders.java_util_ArrayList_array[curColumn]), Q$com_google_gwt_user_cellview_client_Header);
      if (header != prevHeader) {
        headerHtml = (com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V() , com_google_gwt_safehtml_shared_SafeHtmlUtils_EMPTY_1SAFE_1HTML);
        if (prevHeader) {
          hasHeader = true;
          headerBuilder = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
          com_google_gwt_cell_client_AbstractSafeHtmlCell_$render__Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2Lcom_google_gwt_cell_client_Cell$Context_2Ljava_lang_Object_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2V(prevHeader.com_google_gwt_user_cellview_client_TextHeader_text, headerBuilder);
          headerHtml = new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(headerBuilder.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
        }
        com_google_gwt_safehtml_shared_SafeHtmlBuilder_$append__Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2(sb, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$th__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2ILjava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(prevColspan, classesBuilder.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string, headerHtml));
        prevHeader = header;
        prevColspan = 1;
        classesBuilder = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(className);
      }
       else {
        ++prevColspan;
      }
      com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns, curColumn), Q$com_google_gwt_user_cellview_client_Column);
    }
    headerHtml = (com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V() , com_google_gwt_safehtml_shared_SafeHtmlUtils_EMPTY_1SAFE_1HTML);
    if (prevHeader) {
      hasHeader = true;
      headerBuilder = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
      com_google_gwt_cell_client_AbstractSafeHtmlCell_$render__Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2Lcom_google_gwt_cell_client_Cell$Context_2Ljava_lang_Object_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2V(prevHeader.com_google_gwt_user_cellview_client_TextHeader_text, headerBuilder);
      headerHtml = new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(headerBuilder.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
    }
    classesBuilder.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_39;
    com_google_gwt_core_client_impl_StringBufferImplAppend_$append__Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2Ljava_lang_Object_2Ljava_lang_String_2V(classesBuilder.java_lang_StringBuilder_impl, lastColumnStyle);
    com_google_gwt_safehtml_shared_SafeHtmlBuilder_$append__Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2(sb, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$th__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2ILjava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(prevColspan, classesBuilder.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string, headerHtml));
  }
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb, $intern_199);
  com_google_gwt_user_cellview_client_AbstractCellTable$Impl_$replaceAllRows__Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_TableSectionElement_2Lcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static, section, new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string));
  isFooter?com_google_gwt_user_client_ui_HeaderPanel_$setFooterWidget__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_cellview_client_DataGrid_headerPanel, hasHeader?this$static.com_google_gwt_user_cellview_client_DataGrid_tableFooterContainer:null):com_google_gwt_user_client_ui_HeaderPanel_$setHeaderWidget__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_cellview_client_DataGrid_headerPanel, hasHeader?this$static.com_google_gwt_user_cellview_client_DataGrid_tableHeaderContainer:null);
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$getKeyboardSelectedElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_Element_2(this$static){
  var rowIndex, rows, td, tr;
  rowIndex = com_google_gwt_user_cellview_client_HasDataPresenter_$getKeyboardSelectedRow__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter);
  rows = this$static.com_google_gwt_user_cellview_client_DataGrid_tableData.com_google_gwt_user_cellview_client_DataGrid$TableWidget_section.rows;
  if (rowIndex >= 0 && rowIndex < rows.length && this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns.java_util_ArrayList_size > 0) {
    tr = rows[rowIndex];
    td = tr.cells[this$static.com_google_gwt_user_cellview_client_AbstractCellTable_keyboardSelectedColumn];
    return com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
  }
  return null;
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$renderRowValues__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Ljava_util_List_2ILcom_google_gwt_view_client_SelectionModel_2V(this$static, sb, values, start){
  var cellBuilder, column, column$iterator, columnCount, contents, curColumn, end, i, isEven, isKeyboardSelected, keyboardSelectedRow, length, tdClasses, trBuilder, trClasses, value, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0;
  com_google_gwt_user_cellview_client_AbstractCellTable_$createHeaders__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ZV(this$static, false);
  com_google_gwt_user_cellview_client_AbstractCellTable_$createHeaders__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ZV(this$static, true);
  keyboardSelectedRow = com_google_gwt_user_cellview_client_HasDataPresenter_$getKeyboardSelectedRow__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter) + com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleRange__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_view_client_Range_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter).com_google_gwt_view_client_Range_start;
  columnCount = this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns.java_util_ArrayList_size;
  length = values.size__I();
  end = start + length;
  for (i = start; i < end; ++i) {
    value = values.get__ILjava_lang_Object_2(i - start);
    isEven = i % 2 == 0;
    isKeyboardSelected = i == keyboardSelectedRow && this$static.com_google_gwt_user_cellview_client_AbstractHasData_isFocused;
    trClasses = isEven?'GPBYFDECG':'GPBYFDEBH';
    isKeyboardSelected && (trClasses += ' GPBYFDEMG');
    trBuilder = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
    curColumn = 0;
    for (column$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns); column$iterator.java_util_AbstractList$IteratorImpl_i < column$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
      column = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(column$iterator), Q$com_google_gwt_user_cellview_client_Column);
      tdClasses = 'GPBYFDEBG';
      tdClasses += isEven?' GPBYFDEDG':' GPBYFDECH';
      curColumn == 0 && (tdClasses += ' GPBYFDEEG');
      isKeyboardSelected && (tdClasses += ' GPBYFDENG');
      curColumn == columnCount - 1 && (tdClasses += ' GPBYFDEOG');
      this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter;
      cellBuilder = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
      value != null && com_google_gwt_cell_client_AbstractSafeHtmlCell_$render__Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2Lcom_google_gwt_cell_client_Cell$Context_2Ljava_lang_Object_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2V(column.getValue__Ljava_lang_Object_2Ljava_lang_Object_2(value), cellBuilder);
      com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V();
      if (i == keyboardSelectedRow && curColumn == this$static.com_google_gwt_user_cellview_client_AbstractCellTable_keyboardSelectedColumn) {
        this$static.com_google_gwt_user_cellview_client_AbstractHasData_isFocused && (tdClasses += ' GPBYFDELG');
        contents = com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$divFocusable__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2ILcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData_tabIndex, new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(cellBuilder.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string));
      }
       else {
        contents = com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$div__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(cellBuilder.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string));
      }
      com_google_gwt_safehtml_shared_SafeHtmlBuilder_$append__Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2(trBuilder, (com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0 = new java_lang_StringBuilder_StringBuilder__V , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<td class="' , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(tdClasses)) , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_200 , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, contents.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html) , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<\/td>' , new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$td__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string)));
      ++curColumn;
    }
    com_google_gwt_safehtml_shared_SafeHtmlBuilder_$append__Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2(sb, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tr__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(trClasses, new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(trBuilder.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string)));
  }
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$replaceAllChildren__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Ljava_util_List_2Lcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static, html){
  com_google_gwt_user_cellview_client_AbstractCellTable$Impl_$replaceAllRows__Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_TableSectionElement_2Lcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static, this$static.com_google_gwt_user_cellview_client_DataGrid_tableData.com_google_gwt_user_cellview_client_DataGrid$TableWidget_section, (!com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl && (com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl = new com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_CellBasedWidgetImplStandardBase__V) , html));
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$resetFocusOnCell__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Z(this$static){
  var column, row, com_google_gwt_user_cellview_client_AbstractCellTable_$resetFocusOnCellImpl__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2IILcom_google_gwt_user_cellview_client_Column_2Z_value_0;
  row = com_google_gwt_user_cellview_client_HasDataPresenter_$getKeyboardSelectedRow__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter);
  if (row >= 0 && row < com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleItemCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter) && this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns.java_util_ArrayList_size > 0) {
    column = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns, this$static.com_google_gwt_user_cellview_client_AbstractCellTable_keyboardSelectedColumn), Q$com_google_gwt_user_cellview_client_Column);
    return com_google_gwt_user_cellview_client_AbstractCellTable_$getKeyboardSelectedElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_Element_2(this$static) , com_google_gwt_user_cellview_client_AbstractCellTable_$resetFocusOnCellImpl__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2IILcom_google_gwt_user_cellview_client_Column_2Z_value_0 = (com_google_gwt_user_cellview_client_AbstractHasData_$checkRowBounds__Lcom_google_gwt_user_cellview_client_AbstractHasData_2IV(this$static, row) , com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleItem__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2ILjava_lang_Object_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter, row)) , this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter , column.getValue__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_cellview_client_AbstractCellTable_$resetFocusOnCellImpl__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2IILcom_google_gwt_user_cellview_client_Column_2Z_value_0) , row + com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleRange__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_view_client_Range_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter).com_google_gwt_view_client_Range_start , false;
  }
  return false;
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$setKeyboardSelected__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2IZZV(this$static, index, selected, stealFocus){
  var cellParent, cells, i, td, tr, updatedSelection, com_google_gwt_user_cellview_client_AbstractCellTable_$getRowElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ILcom_google_gwt_dom_client_TableRowElement_2_rows_0;
  if (!(index >= 0 && index < com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleItemCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter)) || this$static.com_google_gwt_user_cellview_client_AbstractCellTable_columns.java_util_ArrayList_size == 0) {
    return;
  }
  tr = (com_google_gwt_user_cellview_client_HasDataPresenter_$flush__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter) , com_google_gwt_user_cellview_client_AbstractHasData_$checkRowBounds__Lcom_google_gwt_user_cellview_client_AbstractHasData_2IV(this$static, index) , com_google_gwt_user_cellview_client_AbstractCellTable_$getRowElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ILcom_google_gwt_dom_client_TableRowElement_2_rows_0 = this$static.com_google_gwt_user_cellview_client_DataGrid_tableData.com_google_gwt_user_cellview_client_DataGrid$TableWidget_section.rows , com_google_gwt_user_cellview_client_AbstractCellTable_$getRowElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ILcom_google_gwt_dom_client_TableRowElement_2_rows_0.length > index?com_google_gwt_user_cellview_client_AbstractCellTable_$getRowElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2ILcom_google_gwt_dom_client_TableRowElement_2_rows_0[index]:null);
  updatedSelection = !selected || this$static.com_google_gwt_user_cellview_client_AbstractHasData_isFocused || stealFocus;
  com_google_gwt_user_cellview_client_AbstractCellTable_$setRowStyleName__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_TableRowElement_2Ljava_lang_String_2Ljava_lang_String_2ZV(tr, $intern_101, $intern_102, selected);
  cells = tr.cells;
  for (i = 0; i < cells.length; ++i) {
    td = cells[i];
    com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(td, $intern_100, updatedSelection && selected && i == this$static.com_google_gwt_user_cellview_client_AbstractCellTable_keyboardSelectedColumn);
    cellParent = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
    com_google_gwt_user_cellview_client_AbstractHasData_$setFocusable__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Lcom_google_gwt_dom_client_Element_2ZV(this$static, cellParent, selected && i == this$static.com_google_gwt_user_cellview_client_AbstractCellTable_keyboardSelectedColumn);
  }
  if (selected && stealFocus && !this$static.com_google_gwt_user_cellview_client_AbstractCellTable_cellIsEditing) {
    td = tr.cells[this$static.com_google_gwt_user_cellview_client_AbstractCellTable_keyboardSelectedColumn];
    cellParent = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
    !com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl && (com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl = new com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_CellBasedWidgetImplStandardBase__V);
    com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_$resetFocus__Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(new com_google_gwt_user_cellview_client_AbstractCellTable$2_AbstractCellTable$2__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2V(cellParent));
  }
}

function com_google_gwt_user_cellview_client_AbstractCellTable_$setRowStyleName__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_TableRowElement_2Ljava_lang_String_2Ljava_lang_String_2ZV(tr, rowStyle, cellStyle, add){
  var cells, i;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(tr, rowStyle, add);
  cells = tr.cells;
  for (i = 0; i < cells.length; ++i) {
    com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(cells[i], cellStyle, add);
  }
}

var com_google_gwt_user_cellview_client_AbstractCellTable_TABLE_1IMPL = null;
function com_google_gwt_user_cellview_client_AbstractCellTable$2_AbstractCellTable$2__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2V(val$cellParent){
  this.com_google_gwt_user_cellview_client_AbstractCellTable$2_val$cellParent = val$cellParent;
}

function com_google_gwt_user_cellview_client_AbstractCellTable$2(){
}

_ = com_google_gwt_user_cellview_client_AbstractCellTable$2_AbstractCellTable$2__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2V.prototype = com_google_gwt_user_cellview_client_AbstractCellTable$2.prototype = new java_lang_Object;
_.execute__V = function com_google_gwt_user_cellview_client_AbstractCellTable$2_execute__V(){
  this.com_google_gwt_user_cellview_client_AbstractCellTable$2_val$cellParent.focus();
}
;
_.com_google_gwt_user_cellview_client_AbstractCellTable$2_val$cellParent = null;
function com_google_gwt_user_cellview_client_AbstractCellTable$Impl_$convertToSectionElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_dom_client_TableSectionElement_2(this$static, table, sectionTag, rowHtml){
  var tableElem, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tbody__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$thead__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tfoot__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0;
  com_google_gwt_user_client_impl_DOMImpl_$setEventListener__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_cellview_client_AbstractCellTable$Impl_tmpElem, table);
  sectionTag = sectionTag.toLowerCase();
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_112, sectionTag)) {
    com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_cellview_client_AbstractCellTable$Impl_tmpElem, (com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tbody__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0 = new java_lang_StringBuilder_StringBuilder__V , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tbody__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<table><tbody>' , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tbody__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, rowHtml.com_google_gwt_safehtml_shared_SafeHtmlString_html) , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tbody__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<\/tbody><\/table>' , new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tbody__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string)).com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_201, sectionTag)) {
    com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_cellview_client_AbstractCellTable$Impl_tmpElem, (com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$thead__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0 = new java_lang_StringBuilder_StringBuilder__V , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$thead__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<table><thead>' , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$thead__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, rowHtml.com_google_gwt_safehtml_shared_SafeHtmlString_html) , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$thead__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<\/thead><\/table>' , new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$thead__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string)).com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_202, sectionTag)) {
    com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_cellview_client_AbstractCellTable$Impl_tmpElem, (com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tfoot__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0 = new java_lang_StringBuilder_StringBuilder__V , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tfoot__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<table><tfoot>' , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tfoot__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0, rowHtml.com_google_gwt_safehtml_shared_SafeHtmlString_html) , com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tfoot__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<\/tfoot><\/table>' , new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tfoot__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2_sb_0.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string)).com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  }
   else {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_203 + sectionTag);
  }
  tableElem = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_cellview_client_AbstractCellTable$Impl_tmpElem);
  this$static.com_google_gwt_user_cellview_client_AbstractCellTable$Impl_tmpElem.__listener = null;
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_112, sectionTag)) {
    return tableElem.tBodies[0];
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_201, sectionTag)) {
    return tableElem.tHead;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_202, sectionTag)) {
    return tableElem.tFoot;
  }
   else {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_203 + sectionTag);
  }
}

function com_google_gwt_user_cellview_client_AbstractCellTable$Impl_$replaceAllRows__Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_TableSectionElement_2Lcom_google_gwt_safehtml_shared_SafeHtml_2V(table, section, html){
  var nextSection, parent;
  com_google_gwt_user_client_ui_Composite_$isAttached__Lcom_google_gwt_user_client_ui_Composite_2Z(table) || com_google_gwt_user_client_impl_DOMImpl_$setEventListener__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(table.com_google_gwt_user_client_ui_UIObject_element, table);
  parent = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(section);
  nextSection = com_google_gwt_dom_client_DOMImpl_$getNextSiblingElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(section);
  com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(section);
  com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(section, html.com_google_gwt_safehtml_shared_SafeHtmlString_html);
  parent.insertBefore(section, nextSection);
  com_google_gwt_user_client_ui_Composite_$isAttached__Lcom_google_gwt_user_client_ui_Composite_2Z(table) || (table.com_google_gwt_user_client_ui_UIObject_element.__listener = null , undefined);
}

function com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$div__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<div style="outline:none;">';
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, arg0.com_google_gwt_safehtml_shared_SafeHtmlString_html);
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_204;
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
}

function com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$divFocusable__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2ILcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0, arg1){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<div style="outline:none;" tabindex="';
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2($intern_7 + arg0));
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_200;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, arg1.com_google_gwt_safehtml_shared_SafeHtmlString_html);
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_204;
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
}

function com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$th__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2ILjava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0, arg1, arg2){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<th colspan="';
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2($intern_7 + arg0));
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '" class="';
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg1));
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_200;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, arg2.com_google_gwt_safehtml_shared_SafeHtmlString_html);
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<\/th>';
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
}

function com_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_$tr__Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0, arg1){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += '<tr onclick="" class="';
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg0));
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_200;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, arg1.com_google_gwt_safehtml_shared_SafeHtmlString_html);
  sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_199;
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
}

function com_google_gwt_user_cellview_client_AbstractHasData$View_$render__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Ljava_util_List_2ILcom_google_gwt_view_client_SelectionModel_2V(this$static, sb, values, start){
  com_google_gwt_user_cellview_client_AbstractCellTable_$renderRowValues__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Ljava_util_List_2ILcom_google_gwt_view_client_SelectionModel_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, sb, values, start);
}

function com_google_gwt_user_cellview_client_AbstractHasData$View_$replaceAllChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2Lcom_google_gwt_safehtml_shared_SafeHtml_2ZV(this$static, html, stealFocus){
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused = this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused || stealFocus;
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_wasFocused = this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused;
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isRefreshing = true;
  com_google_gwt_user_cellview_client_AbstractCellTable_$replaceAllChildren__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Ljava_util_List_2Lcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, html);
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isRefreshing = false;
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, new com_google_gwt_user_cellview_client_AbstractHasData$View$2_AbstractHasData$View$2__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2V(java_util_Collections_unmodifiableList__Ljava_util_List_2Ljava_util_List_2(com_google_gwt_user_cellview_client_HasDataPresenter_$getCurrentState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_presenter).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData)));
}

function com_google_gwt_user_cellview_client_AbstractHasData$View_$replaceChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2ILcom_google_gwt_safehtml_shared_SafeHtml_2ZV(this$static, start, html, stealFocus){
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused = this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused || stealFocus;
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_wasFocused = this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused;
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isRefreshing = true;
  com_google_gwt_user_cellview_client_AbstractHasData_$replaceChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData_2Ljava_util_List_2ILcom_google_gwt_safehtml_shared_SafeHtml_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, start, html);
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isRefreshing = false;
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, new com_google_gwt_user_cellview_client_AbstractHasData$View$2_AbstractHasData$View$2__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2V(java_util_Collections_unmodifiableList__Ljava_util_List_2Ljava_util_List_2(com_google_gwt_user_cellview_client_HasDataPresenter_$getCurrentState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_presenter).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData)));
}

function com_google_gwt_user_cellview_client_AbstractHasData$View_$resetFocus__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2V(this$static){
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_wasFocused && (!com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl && (com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl = new com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_CellBasedWidgetImplStandardBase__V) , com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_$resetFocus__Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(new com_google_gwt_user_cellview_client_AbstractHasData$View$1_AbstractHasData$View$1__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2V(this$static)));
}

function com_google_gwt_user_cellview_client_AbstractHasData$View_$setKeyboardSelected__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2IZZV(this$static, index, seleted, stealFocus){
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused = this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isFocused || stealFocus;
  com_google_gwt_user_cellview_client_AbstractCellTable_$setKeyboardSelected__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2IZZV(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, index, seleted, stealFocus);
}

function com_google_gwt_user_cellview_client_AbstractHasData$View_$setLoadingState__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(this$static, state){
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isRefreshing = true;
  com_google_gwt_user_cellview_client_DataGrid_$onLoadingStateChanged__Lcom_google_gwt_user_cellview_client_DataGrid_2Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData, state);
  this$static.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData.com_google_gwt_user_cellview_client_AbstractHasData_isRefreshing = false;
}

function com_google_gwt_user_cellview_client_AbstractHasData$View$1_AbstractHasData$View$1__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2V(this$1){
  this.com_google_gwt_user_cellview_client_AbstractHasData$View$1_this$1 = this$1;
}

function com_google_gwt_user_cellview_client_AbstractHasData$View$1(){
}

_ = com_google_gwt_user_cellview_client_AbstractHasData$View$1_AbstractHasData$View$1__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2V.prototype = com_google_gwt_user_cellview_client_AbstractHasData$View$1.prototype = new java_lang_Object;
_.execute__V = function com_google_gwt_user_cellview_client_AbstractHasData$View$1_execute__V(){
  var elem;
  if (!com_google_gwt_user_cellview_client_AbstractCellTable_$resetFocusOnCell__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Z(this.com_google_gwt_user_cellview_client_AbstractHasData$View$1_this$1.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData)) {
    elem = com_google_gwt_user_cellview_client_AbstractCellTable_$getKeyboardSelectedElement__Lcom_google_gwt_user_cellview_client_AbstractCellTable_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_cellview_client_AbstractHasData$View$1_this$1.com_google_gwt_user_cellview_client_AbstractHasData$View_hasData);
    !!elem && (elem.focus() , undefined);
  }
}
;
_.com_google_gwt_user_cellview_client_AbstractHasData$View$1_this$1 = null;
function com_google_gwt_user_cellview_client_AbstractHasData$View$2_AbstractHasData$View$2__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2V($anonymous0){
  this.com_google_gwt_event_logical_shared_ValueChangeEvent_value = $anonymous0;
}

function com_google_gwt_user_cellview_client_AbstractHasData$View$2(){
}

_ = com_google_gwt_user_cellview_client_AbstractHasData$View$2_AbstractHasData$View$2__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2V.prototype = com_google_gwt_user_cellview_client_AbstractHasData$View$2.prototype = new com_google_gwt_event_logical_shared_ValueChangeEvent;
function com_google_gwt_user_cellview_client_CellBasedWidgetImpl(){
}

_ = com_google_gwt_user_cellview_client_CellBasedWidgetImpl.prototype = new java_lang_Object;
_.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes = null;
var com_google_gwt_user_cellview_client_CellBasedWidgetImpl_impl = null;
function com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard(){
}

_ = com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard.prototype = new com_google_gwt_user_cellview_client_CellBasedWidgetImpl;
_.com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_nonBubblingEvents = null;
function com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_$resetFocus__Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(command){
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), command);
}

function com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_CellBasedWidgetImplStandardBase__V(){
  this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes = new java_util_HashSet_HashSet__V;
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes, 'select');
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes, $intern_149);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes, 'textarea');
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes, 'option');
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes, $intern_205);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImpl_focusableTypes, 'label');
  this.com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_nonBubblingEvents = new java_util_HashSet_HashSet__V;
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_nonBubblingEvents, $intern_99);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_nonBubblingEvents, $intern_79);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_nonBubblingEvents, $intern_134);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_nonBubblingEvents, $intern_206);
}

function com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase(){
}

_ = com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_CellBasedWidgetImplStandardBase__V.prototype = com_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase.prototype = new com_google_gwt_user_cellview_client_CellBasedWidgetImplStandard;
function com_google_gwt_user_cellview_client_DataGrid_$onLoadingStateChanged__Lcom_google_gwt_user_cellview_client_DataGrid_2Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(this$static, state){
  var message;
  message = this$static.com_google_gwt_user_cellview_client_DataGrid_tableData;
  state == (com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_$clinit__V() , com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADING)?(message = this$static.com_google_gwt_user_cellview_client_DataGrid_loadingIndicatorContainer):state == com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADED && com_google_gwt_user_cellview_client_HasDataPresenter_$isEmpty__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Z(this$static.com_google_gwt_user_cellview_client_AbstractHasData_presenter) && (message = this$static.com_google_gwt_user_cellview_client_DataGrid_emptyTableWidgetContainer);
  com_google_gwt_user_client_ui_CustomScrollPanel_$setWidget__Lcom_google_gwt_user_client_ui_CustomScrollPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_cellview_client_DataGrid_tableDataScroller, message);
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_google_gwt_user_cellview_client_LoadingStateChangeEvent_LoadingStateChangeEvent__Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V);
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$calculateModifiedRanges__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Ljava_util_TreeSet_2IILjava_util_List_2(modifiedRows, pageStart, pageEnd){
  var diff, index, index$iterator, maxDiff, rangeEnd0, rangeEnd1, rangeLength0, rangeLength1, rangeStart0, rangeStart1, toRet;
  rangeStart0 = -1;
  rangeEnd0 = -1;
  rangeStart1 = -1;
  rangeEnd1 = -1;
  maxDiff = 0;
  for (index$iterator = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2Ljava_util_Set_2(modifiedRows.java_util_TreeSet_map)); index$iterator.java_util_AbstractMap$1$1_val$outerIter.hasNext__Z();) {
    index = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(index$iterator), Q$java_lang_Integer).java_lang_Integer_value;
    if (index < pageStart || index >= pageEnd) {
      continue;
    }
     else if (rangeStart0 == -1) {
      rangeStart0 = index;
      rangeEnd0 = index;
    }
     else if (rangeStart1 == -1) {
      maxDiff = index - rangeEnd0;
      rangeStart1 = index;
      rangeEnd1 = index;
    }
     else {
      diff = index - rangeEnd1;
      if (diff > maxDiff) {
        rangeEnd0 = rangeEnd1;
        rangeStart1 = index;
        rangeEnd1 = index;
        maxDiff = diff;
      }
       else {
        rangeEnd1 = index;
      }
    }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
    rangeEnd0 = rangeEnd1;
    rangeStart1 = -1;
    rangeEnd1 = -1;
  }
  toRet = new java_util_ArrayList_ArrayList__V;
  if (rangeStart0 != -1) {
    rangeLength0 = rangeEnd0 - rangeStart0;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(toRet, new com_google_gwt_view_client_Range_Range__IIV(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
    rangeLength1 = rangeEnd1 - rangeStart1;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(toRet, new com_google_gwt_view_client_Range_Range__IIV(rangeStart1, rangeLength1));
  }
  return toRet;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static){
  !this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState && (this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState = new com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_HasDataPresenter$PendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state));
  this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateCommand = new com_google_gwt_user_cellview_client_HasDataPresenter$2_HasDataPresenter$2__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static);
  com_google_gwt_user_cellview_client_HasDataPresenter_$scheduleFinally__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateCommand);
  return this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$findIndexOfBestMatch__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2Ljava_lang_Object_2II(state, value, initialIndex){
  var bestMatchDiff, bestMatchIndex, curValue, diff, i, rowDataCount;
  if (value == null) {
    return -1;
  }
  bestMatchIndex = -1;
  bestMatchDiff = 2147483647;
  rowDataCount = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size;
  for (i = 0; i < rowDataCount; ++i) {
    curValue = java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, i);
    if (com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value, curValue)) {
      diff = initialIndex - i < 0?-(initialIndex - i):initialIndex - i;
      if (diff < bestMatchDiff) {
        bestMatchIndex = i;
        bestMatchDiff = diff;
      }
    }
  }
  return bestMatchIndex;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$flush__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static){
  while (!!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateCommand && !this$static.com_google_gwt_user_cellview_client_HasDataPresenter_isResolvingState) {
    com_google_gwt_user_cellview_client_HasDataPresenter_$resolvePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static);
  }
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$getCurrentState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2(this$static){
  return !this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$getKeyboardSelectedRow__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static){
  return (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleItem__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2ILjava_lang_Object_2(this$static, indexOnPage){
  return com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_$getRowDataValue__Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2ILjava_lang_Object_2(!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState, indexOnPage);
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleItemCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2I(this$static){
  return (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$getVisibleRange__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_view_client_Range_2(this$static){
  return new com_google_gwt_view_client_Range_Range__IIV((!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart, (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize);
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$isEmpty__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Z(this$static){
  return (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact && (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount == 0;
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$resolvePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static){
  var absStart, bestMatchIndex, i, keyboardRowChanged, length, modifiedRanges, modifiedRows, newContents, newSelectedRow, oldPageSize, oldPageStart, oldRowDataCount, oldSelectedRow, oldState, pageEnd, pageSize, pageStart, pending, range, range$iterator, range0, range1, redrawRequired, relStart, replaceDiff, replaceValues, replacedEmptyRange, replacedRange, replacedRange$iterator, rowDataCount, sb, start, wasSelected, com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_cacheSize_0, com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_curPageSize_0;
  this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateCommand = null;
  if (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState) {
    this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateLoop = 0;
    return;
  }
  ++this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateLoop;
  if (this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateLoop > 10) {
    this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateLoop = 0;
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('A possible infinite loop has been detected in a Cell Widget. This usually happens when your SelectionModel triggers a SelectionChangeEvent when SelectionModel.isSelection() is called, which causes the table to redraw continuously.');
  }
  if (this$static.com_google_gwt_user_cellview_client_HasDataPresenter_isResolvingState) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('The Cell Widget is attempting to render itself within the render loop. This usually happens when your render code modifies the state of the Cell Widget then accesses data or elements within the Widget.');
  }
  this$static.com_google_gwt_user_cellview_client_HasDataPresenter_isResolvingState = true;
  modifiedRows = new java_util_TreeSet_TreeSet__V;
  oldState = this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state;
  pending = this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState;
  pageStart = pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart;
  pageSize = pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize;
  pageEnd = pageStart + pageSize;
  rowDataCount = pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size;
  pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow = java_lang_Math_max__III(0, java_lang_Math_min__III(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow, rowDataCount - 1));
  if (pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardSelectedRowChanged) {
    pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue = rowDataCount > 0?com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_$getRowDataValue__Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2ILjava_lang_Object_2(pending, pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow):null;
  }
   else if (pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue != null) {
    bestMatchIndex = com_google_gwt_user_cellview_client_HasDataPresenter_$findIndexOfBestMatch__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2Ljava_lang_Object_2II(pending, pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue, pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow);
    if (bestMatchIndex >= 0) {
      pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow = bestMatchIndex;
      pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue = rowDataCount > 0?com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_$getRowDataValue__Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2ILjava_lang_Object_2(pending, pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow):null;
    }
     else {
      pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow = 0;
      pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue = null;
    }
  }
  keyboardRowChanged = pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardSelectedRowChanged || oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow != pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow || oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue == null && pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue != null;
  for (i = pageStart; i < pageStart + rowDataCount; ++i) {
    java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, i - pageStart);
    wasSelected = java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_selectedRows, java_lang_Integer_valueOf__ILjava_lang_Integer_2(i));
    wasSelected && java_util_TreeSet_$add__Ljava_util_TreeSet_2Ljava_lang_Object_2Z(modifiedRows, java_lang_Integer_valueOf__ILjava_lang_Integer_2(i));
  }
  if (this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateCommand) {
    this$static.com_google_gwt_user_cellview_client_HasDataPresenter_isResolvingState = false;
    return;
  }
  this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateLoop = 0;
  this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state = this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState;
  this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState = null;
  replacedEmptyRange = false;
  for (replacedRange$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_replacedRanges); replacedRange$iterator.java_util_AbstractList$IteratorImpl_i < replacedRange$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    replacedRange = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(replacedRange$iterator), Q$com_google_gwt_view_client_Range);
    start = replacedRange.com_google_gwt_view_client_Range_start;
    length = replacedRange.com_google_gwt_view_client_Range_length;
    length == 0 && (replacedEmptyRange = true);
    for (i = start; i < start + length; ++i) {
      java_util_TreeSet_$add__Ljava_util_TreeSet_2Ljava_lang_Object_2Z(modifiedRows, java_lang_Integer_valueOf__ILjava_lang_Integer_2(i));
    }
  }
  if (modifiedRows.java_util_TreeSet_map.java_util_TreeMap_size > 0 && keyboardRowChanged) {
    java_util_TreeSet_$add__Ljava_util_TreeSet_2Ljava_lang_Object_2Z(modifiedRows, java_lang_Integer_valueOf__ILjava_lang_Integer_2(oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow));
    java_util_TreeSet_$add__Ljava_util_TreeSet_2Ljava_lang_Object_2Z(modifiedRows, java_lang_Integer_valueOf__ILjava_lang_Integer_2(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow));
  }
  modifiedRanges = com_google_gwt_user_cellview_client_HasDataPresenter_$calculateModifiedRanges__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Ljava_util_TreeSet_2IILjava_util_List_2(modifiedRows, pageStart, pageEnd);
  range0 = modifiedRanges.java_util_ArrayList_size > 0?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2((java_util_AbstractList_checkIndex__IIV(0, modifiedRanges.java_util_ArrayList_size) , modifiedRanges.java_util_ArrayList_array[0]), Q$com_google_gwt_view_client_Range):null;
  range1 = modifiedRanges.java_util_ArrayList_size > 1?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2((java_util_AbstractList_checkIndex__IIV(1, modifiedRanges.java_util_ArrayList_size) , modifiedRanges.java_util_ArrayList_array[1]), Q$com_google_gwt_view_client_Range):null;
  replaceDiff = 0;
  for (range$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(modifiedRanges); range$iterator.java_util_AbstractList$IteratorImpl_i < range$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    range = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(range$iterator), Q$com_google_gwt_view_client_Range);
    replaceDiff += range.com_google_gwt_view_client_Range_length;
  }
  oldPageStart = oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart;
  oldPageSize = oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize;
  oldRowDataCount = oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size;
  redrawRequired = pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_redrawRequired;
  pageStart != oldPageStart?(redrawRequired = true):rowDataCount < oldRowDataCount?(redrawRequired = true):!range1 && !!range0 && range0.com_google_gwt_view_client_Range_start == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)?(redrawRequired = true):replaceDiff >= 5 && replaceDiff > 0.3 * oldRowDataCount?(redrawRequired = true):replacedEmptyRange && oldRowDataCount == 0 && (redrawRequired = true);
  com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_cacheSize_0 = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size;
  com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_curPageSize_0 = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact?java_lang_Math_min__III((!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize, (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount - (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart):(!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize;
  com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_cacheSize_0 >= com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_curPageSize_0?com_google_gwt_user_cellview_client_AbstractHasData$View_$setLoadingState__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, (com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_$clinit__V() , com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADED)):com_google_gwt_user_cellview_client_HasDataPresenter_$updateLoadingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V_cacheSize_0 == 0?com_google_gwt_user_cellview_client_AbstractHasData$View_$setLoadingState__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, (com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_$clinit__V() , com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADING)):com_google_gwt_user_cellview_client_AbstractHasData$View_$setLoadingState__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, (com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_$clinit__V() , com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_PARTIALLY_1LOADED));
  try {
    if (redrawRequired) {
      sb = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
      com_google_gwt_user_cellview_client_AbstractHasData$View_$render__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Ljava_util_List_2ILcom_google_gwt_view_client_SelectionModel_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, sb, pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart);
      newContents = new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string);
      if (!com_google_gwt_safehtml_shared_SafeHtmlString_$equals__Lcom_google_gwt_safehtml_shared_SafeHtmlString_2Ljava_lang_Object_2Z(newContents, this$static.com_google_gwt_user_cellview_client_HasDataPresenter_lastContents)) {
        this$static.com_google_gwt_user_cellview_client_HasDataPresenter_lastContents = newContents;
        com_google_gwt_user_cellview_client_AbstractHasData$View_$replaceAllChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2Lcom_google_gwt_safehtml_shared_SafeHtml_2ZV(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, newContents, pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardStealFocus);
      }
      com_google_gwt_user_cellview_client_AbstractHasData$View_$resetFocus__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view);
    }
     else if (range0) {
      this$static.com_google_gwt_user_cellview_client_HasDataPresenter_lastContents = null;
      absStart = range0.com_google_gwt_view_client_Range_start;
      relStart = absStart - pageStart;
      sb = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
      replaceValues = new java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, relStart, relStart + range0.com_google_gwt_view_client_Range_length);
      com_google_gwt_user_cellview_client_AbstractHasData$View_$render__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Ljava_util_List_2ILcom_google_gwt_view_client_SelectionModel_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, sb, replaceValues, absStart);
      com_google_gwt_user_cellview_client_AbstractHasData$View_$replaceChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2ILcom_google_gwt_safehtml_shared_SafeHtml_2ZV(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, relStart, new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string), pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardStealFocus);
      if (range1) {
        absStart = range1.com_google_gwt_view_client_Range_start;
        relStart = absStart - pageStart;
        sb = new com_google_gwt_safehtml_shared_SafeHtmlBuilder_SafeHtmlBuilder__V;
        replaceValues = new java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, relStart, relStart + range1.com_google_gwt_view_client_Range_length);
        com_google_gwt_user_cellview_client_AbstractHasData$View_$render__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2Ljava_util_List_2ILcom_google_gwt_view_client_SelectionModel_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, sb, replaceValues, absStart);
        com_google_gwt_user_cellview_client_AbstractHasData$View_$replaceChildren__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2Ljava_util_List_2ILcom_google_gwt_safehtml_shared_SafeHtml_2ZV(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, relStart, new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(sb.com_google_gwt_safehtml_shared_SafeHtmlBuilder_sb.java_lang_StringBuilder_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string), pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardStealFocus);
      }
      com_google_gwt_user_cellview_client_AbstractHasData$View_$resetFocus__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2V(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view);
    }
     else if (keyboardRowChanged) {
      oldSelectedRow = oldState.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow;
      oldSelectedRow >= 0 && oldSelectedRow < rowDataCount && com_google_gwt_user_cellview_client_AbstractHasData$View_$setKeyboardSelected__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2IZZV(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, oldSelectedRow, false, false);
      newSelectedRow = pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow;
      newSelectedRow >= 0 && newSelectedRow < rowDataCount && com_google_gwt_user_cellview_client_AbstractHasData$View_$setKeyboardSelected__Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2IZZV(this$static.com_google_gwt_user_cellview_client_HasDataPresenter_view, newSelectedRow, true, pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardStealFocus);
    }
  }
   finally {
    this$static.com_google_gwt_user_cellview_client_HasDataPresenter_isResolvingState = false;
  }
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$scheduleFinally__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(command){
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), command);
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$setRowCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2IZV(this$static, count, isExact){
  if (count == (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount && isExact == (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact) {
    return;
  }
  com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount = count;
  com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact = isExact;
  com_google_gwt_user_cellview_client_HasDataPresenter_$updateCachedData__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static);
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$setRowData__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2ILjava_util_List_2V(this$static, values){
  var boundedEnd, boundedStart, cacheOffset, dataIndex, i, pageEnd, pageStart, pending, value, valuesLength;
  valuesLength = values.java_util_ArrayList_size;
  pageStart = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart;
  pageEnd = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart + (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize;
  boundedStart = 0 > pageStart?0:pageStart;
  boundedEnd = valuesLength < pageEnd?valuesLength:pageEnd;
  if (0 != pageStart && boundedStart >= boundedEnd) {
    return;
  }
  pending = com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static);
  cacheOffset = java_lang_Math_max__III(0, boundedStart - pageStart - (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size);
  for (i = 0; i < cacheOffset; ++i) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, null);
  }
  for (i = boundedStart; i < boundedEnd; ++i) {
    value = (java_util_AbstractList_checkIndex__IIV(i, values.java_util_ArrayList_size) , values.java_util_ArrayList_array[i]);
    dataIndex = i - pageStart;
    dataIndex < (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size?java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, dataIndex, value):java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, value);
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_replacedRanges, new com_google_gwt_view_client_Range_Range__IIV(boundedStart - cacheOffset, boundedEnd - (boundedStart - cacheOffset)));
  valuesLength > (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount && com_google_gwt_user_cellview_client_HasDataPresenter_$setRowCount__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2IZV(this$static, valuesLength, (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact);
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$setVisibleRange__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_view_client_Range_2ZZV(this$static, range, clearData){
  var decrease, i, increase, length, pageSize, pageSizeChanged, pageStart, pageStartChanged, pending, start;
  start = range.com_google_gwt_view_client_Range_start;
  length = range.com_google_gwt_view_client_Range_length;
  if (start < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Range start cannot be less than 0');
  }
  if (length < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Range length cannot be less than 0');
  }
  pageStart = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart;
  pageSize = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize;
  pageStartChanged = pageStart != start;
  if (pageStartChanged) {
    pending = com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static);
    if (!clearData) {
      if (start > pageStart) {
        increase = start - pageStart;
        if ((!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size > increase) {
          for (i = 0; i < increase; ++i) {
            java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, 0);
          }
        }
         else {
          java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData);
        }
      }
       else {
        decrease = pageStart - start;
        if ((!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size > 0 && decrease < pageSize) {
          for (i = 0; i < decrease; ++i) {
            java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, 0, null);
          }
          java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(pending.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_replacedRanges, new com_google_gwt_view_client_Range_Range__IIV(start, start + decrease - start));
        }
         else {
          java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData);
        }
      }
    }
    pending.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart = start;
  }
  pageSizeChanged = pageSize != length;
  pageSizeChanged && (com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize = length);
  clearData && java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData);
  com_google_gwt_user_cellview_client_HasDataPresenter_$updateCachedData__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static);
  (pageStartChanged || pageSizeChanged) && com_google_gwt_view_client_RangeChangeEvent_fire__Lcom_google_gwt_view_client_HasRows_2Lcom_google_gwt_view_client_Range_2V(new com_google_gwt_view_client_Range_Range__IIV((!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart, (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize));
}

function com_google_gwt_user_cellview_client_HasDataPresenter_$updateCachedData__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$static){
  var expectedLastIndex, lastIndex, pageStart;
  pageStart = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart;
  expectedLastIndex = java_lang_Math_max__III(0, java_lang_Math_min__III((!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize, (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount - pageStart));
  lastIndex = (!this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState?this$static.com_google_gwt_user_cellview_client_HasDataPresenter_state:this$static.com_google_gwt_user_cellview_client_HasDataPresenter_pendingState).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size - 1;
  while (lastIndex >= expectedLastIndex) {
    java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(com_google_gwt_user_cellview_client_HasDataPresenter_$ensurePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2(this$static).com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, lastIndex);
    --lastIndex;
  }
}

function com_google_gwt_user_cellview_client_HasDataPresenter$2_HasDataPresenter$2__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this$0){
  this.com_google_gwt_user_cellview_client_HasDataPresenter$2_this$0 = this$0;
}

function com_google_gwt_user_cellview_client_HasDataPresenter$2(){
}

_ = com_google_gwt_user_cellview_client_HasDataPresenter$2_HasDataPresenter$2__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V.prototype = com_google_gwt_user_cellview_client_HasDataPresenter$2.prototype = new java_lang_Object;
_.execute__V = function com_google_gwt_user_cellview_client_HasDataPresenter$2_execute__V(){
  this.com_google_gwt_user_cellview_client_HasDataPresenter$2_this$0.com_google_gwt_user_cellview_client_HasDataPresenter_pendingStateCommand == this && com_google_gwt_user_cellview_client_HasDataPresenter_$resolvePendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter_2V(this.com_google_gwt_user_cellview_client_HasDataPresenter$2_this$0);
}
;
_.com_google_gwt_user_cellview_client_HasDataPresenter$2_this$0 = null;
function com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_$getRowDataValue__Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2ILjava_lang_Object_2(this$static, index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, index);
}

function com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_HasDataPresenter$DefaultState__IV(pageSize){
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_selectedRows = new java_util_HashSet_HashSet__V;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize = pageSize;
}

function com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState(){
}

_ = com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_HasDataPresenter$DefaultState__IV.prototype = com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState.prototype = new java_lang_Object;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow = 0;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue = null;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize = 0;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart = 0;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount = 0;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact = false;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_selectedValue = null;
_.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_viewTouched = false;
function com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_HasDataPresenter$PendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2V(state){
  var i, rowDataSize;
  com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_HasDataPresenter$DefaultState__IV.call(this, state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize);
  this.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_replacedRanges = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRow;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_keyboardSelectedRowValue;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageSize;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_pageStart;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCount;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowCountIsExact;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_selectedValue = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_selectedValue;
  this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_viewTouched = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_viewTouched;
  rowDataSize = state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData.java_util_ArrayList_size;
  for (i = 0; i < rowDataSize; ++i) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(state.com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_rowData, i));
  }
}

function com_google_gwt_user_cellview_client_HasDataPresenter$PendingState(){
}

_ = com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_HasDataPresenter$PendingState__Lcom_google_gwt_user_cellview_client_HasDataPresenter$State_2V.prototype = com_google_gwt_user_cellview_client_HasDataPresenter$PendingState.prototype = new com_google_gwt_user_cellview_client_HasDataPresenter$DefaultState;
_.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardSelectedRowChanged = false;
_.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_keyboardStealFocus = false;
_.com_google_gwt_user_cellview_client_HasDataPresenter$PendingState_redrawRequired = false;
function com_google_gwt_user_cellview_client_LoadingStateChangeEvent_$clinit__V(){
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent_$clinit__V = nullMethod;
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_cellview_client_LoadingStateChangeEvent_LoadingStateChangeEvent__Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V(){
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent_$clinit__V();
}

function com_google_gwt_user_cellview_client_LoadingStateChangeEvent(){
}

_ = com_google_gwt_user_cellview_client_LoadingStateChangeEvent_LoadingStateChangeEvent__Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_2V.prototype = com_google_gwt_user_cellview_client_LoadingStateChangeEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_cellview_client_LoadingStateChangeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_cellview_client_LoadingStateChangeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_cellview_client_LoadingStateChangeEvent_TYPE;
}
;
var com_google_gwt_user_cellview_client_LoadingStateChangeEvent_TYPE;
function com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_LoadingStateChangeEvent$DefaultLoadingState__V(){
}

function com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState(){
}

_ = com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_LoadingStateChangeEvent$DefaultLoadingState__V.prototype = com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState.prototype = new java_lang_Object;
function com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_$clinit__V(){
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_$clinit__V = nullMethod;
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADING = new com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_LoadingStateChangeEvent$DefaultLoadingState__V;
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_PARTIALLY_1LOADED = new com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_LoadingStateChangeEvent$DefaultLoadingState__V;
  com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADED = new com_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_LoadingStateChangeEvent$DefaultLoadingState__V;
}

var com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADED, com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_LOADING, com_google_gwt_user_cellview_client_LoadingStateChangeEvent$LoadingState_PARTIALLY_1LOADED;
function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt){
  var ret;
  ret = com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(com_google_gwt_user_client_Event_handlers, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.preventDefault();
  }
  return ret;
}

function com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, attr, value){
  elem.style[attr] = value;
}

function com_google_gwt_user_client_DOM_sinkBitlessEvent__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2V(elem, eventTypeName);
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2IV(elem, eventBits);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem = null;
function com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  !com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && (com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
  if (!com_google_gwt_user_client_Event_handlers) {
    com_google_gwt_user_client_Event_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(null, true);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton = new com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V;
  }
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_Event_handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, handler);
}

var com_google_gwt_user_client_Event_handlers = null;
function com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent_dead = false;
  this$static.com_google_web_bindery_event_shared_Event_source = null;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = true;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V(){
}

function com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && !!handlers && com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE)) {
    lastIsCanceled = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled;
    lastIsConsumed = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed;
    lastIsFirstHandler = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler;
    lastNativeEvent = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
    com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton, nativeEvent);
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    ret = !(com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && !com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = lastIsCanceled;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = lastIsConsumed;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = lastIsFirstHandler;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

function com_google_gwt_user_client_Event$NativePreviewEvent(){
}

_ = com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V.prototype = com_google_gwt_user_client_Event$NativePreviewEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Event$NativePreviewEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_google_gwt_user_client_Event$NativePreviewHandler).onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this);
  com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Event$NativePreviewEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Event$NativePreviewEvent_TYPE;
}
;
_.revive__V = function com_google_gwt_user_client_Event$NativePreviewEvent_revive__V(){
  com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this);
}
;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
var com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = null, com_google_gwt_user_client_Event$NativePreviewEvent_singleton = null;
function com_google_gwt_user_client_Timer$1_Timer$1__V(){
}

function com_google_gwt_user_client_Timer$1(){
}

_ = com_google_gwt_user_client_Timer$1_Timer$1__V.prototype = com_google_gwt_user_client_Timer$1.prototype = new java_lang_Object;
_.onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2V = function com_google_gwt_user_client_Timer$1_onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2V(event){
  while ((com_google_gwt_user_client_Timer_$clinit__V() , com_google_gwt_user_client_Timer_timers).java_util_ArrayList_size > 0) {
    com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(com_google_gwt_user_client_Timer_timers, 0), Q$com_google_gwt_user_client_Timer));
  }
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_CloseHandler, Q$com_google_gwt_event_shared_EventHandler]);
function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type, handler);
}

function com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_event_logical_shared_ResizeEvent_TYPE && (com_google_gwt_event_logical_shared_ResizeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ResizeEvent_TYPE), handler);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V();
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V(){
  if (!com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowResizeHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V();
    com_google_gwt_user_client_Window_resizeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event);
    return event.com_google_gwt_user_client_Window$ClosingEvent_message;
  }
  return null;
}

function com_google_gwt_user_client_Window_onResize__V(){
  var height, width;
  if (com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    width = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
    height = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
    if (com_google_gwt_user_client_Window_lastResizeWidth != width || com_google_gwt_user_client_Window_lastResizeHeight != height) {
      com_google_gwt_user_client_Window_lastResizeWidth = width;
      com_google_gwt_user_client_Window_lastResizeHeight = height;
      com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
  }
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers = null, com_google_gwt_user_client_Window_lastResizeHeight = 0, com_google_gwt_user_client_Window_lastResizeWidth = 0, com_google_gwt_user_client_Window_resizeHandlersInitialized = false;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = nullMethod;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_$setMessage__Lcom_google_gwt_user_client_Window$ClosingEvent_2Ljava_lang_String_2V(this$static, message){
  this$static.com_google_gwt_user_client_Window$ClosingEvent_message = message;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

function com_google_gwt_user_client_Window$ClosingEvent(){
}

_ = com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V.prototype = com_google_gwt_user_client_Window$ClosingEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_user_client_Window$ClosingEvent_$setMessage__Lcom_google_gwt_user_client_Window$ClosingEvent_2Ljava_lang_String_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_google_gwt_user_client_Window$ClosingHandler), Q$pur_gwtplatform_samples_modules_PlaceManager).com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_onLeaveQuestion);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
_.com_google_gwt_user_client_Window$ClosingEvent_message = null;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

function com_google_gwt_user_client_Window$WindowHandlers(){
}

_ = com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V.prototype = com_google_gwt_user_client_Window$WindowHandlers.prototype = new com_google_gwt_event_shared_HandlerManager;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_shared_HasHandlers]);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case $intern_79:
      return 4096;
    case $intern_80:
      return 1024;
    case $intern_103:
      return 1;
    case $intern_207:
      return 2;
    case $intern_99:
      return 2048;
    case $intern_64:
      return 128;
    case $intern_81:
      return 256;
    case $intern_82:
      return 512;
    case $intern_134:
      return 32768;
    case 'losecapture':
      return 8192;
    case $intern_108:
      return 4;
    case $intern_208:
      return 64;
    case $intern_107:
      return 32;
    case $intern_104:
      return 16;
    case $intern_209:
      return 8;
    case $intern_75:
      return 16384;
    case $intern_206:
      return 65536;
    case 'DOMMouseScroll':
    case $intern_210:
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case $intern_86:
      return 1048576;
    case $intern_85:
      return 2097152;
    case $intern_84:
      return 4194304;
    case $intern_83:
      return 8388608;
    case $intern_211:
      return 16777216;
    case $intern_212:
      return 33554432;
    case $intern_213:
      return 67108864;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$setEventListener__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

function com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2Z(object){
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(object) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(object, Q$com_google_gwt_user_client_EventListener);
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent = $entry(function(evt){
    if (!com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    curElem && curElem.nodeType != 1 && (curElem = null);
    listener && com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2Z(listener) && com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, curElem, listener);
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent = $entry(function(evt){
    evt.preventDefault();
    com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent.call(this, evt);
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(function(evt){
    this.__gwtLastUnhandledEvent = evt.type;
    com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent.call(this, evt);
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent = $entry(function(evt){
    var dispatchCapturedEventFn = com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent;
    if (dispatchCapturedEventFn(evt)) {
      var cap = com_google_gwt_user_client_impl_DOMImplStandard_captureElem;
      if (cap && cap.__listener) {
        if (com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2Z(cap.__listener)) {
          com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  $wnd.addEventListener($intern_103, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_207, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_108, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_209, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_208, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_104, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_107, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_210, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_64, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_82, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_81, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_86, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_85, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_84, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_83, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_211, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_212, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_213, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  switch (eventTypeName) {
    case 'drag':
      elem.ondrag = com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent;
      break;
    case 'dragend':
      elem.ondragend = com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent;
      break;
    case 'dragenter':
      elem.ondragenter = com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent;
      break;
    case 'dragleave':
      elem.ondragleave = com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent;
      break;
    case 'dragover':
      elem.ondragover = com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent;
      break;
    case 'dragstart':
      elem.ondragstart = com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent;
      break;
    case 'drop':
      elem.ondrop = com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent;
      break;
    case 'canplaythrough':
    case 'ended':
    case 'progress':
      elem.removeEventListener(eventTypeName, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, false);
      elem.addEventListener(eventTypeName, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, false);
      break;
    default:throw 'Trying to sink unknown event type ' + eventTypeName;
  }
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2 && (elem.ondblclick = bits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16777216 && (elem.ongesturestart = bits & 16777216?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 33554432 && (elem.ongesturechange = bits & 33554432?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 67108864 && (elem.ongestureend = bits & 67108864?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
}

var com_google_gwt_user_client_impl_DOMImplStandard_captureElem = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = null;
function com_google_gwt_user_client_impl_HistoryImpl_$newItem__Lcom_google_gwt_user_client_impl_HistoryImpl_2Ljava_lang_String_2ZV(this$static, historyToken){
  historyToken = historyToken == null?$intern_7:historyToken;
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(historyToken, com_google_gwt_user_client_impl_HistoryImpl_token == null?$intern_7:com_google_gwt_user_client_impl_HistoryImpl_token)) {
    com_google_gwt_user_client_impl_HistoryImpl_token = historyToken;
    $wnd.location = $wnd.location.href.split($intern_21)[0] + $intern_21 + this$static.encodeFragment__Ljava_lang_String_2Ljava_lang_String_2(historyToken);
  }
}

_ = com_google_gwt_user_client_impl_HistoryImpl.prototype;
_.encodeFragment__Ljava_lang_String_2Ljava_lang_String_2 = function com_google_gwt_user_client_impl_HistoryImpl_encodeFragment__Ljava_lang_String_2Ljava_lang_String_2(fragment){
  return encodeURI(fragment).replace($intern_21, $intern_20);
}
;
function com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), false);
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function com_google_gwt_user_client_impl_WindowImpl_$initWindowResizeHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      com_google_gwt_user_client_Window_onResize__V();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException(){
}

_ = com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__V.prototype = com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_rpc_IsSerializable, Q$java_io_Serializable, Q$java_lang_RuntimeException, Q$java_lang_Throwable]);
function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, null.nullMethod());
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2(streamReader){
  return new com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__V;
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V(streamWriter, instance){
  null.nullMethod(instance.java_lang_Throwable_detailMessage);
}

function com_google_gwt_user_client_rpc_RpcTokenException_RpcTokenException__V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'Invalid RPC token');
}

function com_google_gwt_user_client_rpc_RpcTokenException(){
}

_ = com_google_gwt_user_client_rpc_RpcTokenException_RpcTokenException__V.prototype = com_google_gwt_user_client_rpc_RpcTokenException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_rpc_IsSerializable, Q$java_io_Serializable, Q$java_lang_RuntimeException, Q$java_lang_Throwable]);
function com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, null.nullMethod());
}

function com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2(streamReader){
  return new com_google_gwt_user_client_rpc_RpcTokenException_RpcTokenException__V;
}

function com_google_gwt_user_client_rpc_XsrfToken_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_XsrfToken_2V(streamWriter, instance){
  null.nullMethod(instance.nullField);
}

function com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ljava_lang_Object_2V(instance){
  var itemIndex;
  for (itemIndex = 0; itemIndex < instance.length; ++itemIndex) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(instance, itemIndex, null.nullMethod());
  }
}

function com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Ljava_lang_Object_2V(instance){
  var itemCount, itemIndex;
  itemCount = instance.length;
  null.nullMethod();
  for (itemIndex = 0; itemIndex < itemCount; ++itemIndex) {
    null.nullMethod();
  }
}

function com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2(streamReader){
  return null.nullMethod();
}

function com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_lang_String_2V(streamWriter, instance){
  null.nullMethod();
}

function com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, value){
  instance.java_lang_Throwable_detailMessage = value;
}

function com_google_gwt_user_client_rpc_core_java_util_ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_ArrayList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_ArrayList_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_ArrayList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2(streamReader){
  return new java_util_ArrayList_ArrayList__V;
}

function com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2(streamReader){
  var array;
  array = null.nullMethod();
  return new java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(array);
}

function com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_List_2V(streamWriter, instance){
  instance.java_util_Arrays$ArrayList_array;
  null.nullMethod();
}

function com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(instance){
  var i, obj, size;
  size = null.nullMethod();
  for (i = 0; i < size; ++i) {
    obj = null.nullMethod();
    instance.add__Ljava_lang_Object_2Z(obj);
  }
}

function com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Collection_2V(instance){
  var obj$iterator;
  instance.size__I();
  null.nullMethod();
  for (obj$iterator = instance.iterator__Ljava_util_Iterator_2(); obj$iterator.hasNext__Z();) {
    obj$iterator.next__Ljava_lang_Object_2();
    null.nullMethod();
  }
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2(streamReader){
  return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_List_2V(streamWriter, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2(streamReader){
  return java_util_Collections_$clinit__V() , new java_util_Collections$SingletonList_Collections$SingletonList__Ljava_lang_Object_2V(null.nullMethod());
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_List_2V(streamWriter, instance){
  null.nullMethod(instance.get__ILjava_lang_Object_2(0));
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_LinkedList_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2(streamReader){
  return new java_util_LinkedList_LinkedList__V;
}

function com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2(streamReader){
  return new java_util_Stack_Stack__V;
}

function com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Stack_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_Vector_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_Vector_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Vector_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Collection_2V(instance);
}

function com_google_gwt_user_client_rpc_core_java_util_Vector_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2(streamReader){
  return new java_util_Vector_Vector__V;
}

function com_google_gwt_user_client_rpc_impl_SerializerBase(){
}

_ = com_google_gwt_user_client_rpc_impl_SerializerBase.prototype = new java_lang_Object;
function com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(this$static){
  var it;
  it = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children);
  while (it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1) {
    com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(it);
    com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(it);
  }
}

function com_google_gwt_user_client_ui_Panel(){
}

_ = com_google_gwt_user_client_ui_Panel.prototype = new com_google_gwt_user_client_ui_Widget;
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_ui_PotentialElement_$resolve__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = w.com_google_gwt_user_client_ui_UIObject_element;
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(this);
}

function com_google_gwt_user_client_ui_ComplexPanel(){
}

_ = com_google_gwt_user_client_ui_ComplexPanel.prototype = new com_google_gwt_user_client_ui_Panel;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2V(w.com_google_gwt_user_client_ui_UIObject_element);
  return removed;
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2V(elem){
  elem.style[$intern_25] = $intern_7;
  elem.style[$intern_27] = $intern_7;
  elem.style[$intern_23] = $intern_7;
}

function com_google_gwt_user_client_ui_AbsolutePanel(){
}

_ = com_google_gwt_user_client_ui_AbsolutePanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), Q$com_google_gwt_user_client_ui_Widget);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, Q$java_lang_Throwable)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(caught, e);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught);
  }
}

function com_google_gwt_user_client_ui_AttachDetachException(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V.prototype = com_google_gwt_user_client_ui_AttachDetachException.prototype = new com_google_gwt_event_shared_UmbrellaException;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_web_bindery_event_shared_UmbrellaException, Q$java_io_Serializable, Q$java_lang_RuntimeException, Q$java_lang_Throwable]);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

function com_google_gwt_user_client_ui_AttachDetachException$1(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V.prototype = com_google_gwt_user_client_ui_AttachDetachException$1.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

function com_google_gwt_user_client_ui_AttachDetachException$2(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V.prototype = com_google_gwt_user_client_ui_AttachDetachException$2.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onDetach__V();
}
;
function com_google_gwt_user_client_ui_FocusWidget(){
}

_ = com_google_gwt_user_client_ui_FocusWidget.prototype = new com_google_gwt_user_client_ui_Widget;
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = com_google_gwt_dom_client_DOMImplStandardBase_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(this.com_google_gwt_user_client_ui_UIObject_element);
  -1 == tabIndex && (this.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0 , undefined);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V(elem){
  this.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_ButtonBase(){
}

_ = com_google_gwt_user_client_ui_ButtonBase.prototype = new com_google_gwt_user_client_ui_FocusWidget;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_Button_Button__V(){
  var com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0;
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0 = $doc.createElement('BUTTON') , com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0.setAttribute('type', $intern_205) , com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0));
  this.com_google_gwt_user_client_ui_UIObject_element[$intern_55] = 'gwt-Button';
}

function com_google_gwt_user_client_ui_Button(){
}

_ = com_google_gwt_user_client_ui_Button_Button__V.prototype = com_google_gwt_user_client_ui_Button.prototype = new com_google_gwt_user_client_ui_ButtonBase;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_CellPanel_CellPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_CellPanel_table = $doc.createElement($intern_118);
  this.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement($intern_112);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_table, com_google_gwt_user_client_ui_PotentialElement_$resolve__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_CellPanel_body));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, this.com_google_gwt_user_client_ui_CellPanel_table);
}

function com_google_gwt_user_client_ui_CellPanel(){
}

_ = com_google_gwt_user_client_ui_CellPanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
_.com_google_gwt_user_client_ui_CellPanel_body = null;
_.com_google_gwt_user_client_ui_CellPanel_table = null;
function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  if (w == this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    return;
  }
  !!w && com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  !!this$static.com_google_gwt_user_client_ui_SimplePanel_widget && this$static.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_SimplePanel_widget);
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = w;
  if (w) {
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.getContainerElement__Lcom_google_gwt_user_client_Element_2(), com_google_gwt_user_client_ui_PotentialElement_$resolve__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_SimplePanel_widget.com_google_gwt_user_client_ui_UIObject_element));
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
  }
}

function com_google_gwt_user_client_ui_CustomScrollPanel_$maybeUpdateScrollbarPositions__Lcom_google_gwt_user_client_ui_CustomScrollPanel_2V(this$static){
  var hPos, vPos;
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbar) {
    hPos = com_google_gwt_dom_client_DOMImplStandardBase_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem);
    com_google_gwt_dom_client_DOMImplStandardBase_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbar.com_google_gwt_user_client_ui_NativeHorizontalScrollbar_scrollable) != hPos && com_google_gwt_user_client_ui_NativeHorizontalScrollbar_$setHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_2IV(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbar, hPos);
  }
  if (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbar) {
    vPos = this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem.scrollTop || 0;
    (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbar.com_google_gwt_user_client_ui_NativeVerticalScrollbar_scrollable.scrollTop || 0) != vPos && com_google_gwt_user_client_ui_NativeVerticalScrollbar_$setVerticalScrollPosition__Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_2IV(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbar, vPos);
  }
  com_google_gwt_dom_client_DOMImplStandardBase_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(this$static.com_google_gwt_user_client_ui_UIObject_element) != 0 && com_google_gwt_dom_client_DOMImplStandardBase_$setScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, 0);
  (this$static.com_google_gwt_user_client_ui_UIObject_element.scrollTop || 0) != 0 && (this$static.com_google_gwt_user_client_ui_UIObject_element.scrollTop = 0 , undefined);
}

function com_google_gwt_user_client_ui_CustomScrollPanel_$maybeUpdateScrollbars__Lcom_google_gwt_user_client_ui_CustomScrollPanel_2V(this$static){
  var contentHeight, contentWidth, isRtl, realScrollbarHeight, realScrollbarWidth, w;
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    return;
  }
  w = this$static.com_google_gwt_user_client_ui_SimplePanel_widget;
  contentHeight = !w?0:w.getOffsetHeight__I();
  contentWidth = !w?0:w.getOffsetWidth__I();
  realScrollbarHeight = 0;
  realScrollbarWidth = 0;
  !!this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbar && (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_alwaysShowScrollbars || this$static.com_google_gwt_user_client_ui_UIObject_element.clientWidth < contentWidth) && (realScrollbarHeight = this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarHeight);
  !!this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbar && (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_alwaysShowScrollbars || this$static.com_google_gwt_user_client_ui_UIObject_element.clientHeight < contentHeight) && (realScrollbarWidth = this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarWidth);
  if (w) {
    if (realScrollbarHeight > 0) {
      w.com_google_gwt_user_client_ui_UIObject_element.style[$intern_214] = realScrollbarHeight + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_26);
      contentHeight += realScrollbarHeight;
    }
     else {
      w.com_google_gwt_user_client_ui_UIObject_element.style[$intern_214] = $intern_7;
    }
  }
  isRtl = (!com_google_gwt_user_client_ui_ScrollImpl_impl && (com_google_gwt_user_client_ui_ScrollImpl_impl = new com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V) , com_google_gwt_user_client_ui_ScrollImpl_$isRtl__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2Z(this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem));
  if (realScrollbarHeight > 0) {
    this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarLayer.com_google_gwt_layout_client_Layout$Layer_visible = true;
    isRtl?com_google_gwt_layout_client_Layout$Layer_$setLeftRight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarLayer, realScrollbarWidth, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX), 0, com_google_gwt_dom_client_Style$Unit_PX):com_google_gwt_layout_client_Layout$Layer_$setLeftRight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarLayer, 0, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX), realScrollbarWidth, com_google_gwt_dom_client_Style$Unit_PX);
    com_google_gwt_layout_client_Layout$Layer_$setBottomHeight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarLayer, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX), realScrollbarHeight, com_google_gwt_dom_client_Style$Unit_PX);
    com_google_gwt_user_client_ui_NativeHorizontalScrollbar_$setScrollWidth__Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_2IV(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbar, 0 > contentWidth - realScrollbarWidth?0:contentWidth - realScrollbarWidth);
  }
   else 
    !!this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarLayer && (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarLayer.com_google_gwt_layout_client_Layout$Layer_visible = false , undefined);
  if (realScrollbarWidth > 0) {
    this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarLayer.com_google_gwt_layout_client_Layout$Layer_visible = true;
    com_google_gwt_layout_client_Layout$Layer_$setTopBottom__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarLayer, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX), realScrollbarHeight, com_google_gwt_dom_client_Style$Unit_PX);
    isRtl?com_google_gwt_layout_client_Layout$Layer_$setLeftWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarLayer, 0, com_google_gwt_dom_client_Style$Unit_PX, realScrollbarWidth, com_google_gwt_dom_client_Style$Unit_PX):com_google_gwt_layout_client_Layout$Layer_$setRightWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarLayer, com_google_gwt_dom_client_Style$Unit_PX, realScrollbarWidth, com_google_gwt_dom_client_Style$Unit_PX);
    com_google_gwt_user_client_ui_NativeVerticalScrollbar_$setScrollHeight__Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_2IV(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbar, 0 > contentHeight - realScrollbarHeight?0:contentHeight - realScrollbarHeight);
  }
   else 
    !!this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarLayer && (this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarLayer.com_google_gwt_layout_client_Layout$Layer_visible = false , undefined);
  com_google_gwt_layout_client_Layout$Layer_$setBottomHeight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_cornerLayer, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX), realScrollbarHeight, com_google_gwt_dom_client_Style$Unit_PX);
  isRtl?com_google_gwt_layout_client_Layout$Layer_$setLeftWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_cornerLayer, 0, com_google_gwt_dom_client_Style$Unit_PX, realScrollbarWidth, com_google_gwt_dom_client_Style$Unit_PX):com_google_gwt_layout_client_Layout$Layer_$setRightWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_cornerLayer, com_google_gwt_dom_client_Style$Unit_PX, realScrollbarWidth, com_google_gwt_dom_client_Style$Unit_PX);
  com_google_gwt_layout_client_Layout$Layer_$setVisible__Lcom_google_gwt_layout_client_Layout$Layer_2ZV(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_cornerLayer, this$static.com_google_gwt_user_client_ui_CustomScrollPanel_hScrollbarHeight > 0 && this$static.com_google_gwt_user_client_ui_CustomScrollPanel_vScrollbarWidth > 0);
  com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_user_client_ui_CustomScrollPanel_layout, 0, null);
  com_google_gwt_user_client_ui_CustomScrollPanel_$maybeUpdateScrollbarPositions__Lcom_google_gwt_user_client_ui_CustomScrollPanel_2V(this$static);
}

function com_google_gwt_user_client_ui_CustomScrollPanel_$setWidget__Lcom_google_gwt_user_client_ui_CustomScrollPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w);
  com_google_gwt_user_client_ui_CustomScrollPanel_$maybeUpdateScrollbars__Lcom_google_gwt_user_client_ui_CustomScrollPanel_2V(this$static);
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static, content){
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, content);
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

function com_google_gwt_user_client_ui_DirectionalTextHelper(){
}

_ = com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV.prototype = com_google_gwt_user_client_ui_DirectionalTextHelper.prototype = new java_lang_Object;
_.com_google_gwt_user_client_ui_DirectionalTextHelper_element = null;
_.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = null;
_.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = null;
function com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, widget, toReplace){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, widget);
  com_google_gwt_dom_client_Node_$replaceChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(toReplace.parentNode, widget.com_google_gwt_user_client_ui_UIObject_element, toReplace);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

function com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V(html){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, $doc.createElement($intern_22));
  com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_UIObject_element, html);
}

function com_google_gwt_user_client_ui_HTMLPanel(){
}

_ = com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_HTMLPanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_HasAutoHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasAutoHorizontalAlignment_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_HasAutoHorizontalAlignment_ALIGN_1CONTENT_1START = new com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_HasHorizontalAlignment$AutoHorizontalAlignmentConstant__V;
}

var com_google_gwt_user_client_ui_HasAutoHorizontalAlignment_ALIGN_1CONTENT_1START;
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1CENTER = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_116);
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('justify');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_25);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_29);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1END = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1CENTER, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1END, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT;
function com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_HasHorizontalAlignment$AutoHorizontalAlignmentConstant__V(){
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_HasHorizontalAlignment$AutoHorizontalAlignmentConstant__V.prototype = com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant.prototype = new java_lang_Object;
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_endOf__Lcom_google_gwt_i18n_client_HasDirection$Direction_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2(direction){
  return direction == (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR)?(com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT):direction == com_google_gwt_i18n_client_HasDirection$Direction_RTL?(com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT):(com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1END);
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_startOf__Lcom_google_gwt_i18n_client_HasDirection$Direction_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2(direction){
  return direction == (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR)?(com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT):direction == com_google_gwt_i18n_client_HasDirection$Direction_RTL?(com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT):(com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START);
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
_.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = null;
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = nullMethod;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V($intern_30);
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('middle');
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V($intern_27);
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant.prototype = new java_lang_Object;
_.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = null;
function com_google_gwt_user_client_ui_HeaderPanel_$add__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, toReplace, container){
  if (w == toReplace) {
    return;
  }
  !!w && com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  !!toReplace && com_google_gwt_user_client_ui_HeaderPanel_$remove__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, toReplace);
  if (w) {
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, w.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
  }
}

function com_google_gwt_user_client_ui_HeaderPanel_$remove__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(w.com_google_gwt_user_client_ui_UIObject_element);
    if (w == this$static.com_google_gwt_user_client_ui_HeaderPanel_content) {
      this$static.com_google_gwt_user_client_ui_HeaderPanel_content = null;
      this$static.com_google_gwt_user_client_ui_HeaderPanel_contentContainer.style[$intern_114] = (com_google_gwt_dom_client_Style$Display_$clinit__V() , $intern_132);
    }
     else if (w == this$static.com_google_gwt_user_client_ui_HeaderPanel_header) {
      this$static.com_google_gwt_user_client_ui_HeaderPanel_header = null;
      this$static.com_google_gwt_user_client_ui_HeaderPanel_headerContainer.style[$intern_114] = (com_google_gwt_dom_client_Style$Display_$clinit__V() , $intern_132);
    }
     else if (w == this$static.com_google_gwt_user_client_ui_HeaderPanel_footer) {
      this$static.com_google_gwt_user_client_ui_HeaderPanel_footer = null;
      this$static.com_google_gwt_user_client_ui_HeaderPanel_footerContainer.style[$intern_114] = (com_google_gwt_dom_client_Style$Display_$clinit__V() , $intern_132);
    }
  }
  return true;
}

function com_google_gwt_user_client_ui_HeaderPanel_$scheduledLayout__Lcom_google_gwt_user_client_ui_HeaderPanel_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_Widget_attached && !this$static.com_google_gwt_user_client_ui_HeaderPanel_layoutScheduled) {
    this$static.com_google_gwt_user_client_ui_HeaderPanel_layoutScheduled = true;
    com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), this$static.com_google_gwt_user_client_ui_HeaderPanel_layoutCmd);
  }
}

function com_google_gwt_user_client_ui_HeaderPanel_$setFooterWidget__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  this$static.com_google_gwt_user_client_ui_HeaderPanel_footerContainer.style[$intern_114] = $intern_7;
  com_google_gwt_user_client_ui_HeaderPanel_$add__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_HeaderPanel_footer, this$static.com_google_gwt_user_client_ui_HeaderPanel_footerContainer);
  this$static.com_google_gwt_user_client_ui_HeaderPanel_footer = w;
  com_google_gwt_user_client_ui_HeaderPanel_$scheduledLayout__Lcom_google_gwt_user_client_ui_HeaderPanel_2V(this$static);
}

function com_google_gwt_user_client_ui_HeaderPanel_$setHeaderWidget__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  this$static.com_google_gwt_user_client_ui_HeaderPanel_headerContainer.style[$intern_114] = $intern_7;
  com_google_gwt_user_client_ui_HeaderPanel_$add__Lcom_google_gwt_user_client_ui_HeaderPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_HeaderPanel_header, this$static.com_google_gwt_user_client_ui_HeaderPanel_headerContainer);
  this$static.com_google_gwt_user_client_ui_HeaderPanel_header = w;
  com_google_gwt_user_client_ui_HeaderPanel_$scheduledLayout__Lcom_google_gwt_user_client_ui_HeaderPanel_2V(this$static);
}

function com_google_gwt_user_client_ui_HorizontalPanel(){
}

_ = com_google_gwt_user_client_ui_HorizontalPanel.prototype = new com_google_gwt_user_client_ui_CellPanel;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
_.com_google_gwt_user_client_ui_HorizontalPanel_tableRow = null;
function com_google_gwt_user_client_ui_LabelBase_$updateHorizontalAlignment__Lcom_google_gwt_user_client_ui_LabelBase_2V(this$static){
  var align;
  !this$static.com_google_gwt_user_client_ui_LabelBase_autoHorizontalAlignment?(align = null):this$static.com_google_gwt_user_client_ui_LabelBase_autoHorizontalAlignment?(align = this$static.com_google_gwt_user_client_ui_LabelBase_autoHorizontalAlignment):(align = this$static.com_google_gwt_user_client_ui_LabelBase_autoHorizontalAlignment == (com_google_gwt_user_client_ui_HasAutoHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasAutoHorizontalAlignment_ALIGN_1CONTENT_1START)?com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_startOf__Lcom_google_gwt_i18n_client_HasDirection$Direction_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2(this$static.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir):com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_endOf__Lcom_google_gwt_i18n_client_HasDirection$Direction_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2(this$static.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir));
  if (align != this$static.com_google_gwt_user_client_ui_LabelBase_horzAlign) {
    this$static.com_google_gwt_user_client_ui_LabelBase_horzAlign = align;
    this$static.com_google_gwt_user_client_ui_UIObject_element.style['textAlign'] = !this$static.com_google_gwt_user_client_ui_LabelBase_horzAlign?$intern_7:this$static.com_google_gwt_user_client_ui_LabelBase_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
  }
}

function com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_UIObject_element = element;
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_LabelBase(){
}

_ = com_google_gwt_user_client_ui_LabelBase.prototype = new com_google_gwt_user_client_ui_Widget;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
_.com_google_gwt_user_client_ui_LabelBase_autoHorizontalAlignment = null;
_.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = null;
_.com_google_gwt_user_client_ui_LabelBase_horzAlign = null;
function com_google_gwt_user_client_ui_Label_Label__V(){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, $doc.createElement($intern_22));
  this.com_google_gwt_user_client_ui_UIObject_element[$intern_55] = 'gwt-Label';
}

function com_google_gwt_user_client_ui_Label(){
}

_ = com_google_gwt_user_client_ui_Label_Label__V.prototype = com_google_gwt_user_client_ui_Label.prototype = new com_google_gwt_user_client_ui_LabelBase;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_LayoutCommand_$schedule__Lcom_google_gwt_user_client_ui_LayoutCommand_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static){
  this$static.com_google_gwt_user_client_ui_LayoutCommand_duration = 0;
  this$static.com_google_gwt_user_client_ui_LayoutCommand_canceled = false;
  if (!this$static.com_google_gwt_user_client_ui_LayoutCommand_scheduled) {
    this$static.com_google_gwt_user_client_ui_LayoutCommand_scheduled = true;
    com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), this$static);
  }
}

function com_google_gwt_user_client_ui_LayoutCommand_LayoutCommand__Lcom_google_gwt_layout_client_Layout_2V(layout){
  this.com_google_gwt_user_client_ui_LayoutCommand_layout = layout;
}

function com_google_gwt_user_client_ui_LayoutCommand(){
}

_ = com_google_gwt_user_client_ui_LayoutCommand_LayoutCommand__Lcom_google_gwt_layout_client_Layout_2V.prototype = com_google_gwt_user_client_ui_LayoutCommand.prototype = new java_lang_Object;
_.execute__V = function com_google_gwt_user_client_ui_LayoutCommand_execute__V(){
  this.com_google_gwt_user_client_ui_LayoutCommand_scheduled = false;
  if (this.com_google_gwt_user_client_ui_LayoutCommand_canceled) {
    return;
  }
  com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this.com_google_gwt_user_client_ui_LayoutCommand_layout, this.com_google_gwt_user_client_ui_LayoutCommand_duration, new com_google_gwt_user_client_ui_LayoutCommand$1_LayoutCommand$1__Lcom_google_gwt_user_client_ui_LayoutCommand_2V);
}
;
_.com_google_gwt_user_client_ui_LayoutCommand_canceled = false;
_.com_google_gwt_user_client_ui_LayoutCommand_duration = 0;
_.com_google_gwt_user_client_ui_LayoutCommand_layout = null;
_.com_google_gwt_user_client_ui_LayoutCommand_scheduled = false;
function com_google_gwt_user_client_ui_LayoutCommand$1_LayoutCommand$1__Lcom_google_gwt_user_client_ui_LayoutCommand_2V(){
}

function com_google_gwt_user_client_ui_LayoutCommand$1(){
}

_ = com_google_gwt_user_client_ui_LayoutCommand$1_LayoutCommand$1__Lcom_google_gwt_user_client_ui_LayoutCommand_2V.prototype = com_google_gwt_user_client_ui_LayoutCommand$1.prototype = new java_lang_Object;
function com_google_gwt_user_client_ui_LayoutPanel_$add__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, widget){
  com_google_gwt_user_client_ui_LayoutPanel_$insert__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, widget, this$static.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_LayoutPanel_$insert__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, widget, beforeIndex){
  var layer;
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, widget, beforeIndex);
  layer = com_google_gwt_layout_client_Layout_$attachChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2Lcom_google_gwt_layout_client_Layout$Layer_2(this$static.com_google_gwt_user_client_ui_LayoutPanel_layout, widget.com_google_gwt_user_client_ui_UIObject_element, widget);
  widget.com_google_gwt_user_client_ui_Widget_layoutData = layer;
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
  com_google_gwt_user_client_ui_LayoutCommand_$schedule__Lcom_google_gwt_user_client_ui_LayoutCommand_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd);
}

function com_google_gwt_user_client_ui_LayoutPanel_$onResize__Lcom_google_gwt_user_client_ui_LayoutPanel_2V(this$static){
  var child, child$iterator;
  for (child$iterator = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children); child$iterator.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < child$iterator.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1;) {
    child = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(child$iterator);
    com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(child, Q$com_google_gwt_user_client_ui_RequiresResize) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(child, Q$com_google_gwt_user_client_ui_RequiresResize).onResize__V();
  }
}

function com_google_gwt_user_client_ui_LayoutPanel_$setWidgetLeftWidth__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, child, left, leftUnit, width, widthUnit){
  com_google_gwt_layout_client_Layout$Layer_$setLeftWidth__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(child.com_google_gwt_user_client_ui_Widget_layoutData, left, leftUnit, width, widthUnit);
  com_google_gwt_user_client_ui_LayoutCommand_$schedule__Lcom_google_gwt_user_client_ui_LayoutCommand_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd);
}

function com_google_gwt_user_client_ui_LayoutPanel_$setWidgetTopHeight__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(this$static, child, top, topUnit, height, heightUnit){
  com_google_gwt_layout_client_Layout$Layer_$setTopHeight__Lcom_google_gwt_layout_client_Layout$Layer_2DLcom_google_gwt_dom_client_Style$Unit_2DLcom_google_gwt_dom_client_Style$Unit_2V(child.com_google_gwt_user_client_ui_Widget_layoutData, top, topUnit, height, heightUnit);
  com_google_gwt_user_client_ui_LayoutCommand_$schedule__Lcom_google_gwt_user_client_ui_LayoutCommand_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd);
}

function com_google_gwt_user_client_ui_LayoutPanel_LayoutPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, $doc.createElement($intern_22));
  this.com_google_gwt_user_client_ui_LayoutPanel_layout = new com_google_gwt_layout_client_Layout_Layout__Lcom_google_gwt_dom_client_Element_2V(this.com_google_gwt_user_client_ui_UIObject_element);
  this.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd = new com_google_gwt_user_client_ui_LayoutCommand_LayoutCommand__Lcom_google_gwt_layout_client_Layout_2V(this.com_google_gwt_user_client_ui_LayoutPanel_layout);
}

function com_google_gwt_user_client_ui_LayoutPanel(){
}

_ = com_google_gwt_user_client_ui_LayoutPanel_LayoutPanel__V.prototype = com_google_gwt_user_client_ui_LayoutPanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.onLoad__V = function com_google_gwt_user_client_ui_LayoutPanel_onLoad__V(){
}
;
_.onResize__V = function com_google_gwt_user_client_ui_LayoutPanel_onResize__V(){
  com_google_gwt_user_client_ui_LayoutPanel_$onResize__Lcom_google_gwt_user_client_ui_LayoutPanel_2V(this);
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_LayoutPanel_onUnload__V(){
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_LayoutPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_layout_client_Layout_$removeChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_layout_client_Layout$Layer_2V(this.com_google_gwt_user_client_ui_LayoutPanel_layout, w.com_google_gwt_user_client_ui_Widget_layoutData);
  return removed;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_RequiresResize, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
_.com_google_gwt_user_client_ui_LayoutPanel_layout = null;
_.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd = null;
function com_google_gwt_user_client_ui_NativeHorizontalScrollbar_$setHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_2IV(this$static, position){
  com_google_gwt_dom_client_DOMImplStandardBase_$setScrollLeft__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_NativeHorizontalScrollbar_scrollable, position);
}

function com_google_gwt_user_client_ui_NativeHorizontalScrollbar_$setScrollWidth__Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_2IV(this$static, width){
  this$static.com_google_gwt_user_client_ui_NativeHorizontalScrollbar_contentDiv.style[$intern_54] = width + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_26);
}

function com_google_gwt_user_client_ui_NativeVerticalScrollbar_$setScrollHeight__Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_2IV(this$static, height){
  this$static.com_google_gwt_user_client_ui_NativeVerticalScrollbar_contentDiv.style[$intern_62] = height + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_26);
}

function com_google_gwt_user_client_ui_NativeVerticalScrollbar_$setVerticalScrollPosition__Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_2IV(this$static, position){
  com_google_gwt_dom_client_Element_$setScrollTop__Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_NativeVerticalScrollbar_scrollable, position);
}

function com_google_gwt_user_client_ui_PotentialElement_$resolve__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_dom_client_Element_2(this$static){
  return this$static.__gwt_resolve?this$static.__gwt_resolve():this$static;
}

_ = java_util_AbstractCollection.prototype;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  var iter;
  iter = java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2Ljava_util_Iterator_2(this.iterator__Ljava_util_Iterator_2(), o);
  if (iter) {
    iter.remove__V();
    return true;
  }
   else {
    return false;
  }
}
;
function com_google_gwt_user_client_ui_RootLayoutPanel_RootLayoutPanel__V(){
  com_google_gwt_user_client_ui_LayoutPanel_LayoutPanel__V.call(this);
  com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootLayoutPanel$1_RootLayoutPanel$1__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2V(this));
}

function com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2(){
  if (!com_google_gwt_user_client_ui_RootLayoutPanel_singleton) {
    com_google_gwt_user_client_ui_RootLayoutPanel_singleton = new com_google_gwt_user_client_ui_RootLayoutPanel_RootLayoutPanel__V;
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), com_google_gwt_user_client_ui_RootLayoutPanel_singleton);
  }
  return com_google_gwt_user_client_ui_RootLayoutPanel_singleton;
}

function com_google_gwt_user_client_ui_RootLayoutPanel(){
}

_ = com_google_gwt_user_client_ui_RootLayoutPanel_RootLayoutPanel__V.prototype = com_google_gwt_user_client_ui_RootLayoutPanel.prototype = new com_google_gwt_user_client_ui_LayoutPanel;
_.onLoad__V = function com_google_gwt_user_client_ui_RootLayoutPanel_onLoad__V(){
  com_google_gwt_layout_client_LayoutImpl_$fillParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(this.com_google_gwt_user_client_ui_LayoutPanel_layout.com_google_gwt_layout_client_Layout_parentElem);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_RequiresResize, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
var com_google_gwt_user_client_ui_RootLayoutPanel_singleton = null;
function com_google_gwt_user_client_ui_RootLayoutPanel$1_RootLayoutPanel$1__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2V(this$0){
  this.com_google_gwt_user_client_ui_RootLayoutPanel$1_this$0 = this$0;
}

function com_google_gwt_user_client_ui_RootLayoutPanel$1(){
}

_ = com_google_gwt_user_client_ui_RootLayoutPanel$1_RootLayoutPanel$1__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2V.prototype = com_google_gwt_user_client_ui_RootLayoutPanel$1.prototype = new java_lang_Object;
_.onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V = function com_google_gwt_user_client_ui_RootLayoutPanel$1_onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(event){
  com_google_gwt_user_client_ui_LayoutPanel_$onResize__Lcom_google_gwt_user_client_ui_LayoutPanel_2V(this.com_google_gwt_user_client_ui_RootLayoutPanel$1_this$0);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_ResizeHandler, Q$com_google_gwt_event_shared_EventHandler]);
_.com_google_gwt_user_client_ui_RootLayoutPanel$1_this$0 = null;
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_UIObject_element = elem;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    widget.onDetach__V();
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null), Q$com_google_gwt_user_client_ui_RootPanel);
  if (rp) {
    return rp;
  }
  com_google_gwt_user_client_ui_RootPanel_rootPanels.java_util_AbstractHashMap_size == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V;
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

function com_google_gwt_user_client_ui_RootPanel_getBodyElement__Lcom_google_gwt_user_client_Element_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  return $doc.body;
}

function com_google_gwt_user_client_ui_RootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel.prototype = new com_google_gwt_user_client_ui_AbsolutePanel;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_RootPanel, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

function com_google_gwt_user_client_ui_RootPanel$1(){
}

_ = com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V.prototype = com_google_gwt_user_client_ui_RootPanel$1.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.isAttached__Z() && w.onDetach__V();
}
;
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

function com_google_gwt_user_client_ui_RootPanel$2(){
}

_ = com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V.prototype = com_google_gwt_user_client_ui_RootPanel$2.prototype = new java_lang_Object;
_.onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2V = function com_google_gwt_user_client_ui_RootPanel$2_onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2V(closeEvent){
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_CloseHandler, Q$com_google_gwt_event_shared_EventHandler]);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_user_client_ui_RootPanel_getBodyElement__Lcom_google_gwt_user_client_Element_2());
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V.prototype = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel.prototype = new com_google_gwt_user_client_ui_RootPanel;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_RootPanel, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_ScrollImpl_$isRtl__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2Z(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue($intern_69) == $intern_70;
}

function com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V(){
}

function com_google_gwt_user_client_ui_ScrollImpl(){
}

_ = com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V.prototype = com_google_gwt_user_client_ui_ScrollImpl.prototype = new java_lang_Object;
var com_google_gwt_user_client_ui_ScrollImpl_impl = null;
function com_google_gwt_user_client_ui_ValueBoxBase_$setText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2V(this$static, text){
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_51] = text != null?text:$intern_7;
}

function com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V(elem){
  this.com_google_gwt_user_client_ui_UIObject_element = elem;
  new com_google_gwt_i18n_client_AutoDirectionHandler_AutoDirectionHandler__Lcom_google_gwt_i18n_client_AutoDirectionHandler$Target_2Lcom_google_gwt_i18n_shared_DirectionEstimator_2V;
}

function com_google_gwt_user_client_ui_ValueBoxBase(){
}

_ = com_google_gwt_user_client_ui_ValueBoxBase.prototype = new com_google_gwt_user_client_ui_FocusWidget;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_ValueBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event){
  var type;
  type = com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event.type);
  (type & 896) != 0?com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event):com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_ValueBoxBase_onLoad__V(){
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
_.com_google_gwt_user_client_ui_ValueBoxBase_valueChangeHandlerInitialized = false;
function com_google_gwt_user_client_ui_TextBoxBase_$clinit__V(){
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
}

function com_google_gwt_user_client_ui_TextBoxBase(){
}

_ = com_google_gwt_user_client_ui_TextBoxBase.prototype = new com_google_gwt_user_client_ui_ValueBoxBase;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_TextBox_TextBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V();
  com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = $intern_150 , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
}

function com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(element){
  com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V.call(this, element, (!com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V) , !com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V)));
  this.com_google_gwt_user_client_ui_UIObject_element[$intern_55] = 'gwt-TextBox';
}

function com_google_gwt_user_client_ui_TextBox(){
}

_ = com_google_gwt_user_client_ui_TextBox_TextBox__V.prototype = com_google_gwt_user_client_ui_TextBox.prototype = new com_google_gwt_user_client_ui_TextBoxBase;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment, [com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT]);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment(){
}

_ = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment.prototype = new java_lang_Enum;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
var com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$VALUES, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT;
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1(){
}

_ = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV.prototype = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1.prototype = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2(){
}

_ = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV.prototype = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2.prototype = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3(){
}

_ = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV.prototype = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3.prototype = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4(){
}

_ = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV.prototype = com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4.prototype = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment, Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum]);
function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, tr, com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0;
  tr = $doc.createElement($intern_47);
  td = (com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0 = $doc.createElement($intern_44) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0[$intern_45] = this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString , com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0, $intern_46, this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tr, com_google_gwt_user_client_ui_PotentialElement_$resolve__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_ui_PotentialElement_$resolve__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_dom_client_Element_2(tr));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_48] = $intern_49;
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_50] = $intern_49;
}

function com_google_gwt_user_client_ui_VerticalPanel(){
}

_ = com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V.prototype = com_google_gwt_user_client_ui_VerticalPanel.prototype = new com_google_gwt_user_client_ui_CellPanel;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td));
  return removed;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_logical_shared_HasAttachHandlers, Q$com_google_gwt_event_shared_HasHandlers, Q$com_google_gwt_user_client_EventListener, Q$com_google_gwt_user_client_ui_HasVisibility, Q$com_google_gwt_user_client_ui_HasWidgets, Q$com_google_gwt_user_client_ui_IsWidget, Q$com_google_gwt_user_client_ui_UIObject, Q$com_google_gwt_user_client_ui_Widget]);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_user_client_ui_Widget, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0);
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(newArray, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index){
  var i;
  if (index < 0 || index >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index;
  index = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index == -1) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(parent){
  this.com_google_gwt_user_client_ui_WidgetCollection_parent = parent;
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_google_gwt_user_client_ui_Widget, 4, 0);
}

function com_google_gwt_user_client_ui_WidgetCollection(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V.prototype = com_google_gwt_user_client_ui_WidgetCollection.prototype = new java_lang_Object;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_array = null;
_.com_google_gwt_user_client_ui_WidgetCollection_parent = null;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < 0 || this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index--]);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = this$0;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V.prototype = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator.prototype = new java_lang_Object;
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.remove__V = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V(){
  com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = -1;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = null;
function com_google_gwt_view_client_Range_Range__IIV(start, length){
  this.com_google_gwt_view_client_Range_start = start;
  this.com_google_gwt_view_client_Range_length = length;
}

function com_google_gwt_view_client_Range(){
}

_ = com_google_gwt_view_client_Range_Range__IIV.prototype = com_google_gwt_view_client_Range.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_view_client_Range_equals__Ljava_lang_Object_2Z(o){
  var r;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(o, Q$com_google_gwt_view_client_Range)) {
    return false;
  }
  r = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, Q$com_google_gwt_view_client_Range);
  return this.com_google_gwt_view_client_Range_start == r.com_google_gwt_view_client_Range_start && this.com_google_gwt_view_client_Range_length == r.com_google_gwt_view_client_Range_length;
}
;
_.hashCode__I$ = function com_google_gwt_view_client_Range_hashCode__I(){
  return this.com_google_gwt_view_client_Range_length * 31 ^ this.com_google_gwt_view_client_Range_start;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_view_client_Range, Q$java_io_Serializable]);
_.com_google_gwt_view_client_Range_length = 0;
_.com_google_gwt_view_client_Range_start = 0;
function com_google_gwt_view_client_RangeChangeEvent_fire__Lcom_google_gwt_view_client_HasRows_2Lcom_google_gwt_view_client_Range_2V(){
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static){
  this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_this$0.doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$source, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$0 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source = val$source;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler = val$handler;
}

function com_google_web_bindery_event_shared_SimpleEventBus$3(){
}

_ = com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V.prototype = com_google_web_bindery_event_shared_SimpleEventBus$3.prototype = new java_lang_Object;
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$3_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$0, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_web_bindery_event_shared_SimpleEventBus$Command]);
_.com_google_web_bindery_event_shared_SimpleEventBus$3_this$0 = null;
_.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler = null;
_.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source = null;
_.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type = null;
function com_gwtplatform_dispatch_client_DefaultDispatchAsync_$clinit__V(){
  com_gwtplatform_dispatch_client_DefaultDispatchAsync_$clinit__V = nullMethod;
  com_gwtplatform_dispatch_shared_DispatchService_1Proxy_$clinit__V();
}

function com_gwtplatform_dispatch_client_DefaultDispatchAsync_DefaultDispatchAsync__Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2V(){
  com_gwtplatform_dispatch_client_DefaultDispatchAsync_$clinit__V();
}

function com_gwtplatform_dispatch_client_DefaultDispatchAsync(){
}

_ = com_gwtplatform_dispatch_client_DefaultDispatchAsync_DefaultDispatchAsync__Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2V.prototype = com_gwtplatform_dispatch_client_DefaultDispatchAsync.prototype = new java_lang_Object;
function com_gwtplatform_dispatch_client_DefaultExceptionHandler_DefaultExceptionHandler__V(){
}

function com_gwtplatform_dispatch_client_DefaultExceptionHandler(){
}

_ = com_gwtplatform_dispatch_client_DefaultExceptionHandler_DefaultExceptionHandler__V.prototype = com_gwtplatform_dispatch_client_DefaultExceptionHandler.prototype = new java_lang_Object;
function com_gwtplatform_dispatch_client_DefaultSecurityCookieAccessor_DefaultSecurityCookieAccessor__V(){
}

function com_gwtplatform_dispatch_client_DefaultSecurityCookieAccessor(){
}

_ = com_gwtplatform_dispatch_client_DefaultSecurityCookieAccessor_DefaultSecurityCookieAccessor__V.prototype = com_gwtplatform_dispatch_client_DefaultSecurityCookieAccessor.prototype = new java_lang_Object;
function com_gwtplatform_dispatch_client_gin_DispatchAsyncModule_DispatchAsyncModule__V(){
}

function com_gwtplatform_dispatch_client_gin_DispatchAsyncModule(){
}

_ = com_gwtplatform_dispatch_client_gin_DispatchAsyncModule_DispatchAsyncModule__V.prototype = com_gwtplatform_dispatch_client_gin_DispatchAsyncModule.prototype = new com_google_gwt_inject_client_AbstractGinModule;
_.provideDispatchAsync__Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2Lcom_gwtplatform_dispatch_shared_DispatchAsync_2 = function com_gwtplatform_dispatch_client_gin_DispatchAsyncModule_provideDispatchAsync__Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2Lcom_gwtplatform_dispatch_shared_DispatchAsync_2(exceptionHandler, secureSessionAccessor, registry){
  return new com_gwtplatform_dispatch_client_DefaultDispatchAsync_DefaultDispatchAsync__Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2V;
}
;
function com_gwtplatform_dispatch_shared_ActionException_ActionException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function com_gwtplatform_dispatch_shared_ActionException(){
}

_ = com_gwtplatform_dispatch_shared_ActionException_ActionException__V.prototype = com_gwtplatform_dispatch_shared_ActionException.prototype = new java_lang_Exception;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Throwable]);
function com_gwtplatform_dispatch_shared_ActionException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ActionException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, null.nullMethod());
}

function com_gwtplatform_dispatch_shared_ActionException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ActionException_2(streamReader){
  return new com_gwtplatform_dispatch_shared_ActionException_ActionException__V;
}

function com_gwtplatform_dispatch_shared_ActionImpl_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_gwtplatform_dispatch_shared_ActionImpl_2V(streamWriter, instance){
}

function com_gwtplatform_dispatch_shared_BatchResult_BatchResult__V(){
}

function com_gwtplatform_dispatch_shared_BatchResult(){
}

_ = com_gwtplatform_dispatch_shared_BatchResult_BatchResult__V.prototype = com_gwtplatform_dispatch_shared_BatchResult.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_user_client_rpc_IsSerializable, Q$com_gwtplatform_dispatch_shared_BatchResult, Q$com_gwtplatform_dispatch_shared_Result]);
_.com_gwtplatform_dispatch_shared_BatchResult_results = null;
function com_gwtplatform_dispatch_shared_BatchResult_1Array_1Rank_11_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_BatchResult_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ljava_lang_Object_2V(instance);
}

function com_gwtplatform_dispatch_shared_BatchResult_1Array_1Rank_11_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_BatchResult_2(streamReader){
  var size;
  size = null.nullMethod();
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1gwtplatform_1dispatch_1shared_1BatchResult_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_gwtplatform_dispatch_shared_BatchResult, size, 0);
}

function com_gwtplatform_dispatch_shared_BatchResult_1Array_1Rank_11_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Lcom_gwtplatform_dispatch_shared_BatchResult_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Ljava_lang_Object_2V(instance);
}

function com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_BatchResult_2V(streamReader, instance){
  com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_setResults__Lcom_gwtplatform_dispatch_shared_BatchResult_2Ljava_util_List_2V(instance, null.nullMethod());
}

function com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_BatchResult_2(streamReader){
  return new com_gwtplatform_dispatch_shared_BatchResult_BatchResult__V;
}

function com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_gwtplatform_dispatch_shared_BatchResult_2V(streamWriter, instance){
  null.nullMethod(instance.com_gwtplatform_dispatch_shared_BatchResult_results);
}

function com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_setResults__Lcom_gwtplatform_dispatch_shared_BatchResult_2Ljava_util_List_2V(instance, value){
  instance.com_gwtplatform_dispatch_shared_BatchResult_results = value;
}

function com_gwtplatform_dispatch_shared_DispatchService_1Proxy_$clinit__V(){
  com_gwtplatform_dispatch_shared_DispatchService_1Proxy_$clinit__V = nullMethod;
  new com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_DispatchService_1TypeSerializer__V;
}

function com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_$clinit__V(){
  var com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0, com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_$clinit__V = nullMethod;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0 = {};
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_215] = [com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_216] = [com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2, com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_217] = [undefined, undefined, com_google_gwt_user_client_rpc_XsrfToken_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_XsrfToken_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_218] = [com_gwtplatform_dispatch_shared_ActionException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ActionException_2, com_gwtplatform_dispatch_shared_ActionException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ActionException_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_219] = [undefined, undefined, com_gwtplatform_dispatch_shared_ActionImpl_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_gwtplatform_dispatch_shared_ActionImpl_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_220] = [com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_BatchResult_2, com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_BatchResult_2V, com_gwtplatform_dispatch_shared_BatchResult_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_gwtplatform_dispatch_shared_BatchResult_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_221] = [com_gwtplatform_dispatch_shared_BatchResult_1Array_1Rank_11_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_BatchResult_2, com_gwtplatform_dispatch_shared_BatchResult_1Array_1Rank_11_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_BatchResult_2V, com_gwtplatform_dispatch_shared_BatchResult_1Array_1Rank_11_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Lcom_gwtplatform_dispatch_shared_BatchResult_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_222] = [com_gwtplatform_dispatch_shared_Result_1Array_1Rank_11_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_Result_2, com_gwtplatform_dispatch_shared_Result_1Array_1Rank_11_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_Result_2V, com_gwtplatform_dispatch_shared_Result_1Array_1Rank_11_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Lcom_gwtplatform_dispatch_shared_Result_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_223] = [com_gwtplatform_dispatch_shared_ServiceException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ServiceException_2, com_gwtplatform_dispatch_shared_ServiceException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ServiceException_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_224] = [undefined, undefined, com_gwtplatform_dispatch_shared_UnsecuredActionImpl_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_gwtplatform_dispatch_shared_UnsecuredActionImpl_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_225] = [com_gwtplatform_dispatch_shared_UnsupportedActionException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_UnsupportedActionException_2, com_gwtplatform_dispatch_shared_UnsupportedActionException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_UnsupportedActionException_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_226] = [com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2, com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2V, com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_lang_String_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_227] = [com_google_gwt_user_client_rpc_core_java_util_ArrayList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2, com_google_gwt_user_client_rpc_core_java_util_ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2V, com_google_gwt_user_client_rpc_core_java_util_ArrayList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_ArrayList_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_228] = [com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2, com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V, com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_List_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_229] = [com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2, com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V, com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_List_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_230] = [com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2, com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V, com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_List_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_231] = [com_google_gwt_user_client_rpc_core_java_util_LinkedList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2, com_google_gwt_user_client_rpc_core_java_util_LinkedList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2V, com_google_gwt_user_client_rpc_core_java_util_LinkedList_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_LinkedList_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_232] = [com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2, com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2V, com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Stack_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_233] = [com_google_gwt_user_client_rpc_core_java_util_Vector_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2, com_google_gwt_user_client_rpc_core_java_util_Vector_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2V, com_google_gwt_user_client_rpc_core_java_util_Vector_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_util_Vector_2V];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0 = [];
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1IncompatibleRemoteServiceException_12_1classLit)] = $intern_215;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1RpcTokenException_12_1classLit)] = $intern_216;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1XsrfToken_12_1classLit)] = $intern_217;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1ActionException_12_1classLit)] = $intern_218;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1ActionImpl_12_1classLit)] = $intern_219;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1BatchResult_12_1classLit)] = $intern_220;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1gwtplatform_1dispatch_1shared_1BatchResult_12_1classLit)] = $intern_221;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1gwtplatform_1dispatch_1shared_1Result_12_1classLit)] = $intern_222;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1ServiceException_12_1classLit)] = $intern_223;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1UnsecuredActionImpl_12_1classLit)] = $intern_224;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1UnsupportedActionException_12_1classLit)] = $intern_225;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit)] = $intern_226;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit)] = $intern_227;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Arrays$ArrayList_12_1classLit)] = $intern_228;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit)] = $intern_229;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$SingletonList_12_1classLit)] = $intern_230;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList_12_1classLit)] = $intern_231;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Stack_12_1classLit)] = $intern_232;
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit)] = $intern_233;
}

function com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_DispatchService_1TypeSerializer__V(){
  com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_$clinit__V();
  new java_util_HashMap_HashMap__V;
}

function com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer(){
}

_ = com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer_DispatchService_1TypeSerializer__V.prototype = com_gwtplatform_dispatch_shared_DispatchService_1TypeSerializer.prototype = new com_google_gwt_user_client_rpc_impl_SerializerBase;
function com_gwtplatform_dispatch_shared_Result_1Array_1Rank_11_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_Result_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ljava_lang_Object_2V(instance);
}

function com_gwtplatform_dispatch_shared_Result_1Array_1Rank_11_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Lcom_gwtplatform_dispatch_shared_Result_2(streamReader){
  var size;
  size = null.nullMethod();
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1gwtplatform_1dispatch_1shared_1Result_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$com_gwtplatform_dispatch_shared_Result, size, 0);
}

function com_gwtplatform_dispatch_shared_Result_1Array_1Rank_11_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Lcom_gwtplatform_dispatch_shared_Result_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_3Ljava_lang_Object_2V(instance);
}

function com_gwtplatform_dispatch_shared_ServiceException_ServiceException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function com_gwtplatform_dispatch_shared_ServiceException(){
}

_ = com_gwtplatform_dispatch_shared_ServiceException_ServiceException__V.prototype = com_gwtplatform_dispatch_shared_ServiceException.prototype = new java_lang_Exception;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Throwable]);
function com_gwtplatform_dispatch_shared_ServiceException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ServiceException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, null.nullMethod());
}

function com_gwtplatform_dispatch_shared_ServiceException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_ServiceException_2(streamReader){
  return new com_gwtplatform_dispatch_shared_ServiceException_ServiceException__V;
}

function com_gwtplatform_dispatch_shared_UnsecuredActionImpl_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_gwtplatform_dispatch_shared_UnsecuredActionImpl_2V(streamWriter, instance){
}

function com_gwtplatform_dispatch_shared_UnsupportedActionException_UnsupportedActionException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function com_gwtplatform_dispatch_shared_UnsupportedActionException(){
}

_ = com_gwtplatform_dispatch_shared_UnsupportedActionException_UnsupportedActionException__V.prototype = com_gwtplatform_dispatch_shared_UnsupportedActionException.prototype = new com_gwtplatform_dispatch_shared_ServiceException;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Throwable]);
function com_gwtplatform_dispatch_shared_UnsupportedActionException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_UnsupportedActionException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, null.nullMethod());
}

function com_gwtplatform_dispatch_shared_UnsupportedActionException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_gwtplatform_dispatch_shared_UnsupportedActionException_2(streamReader){
  return new com_gwtplatform_dispatch_shared_UnsupportedActionException_UnsupportedActionException__V;
}

function com_gwtplatform_mvp_client_PresenterWidget_$clearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Ljava_lang_Object_2V(this$static, slot){
  var activeChild, activeChild$iterator, slotChildren;
  slotChildren = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren, slot), Q$java_util_List);
  if (slotChildren) {
    if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
      for (activeChild$iterator = slotChildren.iterator__Ljava_util_Iterator_2(); activeChild$iterator.hasNext__Z();) {
        activeChild = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(activeChild$iterator.next__Ljava_lang_Object_2(), Q$com_gwtplatform_mvp_client_PresenterWidget);
        com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(activeChild);
      }
    }
    slotChildren.clear__V();
  }
  this$static.com_gwtplatform_mvp_client_PresenterWidget_view.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_Widget_2V(slot, null);
}

function com_gwtplatform_mvp_client_PresenterWidget_$detach__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, childPresenter){
  var slotChildren, slotChildren$iterator;
  for (slotChildren$iterator = java_util_AbstractMap$2_$iterator__Ljava_util_AbstractMap$2_2Ljava_util_Iterator_2(java_util_AbstractMap_$values__Ljava_util_AbstractMap_2Ljava_util_Collection_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren)); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(slotChildren$iterator.java_util_AbstractMap$2$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    slotChildren = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractMap$2$1_$next__Ljava_util_AbstractMap$2$1_2Ljava_lang_Object_2(slotChildren$iterator), Q$java_util_List);
    slotChildren.remove__Ljava_lang_Object_2Z(childPresenter);
  }
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_PresenterWidget_popupChildren, childPresenter);
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  for (slotChildren$iterator = java_util_AbstractMap$2_$iterator__Ljava_util_AbstractMap$2_2Ljava_util_Iterator_2(java_util_AbstractMap_$values__Ljava_util_AbstractMap_2Ljava_util_Collection_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren)); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(slotChildren$iterator.java_util_AbstractMap$2$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    slotChildren = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractMap$2$1_$next__Ljava_util_AbstractMap$2$1_2Ljava_lang_Object_2(slotChildren$iterator), Q$java_util_List);
    for (activeChild$iterator = slotChildren.iterator__Ljava_util_Iterator_2(); activeChild$iterator.hasNext__Z();) {
      activeChild = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(activeChild$iterator.next__Ljava_lang_Object_2(), Q$com_gwtplatform_mvp_client_PresenterWidget);
      com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(activeChild);
    }
  }
  for (popupPresenter$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_popupChildren); popupPresenter$iterator.java_util_AbstractList$IteratorImpl_i < popupPresenter$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    popupPresenter = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(popupPresenter$iterator), Q$com_gwtplatform_mvp_client_PresenterWidget);
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(popupPresenter.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
    com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(popupPresenter);
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(popupPresenter.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
  }
  this$static.com_gwtplatform_mvp_client_PresenterWidget_visible = false;
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  for (slotChildren$iterator = java_util_AbstractMap$2_$iterator__Ljava_util_AbstractMap$2_2Ljava_util_Iterator_2(java_util_AbstractMap_$values__Ljava_util_AbstractMap_2Ljava_util_Collection_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren)); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(slotChildren$iterator.java_util_AbstractMap$2$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    slotChildren = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractMap$2$1_$next__Ljava_util_AbstractMap$2$1_2Ljava_lang_Object_2(slotChildren$iterator), Q$java_util_List);
    for (activeChild$iterator = slotChildren.iterator__Ljava_util_Iterator_2(); activeChild$iterator.hasNext__Z();) {
      activeChild = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(activeChild$iterator.next__Ljava_lang_Object_2(), Q$com_gwtplatform_mvp_client_PresenterWidget);
      com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(activeChild);
    }
  }
  for (popupPresenter$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_popupChildren); popupPresenter$iterator.java_util_AbstractList$IteratorImpl_i < popupPresenter$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    popupPresenter = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(popupPresenter$iterator), Q$com_gwtplatform_mvp_client_PresenterWidget);
    com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(popupPresenter);
  }
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  this$static.onReveal__V();
  this$static.com_gwtplatform_mvp_client_PresenterWidget_visible = true;
  for (slotChildren$iterator = java_util_AbstractMap$2_$iterator__Ljava_util_AbstractMap$2_2Ljava_util_Iterator_2(java_util_AbstractMap_$values__Ljava_util_AbstractMap_2Ljava_util_Collection_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren)); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(slotChildren$iterator.java_util_AbstractMap$2$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    slotChildren = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractMap$2$1_$next__Ljava_util_AbstractMap$2$1_2Ljava_lang_Object_2(slotChildren$iterator), Q$java_util_List);
    for (activeChild$iterator = slotChildren.iterator__Ljava_util_Iterator_2(); activeChild$iterator.hasNext__Z();) {
      activeChild = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(activeChild$iterator.next__Ljava_lang_Object_2(), Q$com_gwtplatform_mvp_client_PresenterWidget);
      com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(activeChild);
    }
  }
  for (popupPresenter$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_popupChildren); popupPresenter$iterator.java_util_AbstractList$IteratorImpl_i < popupPresenter$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    popupPresenter = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(popupPresenter$iterator), Q$com_gwtplatform_mvp_client_PresenterWidget);
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(popupPresenter.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(popupPresenter.com_gwtplatform_mvp_client_PresenterWidget_view);
    null.nullMethod();
    com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(popupPresenter);
  }
}

function com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Ljava_lang_Object_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(this$static, slot, content){
  var activeChild, activeChild$iterator, slotChildren;
  if (!content) {
    com_gwtplatform_mvp_client_PresenterWidget_$clearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Ljava_lang_Object_2V(this$static, slot);
    return;
  }
  !!content.com_gwtplatform_mvp_client_PresenterWidget_currentParentPresenter && content.com_gwtplatform_mvp_client_PresenterWidget_currentParentPresenter != this$static && com_gwtplatform_mvp_client_PresenterWidget_$detach__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(content.com_gwtplatform_mvp_client_PresenterWidget_currentParentPresenter, content);
  content.com_gwtplatform_mvp_client_PresenterWidget_currentParentPresenter = this$static;
  slotChildren = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren, slot), Q$java_util_List);
  if (slotChildren) {
    if (slotChildren.size__I() == 1 && com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(slotChildren.get__ILjava_lang_Object_2(0)) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(content)) {
      return;
    }
    if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
      for (activeChild$iterator = slotChildren.iterator__Ljava_util_Iterator_2(); activeChild$iterator.hasNext__Z();) {
        activeChild = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(activeChild$iterator.next__Ljava_lang_Object_2(), Q$com_gwtplatform_mvp_client_PresenterWidget);
        com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(activeChild);
      }
    }
    slotChildren.clear__V();
    slotChildren.add__Ljava_lang_Object_2Z(content);
  }
   else {
    slotChildren = new java_util_ArrayList_ArrayList__IV(1);
    slotChildren.add__Ljava_lang_Object_2Z(content);
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_activeChildren, slot, slotChildren);
  }
  this$static.com_gwtplatform_mvp_client_PresenterWidget_view.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_Widget_2V(slot, !content.com_gwtplatform_mvp_client_PresenterWidget_view?null:content.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2());
  if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    content.com_gwtplatform_mvp_client_PresenterWidget_visible || com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(content);
    com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V();
    com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V);
  }
}

_ = com_gwtplatform_mvp_client_PresenterWidget.prototype;
_.onReveal__V = function com_gwtplatform_mvp_client_PresenterWidget_onReveal__V(){
}
;
function com_gwtplatform_mvp_client_Presenter_$forceReveal__Lcom_gwtplatform_mvp_client_Presenter_2V(this$static){
  if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    return;
  }
  this$static.revealInParent__V();
}

function com_gwtplatform_mvp_client_Presenter(){
}

_ = com_gwtplatform_mvp_client_Presenter.prototype = new com_gwtplatform_mvp_client_PresenterWidget;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_shared_HasHandlers, Q$com_gwtplatform_mvp_client_PresenterWidget]);
function com_gwtplatform_mvp_client_RootPresenter_$onResetPresenters__Lcom_gwtplatform_mvp_client_RootPresenter_2Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2V(this$static){
  if (!this$static.com_gwtplatform_mvp_client_RootPresenter_isResetting) {
    this$static.com_gwtplatform_mvp_client_RootPresenter_isResetting = true;
    com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static);
    this$static.com_gwtplatform_mvp_client_RootPresenter_isResetting = false;
  }
}

_ = com_gwtplatform_mvp_client_ViewImpl.prototype;
_.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_Widget_2V = function com_gwtplatform_mvp_client_ViewImpl_setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_Widget_2V(slot, content){
}
;
_ = com_gwtplatform_mvp_client_RootPresenter$RootView.prototype;
_.asWidget__Lcom_google_gwt_user_client_ui_Widget_2 = function com_gwtplatform_mvp_client_RootPresenter$RootView_asWidget__Lcom_google_gwt_user_client_ui_Widget_2(){
  return null;
}
;
_.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_Widget_2V = function com_gwtplatform_mvp_client_RootPresenter$RootView_setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_Widget_2V(slot, content){
  if (this.com_gwtplatform_mvp_client_RootPresenter$RootView_usingRootLayoutPanel) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2());
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2());
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(), com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2());
    !!content && com_google_gwt_user_client_ui_LayoutPanel_$add__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2(), content);
  }
   else {
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2());
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2());
    !!content && com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(), content);
  }
}
;
function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V = nullMethod;
  com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_AsyncCallSucceedEvent__V(){
  com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V();
}

function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent(){
}

_ = com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_AsyncCallSucceedEvent__V.prototype = com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_TYPE;
function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_$onSuccess__Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2Ljava_lang_Object_2V(this$static, result){
  if (this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state == (com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V() , com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_LOADING)) {
    --com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter;
    com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter == 0 && (com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V() , com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_eventBus, new com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_AsyncCallSucceedEvent__V, null));
  }
  this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state = com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_SUCCEEDED;
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addDeferredCommand__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_user_client_Command_2V(new com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_ProxyPlaceAbstract$3$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2V(this$static, result, this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$request, this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$updateBrowserUrl));
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getCurrentPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2(this$static){
  return this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_size > 0?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_size - 1), Q$com_gwtplatform_mvp_client_proxy_PlaceRequest):new com_gwtplatform_mvp_client_proxy_PlaceRequest_PlaceRequest__V;
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$updateHistory__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2ZV(this$static, request, updateBrowserUrl){
  var $e0, browserHistoryToken, historyToken;
  try {
    java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_size - 1, request);
    if (updateBrowserUrl) {
      historyToken = com_gwtplatform_mvp_client_proxy_ParameterTokenFormatter_$toHistoryToken__Lcom_gwtplatform_mvp_client_proxy_ParameterTokenFormatter_2Ljava_util_List_2Ljava_lang_String_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_tokenFormatter, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy);
      browserHistoryToken = (com_google_gwt_user_client_History_$clinit__V() , com_google_gwt_user_client_History_impl?com_google_gwt_user_client_impl_HistoryImpl_token == null?$intern_7:com_google_gwt_user_client_impl_HistoryImpl_token:$intern_7);
      (browserHistoryToken == null || !java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(browserHistoryToken, historyToken)) && !!com_google_gwt_user_client_History_impl && com_google_gwt_user_client_impl_HistoryImpl_$newItem__Lcom_google_gwt_user_client_impl_HistoryImpl_2Ljava_lang_String_2ZV(com_google_gwt_user_client_History_impl, historyToken);
    }
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, Q$com_gwtplatform_mvp_client_proxy_TokenFormatException))
      throw $e0;
  }
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addDeferredCommand__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_user_client_Command_2V(command){
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), command);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$manualReveal__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_Presenter_2V(this$static, presenter){
  !!this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation || (presenter.com_gwtplatform_mvp_client_PresenterWidget_visible?(com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V)):com_gwtplatform_mvp_client_Presenter_$forceReveal__Lcom_gwtplatform_mvp_client_Presenter_2V(presenter));
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_ProxyPlaceAbstract$3$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2V(this$1, val$presenter, val$request, val$updateBrowserUrl){
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1 = this$1;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$presenter = val$presenter;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$request = val$request;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$updateBrowserUrl = val$updateBrowserUrl;
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1(){
}

_ = com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_ProxyPlaceAbstract$3$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2V.prototype = com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1.prototype = new java_lang_Object;
_.execute__V = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_execute__V(){
  var originalRequest;
  originalRequest = com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getCurrentPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$0.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager);
  originalRequest == com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getCurrentPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$0.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager) && com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$updateHistory__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2ZV(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$0.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$request, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$updateBrowserUrl);
  com_gwtplatform_mvp_client_proxy_NavigationEvent_$clinit__V();
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_google_gwt_event_shared_GwtEvent_2V(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$0.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager, new com_gwtplatform_mvp_client_proxy_NavigationEvent_NavigationEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2V);
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$manualReveal__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_Presenter_2V(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$0, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$presenter);
}
;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$1 = null;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$presenter = null;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$request = null;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$updateBrowserUrl = false;
function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V(){
  com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V();
}

function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent(){
}

_ = com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V.prototype = com_gwtplatform_mvp_client_proxy_ResetPresentersEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_RootPresenter_$onResetPresenters__Lcom_gwtplatform_mvp_client_RootPresenter_2Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_gwtplatform_mvp_client_proxy_ResetPresentersHandler));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_type;
}
;
function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootContentHandler_2V(this$static, handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler.com_gwtplatform_mvp_client_PresenterWidget_view, Q$com_gwtplatform_mvp_client_RootPresenter$RootView).com_gwtplatform_mvp_client_RootPresenter$RootView_usingRootLayoutPanel = false;
  com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Ljava_lang_Object_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(handler, (com_gwtplatform_mvp_client_RootPresenter_$clinit__V() , com_gwtplatform_mvp_client_RootPresenter_rootSlot), this$static.com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_content);
}

function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_RevealRootContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V(content){
  com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V();
  this.com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_content = content;
}

function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent(){
}

_ = com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_RevealRootContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V.prototype = com_gwtplatform_mvp_client_proxy_RevealRootContentEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootContentHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, Q$com_gwtplatform_mvp_client_proxy_RevealRootContentHandler));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_TYPE;
}
;
_.com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_content = null;
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = nullMethod;
  java_lang_Boolean_FALSE = new java_lang_Boolean_Boolean__ZV(false);
  java_lang_Boolean_TRUE = new java_lang_Boolean_Boolean__ZV(true);
}

function java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this$static, other){
  return this$static.java_lang_Boolean_value == other.java_lang_Boolean_value?0:this$static.java_lang_Boolean_value?1:-1;
}

function java_lang_Boolean_Boolean__ZV(value){
  this.java_lang_Boolean_value = value;
}

function java_lang_Boolean(){
}

_ = java_lang_Boolean_Boolean__ZV.prototype = java_lang_Boolean.prototype = new java_lang_Object;
_.compareTo__Ljava_lang_Object_2I$ = function java_lang_Boolean_compareTo__Ljava_lang_Object_2I(other){
  return java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(other, Q$java_lang_Boolean));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Boolean_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(o, Q$java_lang_Boolean) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, Q$java_lang_Boolean).java_lang_Boolean_value == this.java_lang_Boolean_value;
}
;
_.hashCode__I$ = function java_lang_Boolean_hashCode__I(){
  return this.java_lang_Boolean_value?1231:1237;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Boolean, Q$java_lang_Comparable]);
_.java_lang_Boolean_value = false;
var java_lang_Boolean_FALSE, java_lang_Boolean_TRUE;
function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, className){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_typeName = packageName + className;
  return clazz;
}

function java_lang_Number(){
}

_ = java_lang_Number.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Number]);
function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function java_lang_IllegalArgumentException(){
}

_ = java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.prototype = java_lang_IllegalArgumentException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_RuntimeException, Q$java_lang_Throwable]);
function java_lang_Integer_$compareTo__Ljava_lang_Integer_2Ljava_lang_Integer_2I(this$static, b){
  return this$static.java_lang_Integer_value < b.java_lang_Integer_value?-1:this$static.java_lang_Integer_value > b.java_lang_Integer_value?1:0;
}

function java_lang_Integer_Integer__IV(value){
  this.java_lang_Integer_value = value;
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

function java_lang_Integer(){
}

_ = java_lang_Integer_Integer__IV.prototype = java_lang_Integer.prototype = new java_lang_Number;
_.compareTo__Ljava_lang_Object_2I$ = function java_lang_Integer_compareTo__Ljava_lang_Object_2I(b){
  return java_lang_Integer_$compareTo__Ljava_lang_Integer_2Ljava_lang_Integer_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(b, Q$java_lang_Integer));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(o, Q$java_lang_Integer) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, Q$java_lang_Integer).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I$ = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Integer, Q$java_lang_Number]);
_.java_lang_Integer_value = 0;
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = nullMethod;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Integer_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$java_lang_Integer, 256, 0);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Math_abs__DD(x){
  return x <= 0?0 - x:x;
}

function java_lang_Math_max__III(x, y){
  return x > y?x:y;
}

function java_lang_Math_min__III(x, y){
  return x < y?x:y;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2I(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

_ = String.prototype;
_.compareTo__Ljava_lang_Object_2I$ = function java_lang_String_compareTo__Ljava_lang_Object_2I(other){
  return java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(other, Q$java_lang_String));
}
;
function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_StringBuilder_$$init__Ljava_lang_StringBuilder_2V(this);
  com_google_gwt_core_client_impl_StringBufferImplAppend_$append__Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2Ljava_lang_Object_2Ljava_lang_String_2V(this.java_lang_StringBuilder_impl, s);
}

_ = java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V.prototype = java_lang_StringBuilder.prototype;
function java_util_AbstractMap_$values__Ljava_util_AbstractMap_2Ljava_util_Collection_2(this$static){
  var entrySet;
  entrySet = new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static);
  return new java_util_AbstractMap$2_AbstractMap$2__Ljava_util_AbstractMap_2V(this$static, entrySet);
}

_ = java_util_AbstractMap.prototype;
_.isEmpty__Z = function java_util_AbstractMap_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  var entry;
  entry = java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, true);
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}
;
function java_util_AbstractHashMap_$containsHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, value){
  var hashCodeMap = this$static.java_util_AbstractHashMap_hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue__Ljava_lang_Object_2();
        if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function java_util_AbstractHashMap_$containsStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, value){
  var stringMap = this$static.java_util_AbstractHashMap_stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

function java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, value){
  if (this$static.java_util_AbstractHashMap_nullSlotLive && java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static.java_util_AbstractHashMap_nullSlot, value)) {
    return true;
  }
   else if (java_util_AbstractHashMap_$containsStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, value)) {
    return true;
  }
   else if (java_util_AbstractHashMap_$containsHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, value)) {
    return true;
  }
  return false;
}

_ = java_util_AbstractHashMap.prototype;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_ = java_util_AbstractHashMap$EntrySet.prototype;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(entry, Q$java_util_Map$Entry).getKey__Ljava_lang_Object_2();
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySet_this$0, key);
    return true;
  }
  return false;
}
;
function java_util_AbstractList_$indexOf__Ljava_util_AbstractList_2Ljava_lang_Object_2I(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.java_util_Arrays$ArrayList_array.length; i < n; ++i) {
    if (toFind == null?(java_util_AbstractList_checkIndex__IIV(i, this$static.java_util_Arrays$ArrayList_array.length) , this$static.java_util_Arrays$ArrayList_array[i]) == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(toFind, (java_util_AbstractList_checkIndex__IIV(i, this$static.java_util_Arrays$ArrayList_array.length) , this$static.java_util_Arrays$ArrayList_array[i]))) {
      return i;
    }
  }
  return -1;
}

_ = java_util_AbstractList.prototype;
_.clear__V = function java_util_AbstractList_clear__V(){
  this.removeRange__IIV(0, this.size__I());
}
;
_.removeRange__IIV = function java_util_AbstractList_removeRange__IIV(fromIndex, endIndex){
  var i, iter;
  iter = this.listIterator__ILjava_util_ListIterator_2(fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next__Ljava_lang_Object_2();
    iter.remove__V();
  }
}
;
function java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV(wrapped, fromIndex, toIndex){
  this.java_util_AbstractList$SubList_wrapped = wrapped;
  this.java_util_AbstractList$SubList_fromIndex = fromIndex;
  this.java_util_AbstractList$SubList_size = toIndex - fromIndex;
  if (fromIndex > toIndex) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_234 + fromIndex + ' > toIndex: ' + toIndex);
  }
  if (fromIndex < 0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_234 + fromIndex + ' < 0');
  }
  if (toIndex > wrapped.java_util_ArrayList_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('toIndex: ' + toIndex + ' > wrapped.size() ' + wrapped.java_util_ArrayList_size);
  }
}

function java_util_AbstractList$SubList(){
}

_ = java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV.prototype = java_util_AbstractList$SubList.prototype = new java_util_AbstractList;
_.add__ILjava_lang_Object_2V = function java_util_AbstractList$SubList_add__ILjava_lang_Object_2V(index, element){
  java_util_AbstractList_checkIndex__IIV(index, this.java_util_AbstractList$SubList_size + 1);
  ++this.java_util_AbstractList$SubList_size;
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this.java_util_AbstractList$SubList_wrapped, this.java_util_AbstractList$SubList_fromIndex + index, element);
}
;
_.get__ILjava_lang_Object_2 = function java_util_AbstractList$SubList_get__ILjava_lang_Object_2(index){
  java_util_AbstractList_checkIndex__IIV(index, this.java_util_AbstractList$SubList_size);
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_AbstractList$SubList_wrapped, this.java_util_AbstractList$SubList_fromIndex + index);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractList$SubList_remove__ILjava_lang_Object_2(index){
  var result;
  java_util_AbstractList_checkIndex__IIV(index, this.java_util_AbstractList$SubList_size);
  result = java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_AbstractList$SubList_wrapped, this.java_util_AbstractList$SubList_fromIndex + index);
  --this.java_util_AbstractList$SubList_size;
  return result;
}
;
_.size__I = function java_util_AbstractList$SubList_size__I(){
  return this.java_util_AbstractList$SubList_size;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection, Q$java_util_List]);
_.java_util_AbstractList$SubList_fromIndex = 0;
_.java_util_AbstractList$SubList_size = 0;
_.java_util_AbstractList$SubList_wrapped = null;
function java_util_AbstractMap$2_$iterator__Ljava_util_AbstractMap$2_2Ljava_util_Iterator_2(this$static){
  var outerIter;
  outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$static.java_util_AbstractMap$2_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0);
  return new java_util_AbstractMap$2$1_AbstractMap$2$1__Ljava_util_AbstractMap$2_2V(outerIter);
}

function java_util_AbstractMap$2_AbstractMap$2__Ljava_util_AbstractMap_2V(this$0, val$entrySet){
  this.java_util_AbstractMap$2_this$0 = this$0;
  this.java_util_AbstractMap$2_val$entrySet = val$entrySet;
}

function java_util_AbstractMap$2(){
}

_ = java_util_AbstractMap$2_AbstractMap$2__Ljava_util_AbstractMap_2V.prototype = java_util_AbstractMap$2.prototype = new java_util_AbstractCollection;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$2_contains__Ljava_lang_Object_2Z(value){
  return java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$2_this$0, value);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$2_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$2_$iterator__Ljava_util_AbstractMap$2_2Ljava_util_Iterator_2(this);
}
;
_.size__I = function java_util_AbstractMap$2_size__I(){
  return this.java_util_AbstractMap$2_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection]);
_.java_util_AbstractMap$2_this$0 = null;
_.java_util_AbstractMap$2_val$entrySet = null;
function java_util_AbstractMap$2$1_$next__Ljava_util_AbstractMap$2$1_2Ljava_lang_Object_2(this$static){
  var value;
  value = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this$static.java_util_AbstractMap$2$1_val$outerIter).getValue__Ljava_lang_Object_2();
  return value;
}

function java_util_AbstractMap$2$1_AbstractMap$2$1__Ljava_util_AbstractMap$2_2V(val$outerIter){
  this.java_util_AbstractMap$2$1_val$outerIter = val$outerIter;
}

function java_util_AbstractMap$2$1(){
}

_ = java_util_AbstractMap$2$1_AbstractMap$2$1__Ljava_util_AbstractMap$2_2V.prototype = java_util_AbstractMap$2$1.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_AbstractMap$2$1_hasNext__Z(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this.java_util_AbstractMap$2$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$2$1_next__Ljava_lang_Object_2(){
  return java_util_AbstractMap$2$1_$next__Ljava_util_AbstractMap$2$1_2Ljava_lang_Object_2(this);
}
;
_.remove__V = function java_util_AbstractMap$2$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$2$1_val$outerIter);
}
;
_.java_util_AbstractMap$2$1_val$outerIter = null;
function java_util_AbstractSequentialList(){
}

_ = java_util_AbstractSequentialList.prototype = new java_util_AbstractList;
_.add__ILjava_lang_Object_2V = function java_util_AbstractSequentialList_add__ILjava_lang_Object_2V(index, element){
  var iter;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index);
  java_util_LinkedList_$addBefore__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2V(iter.java_util_LinkedList$ListIteratorImpl_this$0, element, iter.java_util_LinkedList$ListIteratorImpl_currentNode);
  ++iter.java_util_LinkedList$ListIteratorImpl_currentIndex;
  iter.java_util_LinkedList$ListIteratorImpl_lastNode = null;
}
;
_.get__ILjava_lang_Object_2 = function java_util_AbstractSequentialList_get__ILjava_lang_Object_2(index){
  var $e0, iter;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index);
  try {
    return java_util_LinkedList$ListIteratorImpl_$next__Ljava_util_LinkedList$ListIteratorImpl_2Ljava_lang_Object_2(iter);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, Q$java_util_NoSuchElementException)) {
      throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V("Can't get element " + index);
    }
     else 
      throw $e0;
  }
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractSequentialList_iterator__Ljava_util_Iterator_2(){
  return java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, 0);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractSequentialList_remove__ILjava_lang_Object_2(index){
  var $e0, iter, old;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index);
  try {
    old = java_util_LinkedList$ListIteratorImpl_$next__Ljava_util_LinkedList$ListIteratorImpl_2Ljava_lang_Object_2(iter);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, Q$java_util_NoSuchElementException)) {
      throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V("Can't remove element " + index);
    }
     else 
      throw $e0;
  }
  java_util_LinkedList$ListIteratorImpl_$remove__Ljava_util_LinkedList$ListIteratorImpl_2V(iter);
  return old;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection, Q$java_util_List]);
function java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, i);
  return true;
}

function java_util_ArrayList_$removeRange__Ljava_util_ArrayList_2IIV(this$static, fromIndex, endIndex){
  var count;
  java_util_AbstractList_checkIndex__IIV(fromIndex, this$static.java_util_ArrayList_size);
  (endIndex < fromIndex || endIndex > this$static.java_util_ArrayList_size) && java_util_AbstractList_indexOutOfBounds__IIV(endIndex, this$static.java_util_ArrayList_size);
  count = endIndex - fromIndex;
  java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, fromIndex, count);
  this$static.java_util_ArrayList_size -= count;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static, index, o){
  var previous;
  previous = (java_util_AbstractList_checkIndex__IIV(index, this$static.java_util_ArrayList_size) , this$static.java_util_ArrayList_array[index]);
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, index, o);
  return previous;
}

function java_util_ArrayList_ArrayList__IV(initialCapacity){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
  java_util_ArrayList_setCapacity___3Ljava_lang_Object_2IV(this.java_util_ArrayList_array, initialCapacity);
}

function java_util_ArrayList_setCapacity___3Ljava_lang_Object_2IV(array, newSize){
  array.length = newSize;
}

_ = java_util_ArrayList_ArrayList__IV.prototype = java_util_ArrayList.prototype;
_.clear__V = function java_util_ArrayList_clear__V(){
  java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(this);
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_size == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.removeRange__IIV = function java_util_ArrayList_removeRange__IIV(fromIndex, endIndex){
  java_util_ArrayList_$removeRange__Ljava_util_ArrayList_2IIV(this, fromIndex, endIndex);
}
;
function java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(array){
  this.java_util_Arrays$ArrayList_array = array;
}

function java_util_Arrays$ArrayList(){
}

_ = java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V.prototype = java_util_Arrays$ArrayList.prototype = new java_util_AbstractList;
_.contains__Ljava_lang_Object_2Z = function java_util_Arrays$ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractList_$indexOf__Ljava_util_AbstractList_2Ljava_lang_Object_2I(this, o) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Arrays$ArrayList_get__ILjava_lang_Object_2(index){
  return java_util_AbstractList_checkIndex__IIV(index, this.java_util_Arrays$ArrayList_array.length) , this.java_util_Arrays$ArrayList_array[index];
}
;
_.size__I = function java_util_Arrays$ArrayList_size__I(){
  return this.java_util_Arrays$ArrayList_array.length;
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_Arrays$ArrayList_toArray___3Ljava_lang_Object_2(){
  return com_google_gwt_lang_Array_clone___3Ljava_lang_Object_2_3Ljava_lang_Object_2(this.java_util_Arrays$ArrayList_array);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_Arrays$ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  var i, size;
  size = this.java_util_Arrays$ArrayList_array.length;
  out.length < size && (out = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(out, size));
  for (i = 0; i < size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this.java_util_Arrays$ArrayList_array[i]);
  }
  out.length > size && com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size, null);
  return out;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Collection, Q$java_util_List]);
_.java_util_Arrays$ArrayList_array = null;
function java_util_Collections_unmodifiableList__Ljava_util_List_2Ljava_util_List_2(list){
  java_util_Collections_$clinit__V();
  return list?new java_util_Collections$UnmodifiableRandomAccessList_Collections$UnmodifiableRandomAccessList__Ljava_util_List_2V(list):new java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V(null);
}

function java_util_Collections$SingletonList_Collections$SingletonList__Ljava_lang_Object_2V(element){
  this.java_util_Collections$SingletonList_element = element;
}

function java_util_Collections$SingletonList(){
}

_ = java_util_Collections$SingletonList_Collections$SingletonList__Ljava_lang_Object_2V.prototype = java_util_Collections$SingletonList.prototype = new java_util_AbstractList;
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$SingletonList_contains__Ljava_lang_Object_2Z(item){
  return java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_Collections$SingletonList_element, item);
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$SingletonList_get__ILjava_lang_Object_2(index){
  if (index == 0) {
    return this.java_util_Collections$SingletonList_element;
  }
   else {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
}
;
_.size__I = function java_util_Collections$SingletonList_size__I(){
  return 1;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Collection, Q$java_util_List]);
_.java_util_Collections$SingletonList_element = null;
function java_util_Collections$UnmodifiableCollection(){
}

_ = java_util_Collections$UnmodifiableCollection.prototype = new java_lang_Object;
_.add__Ljava_lang_Object_2Z = function java_util_Collections$UnmodifiableCollection_add__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.clear__V = function java_util_Collections$UnmodifiableCollection_clear__V(){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$UnmodifiableCollection_iterator__Ljava_util_Iterator_2(){
  return new java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V(this.java_util_Collections$UnmodifiableCollection_coll.iterator__Ljava_util_Iterator_2());
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_Collections$UnmodifiableCollection_remove__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.size__I = function java_util_Collections$UnmodifiableCollection_size__I(){
  return this.java_util_Collections$UnmodifiableCollection_coll.size__I();
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableCollection_toArray___3Ljava_lang_Object_2(){
  return this.java_util_Collections$UnmodifiableCollection_coll.toArray___3Ljava_lang_Object_2();
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  return this.java_util_Collections$UnmodifiableCollection_coll.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection]);
_.java_util_Collections$UnmodifiableCollection_coll = null;
function java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V(it){
  this.java_util_Collections$UnmodifiableCollectionIterator_it = it;
}

function java_util_Collections$UnmodifiableCollectionIterator(){
}

_ = java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V.prototype = java_util_Collections$UnmodifiableCollectionIterator.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_Collections$UnmodifiableCollectionIterator_hasNext__Z(){
  return this.java_util_Collections$UnmodifiableCollectionIterator_it.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableCollectionIterator_next__Ljava_lang_Object_2(){
  return this.java_util_Collections$UnmodifiableCollectionIterator_it.next__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_Collections$UnmodifiableCollectionIterator_remove__V(){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.java_util_Collections$UnmodifiableCollectionIterator_it = null;
function java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V(list){
  this.java_util_Collections$UnmodifiableCollection_coll = list;
  this.java_util_Collections$UnmodifiableList_list = list;
}

function java_util_Collections$UnmodifiableList(){
}

_ = java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V.prototype = java_util_Collections$UnmodifiableList.prototype = new java_util_Collections$UnmodifiableCollection;
_.equals__Ljava_lang_Object_2Z$ = function java_util_Collections$UnmodifiableList_equals__Ljava_lang_Object_2Z(o){
  return java_util_AbstractList_$equals__Ljava_util_AbstractList_2Ljava_lang_Object_2Z(this.java_util_Collections$UnmodifiableList_list, o);
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$UnmodifiableList_get__ILjava_lang_Object_2(index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Collections$UnmodifiableList_list, index);
}
;
_.hashCode__I$ = function java_util_Collections$UnmodifiableList_hashCode__I(){
  return java_util_AbstractList_$hashCode__Ljava_util_AbstractList_2I(this.java_util_Collections$UnmodifiableList_list);
}
;
_.isEmpty__Z = function java_util_Collections$UnmodifiableList_isEmpty__Z(){
  return this.java_util_Collections$UnmodifiableList_list.java_util_ArrayList_size == 0;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$UnmodifiableList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V(new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this.java_util_Collections$UnmodifiableList_list, 0));
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_Collections$UnmodifiableList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V(new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this.java_util_Collections$UnmodifiableList_list, from));
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection, Q$java_util_List]);
_.java_util_Collections$UnmodifiableList_list = null;
function java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V(lit){
  this.java_util_Collections$UnmodifiableCollectionIterator_it = lit;
  this.java_util_Collections$UnmodifiableListIterator_lit = lit;
}

function java_util_Collections$UnmodifiableListIterator(){
}

_ = java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V.prototype = java_util_Collections$UnmodifiableListIterator.prototype = new java_util_Collections$UnmodifiableCollectionIterator;
_.hasPrevious__Z = function java_util_Collections$UnmodifiableListIterator_hasPrevious__Z(){
  return this.java_util_Collections$UnmodifiableListIterator_lit.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableListIterator_previous__Ljava_lang_Object_2(){
  return java_util_AbstractList$ListIteratorImpl_$previous__Ljava_util_AbstractList$ListIteratorImpl_2Ljava_lang_Object_2(this.java_util_Collections$UnmodifiableListIterator_lit);
}
;
_.java_util_Collections$UnmodifiableListIterator_lit = null;
function java_util_Collections$UnmodifiableRandomAccessList_Collections$UnmodifiableRandomAccessList__Ljava_util_List_2V(list){
  java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V.call(this, list);
}

function java_util_Collections$UnmodifiableRandomAccessList(){
}

_ = java_util_Collections$UnmodifiableRandomAccessList_Collections$UnmodifiableRandomAccessList__Ljava_util_List_2V.prototype = java_util_Collections$UnmodifiableRandomAccessList.prototype = new java_util_Collections$UnmodifiableList;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection, Q$java_util_List]);
function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o) != null;
}

_ = java_util_HashSet.prototype;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_HashSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
function java_util_LinkedList_$addBefore__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2V(this$static, o, target){
  new java_util_LinkedList$Node_LinkedList$Node__Ljava_lang_Object_2Ljava_util_LinkedList$Node_2V(o, target);
  ++this$static.java_util_LinkedList_size;
}

function java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this$static, index){
  var i, node;
  (index < 0 || index > this$static.java_util_LinkedList_size) && java_util_AbstractList_indexOutOfBounds__IIV(index, this$static.java_util_LinkedList_size);
  if (index >= ~~this$static.java_util_LinkedList_size >> 1) {
    node = this$static.java_util_LinkedList_header;
    for (i = this$static.java_util_LinkedList_size; i > index; --i) {
      node = node.java_util_LinkedList$Node_prev;
    }
  }
   else {
    node = this$static.java_util_LinkedList_header.java_util_LinkedList$Node_next;
    for (i = 0; i < index; ++i) {
      node = node.java_util_LinkedList$Node_next;
    }
  }
  return new java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V(this$static, index, node);
}

function java_util_LinkedList_LinkedList__V(){
  this.java_util_LinkedList_header = new java_util_LinkedList$Node_LinkedList$Node__V;
  this.java_util_LinkedList_size = 0;
}

function java_util_LinkedList(){
}

_ = java_util_LinkedList_LinkedList__V.prototype = java_util_LinkedList.prototype = new java_util_AbstractSequentialList;
_.add__Ljava_lang_Object_2Z = function java_util_LinkedList_add__Ljava_lang_Object_2Z(o){
  new java_util_LinkedList$Node_LinkedList$Node__Ljava_lang_Object_2Ljava_util_LinkedList$Node_2V(o, this.java_util_LinkedList_header);
  ++this.java_util_LinkedList_size;
  return true;
}
;
_.clear__V = function java_util_LinkedList_clear__V(){
  this.java_util_LinkedList_header = new java_util_LinkedList$Node_LinkedList$Node__V;
  this.java_util_LinkedList_size = 0;
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_LinkedList_listIterator__ILjava_util_ListIterator_2(index){
  return java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index);
}
;
_.size__I = function java_util_LinkedList_size__I(){
  return this.java_util_LinkedList_size;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Collection, Q$java_util_List]);
_.java_util_LinkedList_header = null;
_.java_util_LinkedList_size = 0;
function java_util_LinkedList$ListIteratorImpl_$next__Ljava_util_LinkedList$ListIteratorImpl_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_LinkedList$ListIteratorImpl_currentNode == this$static.java_util_LinkedList$ListIteratorImpl_this$0.java_util_LinkedList_header) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this$static.java_util_LinkedList$ListIteratorImpl_lastNode = this$static.java_util_LinkedList$ListIteratorImpl_currentNode;
  this$static.java_util_LinkedList$ListIteratorImpl_currentNode = this$static.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next;
  ++this$static.java_util_LinkedList$ListIteratorImpl_currentIndex;
  return this$static.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
}

function java_util_LinkedList$ListIteratorImpl_$remove__Ljava_util_LinkedList$ListIteratorImpl_2V(this$static){
  java_util_LinkedList$ListIteratorImpl_$verifyCurrentElement__Ljava_util_LinkedList$ListIteratorImpl_2V(this$static);
  this$static.java_util_LinkedList$ListIteratorImpl_currentNode == this$static.java_util_LinkedList$ListIteratorImpl_lastNode?(this$static.java_util_LinkedList$ListIteratorImpl_currentNode = this$static.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_next):--this$static.java_util_LinkedList$ListIteratorImpl_currentIndex;
  java_util_LinkedList$Node_$remove__Ljava_util_LinkedList$Node_2V(this$static.java_util_LinkedList$ListIteratorImpl_lastNode);
  this$static.java_util_LinkedList$ListIteratorImpl_lastNode = null;
  --this$static.java_util_LinkedList$ListIteratorImpl_this$0.java_util_LinkedList_size;
}

function java_util_LinkedList$ListIteratorImpl_$verifyCurrentElement__Ljava_util_LinkedList$ListIteratorImpl_2V(this$static){
  if (!this$static.java_util_LinkedList$ListIteratorImpl_lastNode) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
}

function java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V(this$0, index, startNode){
  this.java_util_LinkedList$ListIteratorImpl_this$0 = this$0;
  this.java_util_LinkedList$ListIteratorImpl_currentNode = startNode;
  this.java_util_LinkedList$ListIteratorImpl_currentIndex = index;
}

function java_util_LinkedList$ListIteratorImpl(){
}

_ = java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V.prototype = java_util_LinkedList$ListIteratorImpl.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_LinkedList$ListIteratorImpl_hasNext__Z(){
  return this.java_util_LinkedList$ListIteratorImpl_currentNode != this.java_util_LinkedList$ListIteratorImpl_this$0.java_util_LinkedList_header;
}
;
_.hasPrevious__Z = function java_util_LinkedList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev != this.java_util_LinkedList$ListIteratorImpl_this$0.java_util_LinkedList_header;
}
;
_.next__Ljava_lang_Object_2 = function java_util_LinkedList$ListIteratorImpl_next__Ljava_lang_Object_2(){
  return java_util_LinkedList$ListIteratorImpl_$next__Ljava_util_LinkedList$ListIteratorImpl_2Ljava_lang_Object_2(this);
}
;
_.previous__Ljava_lang_Object_2 = function java_util_LinkedList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  if (this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev == this.java_util_LinkedList$ListIteratorImpl_this$0.java_util_LinkedList_header) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this.java_util_LinkedList$ListIteratorImpl_lastNode = this.java_util_LinkedList$ListIteratorImpl_currentNode = this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev;
  --this.java_util_LinkedList$ListIteratorImpl_currentIndex;
  return this.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
}
;
_.remove__V = function java_util_LinkedList$ListIteratorImpl_remove__V(){
  java_util_LinkedList$ListIteratorImpl_$remove__Ljava_util_LinkedList$ListIteratorImpl_2V(this);
}
;
_.java_util_LinkedList$ListIteratorImpl_currentIndex = 0;
_.java_util_LinkedList$ListIteratorImpl_currentNode = null;
_.java_util_LinkedList$ListIteratorImpl_lastNode = null;
_.java_util_LinkedList$ListIteratorImpl_this$0 = null;
function java_util_LinkedList$Node_$remove__Ljava_util_LinkedList$Node_2V(this$static){
  this$static.java_util_LinkedList$Node_next.java_util_LinkedList$Node_prev = this$static.java_util_LinkedList$Node_prev;
  this$static.java_util_LinkedList$Node_prev.java_util_LinkedList$Node_next = this$static.java_util_LinkedList$Node_next;
  this$static.java_util_LinkedList$Node_next = this$static.java_util_LinkedList$Node_prev = this$static;
}

function java_util_LinkedList$Node_LinkedList$Node__V(){
  this.java_util_LinkedList$Node_next = this.java_util_LinkedList$Node_prev = this;
}

function java_util_LinkedList$Node_LinkedList$Node__Ljava_lang_Object_2Ljava_util_LinkedList$Node_2V(value, nextNode){
  this.java_util_LinkedList$Node_value = value;
  this.java_util_LinkedList$Node_next = nextNode;
  this.java_util_LinkedList$Node_prev = nextNode.java_util_LinkedList$Node_prev;
  nextNode.java_util_LinkedList$Node_prev.java_util_LinkedList$Node_next = this;
  nextNode.java_util_LinkedList$Node_prev = this;
}

function java_util_LinkedList$Node(){
}

_ = java_util_LinkedList$Node_LinkedList$Node__Ljava_lang_Object_2Ljava_util_LinkedList$Node_2V.prototype = java_util_LinkedList$Node_LinkedList$Node__V.prototype = java_util_LinkedList$Node.prototype = new java_lang_Object;
_.java_util_LinkedList$Node_next = null;
_.java_util_LinkedList$Node_prev = null;
_.java_util_LinkedList$Node_value = null;
function java_util_Vector_Vector__V(){
  this.java_util_Vector_arrayList = new java_util_ArrayList_ArrayList__V;
}

function java_util_Vector(){
}

_ = java_util_Vector_Vector__V.prototype = java_util_Vector.prototype = new java_util_AbstractList;
_.add__Ljava_lang_Object_2Z = function java_util_Vector_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.java_util_Vector_arrayList, o);
}
;
_.add__ILjava_lang_Object_2V = function java_util_Vector_add__ILjava_lang_Object_2V(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this.java_util_Vector_arrayList, index, o);
}
;
_.clear__V = function java_util_Vector_clear__V(){
  java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(this.java_util_Vector_arrayList);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_Vector_contains__Ljava_lang_Object_2Z(elem){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this.java_util_Vector_arrayList, elem, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Vector_get__ILjava_lang_Object_2(index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index);
}
;
_.isEmpty__Z = function java_util_Vector_isEmpty__Z(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_size == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Vector_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this.java_util_Vector_arrayList);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_Vector_remove__ILjava_lang_Object_2(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index);
}
;
_.removeRange__IIV = function java_util_Vector_removeRange__IIV(fromIndex, endIndex){
  java_util_ArrayList_$removeRange__Ljava_util_ArrayList_2IIV(this.java_util_Vector_arrayList, fromIndex, endIndex);
}
;
_.size__I = function java_util_Vector_size__I(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_size;
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_Vector_toArray___3Ljava_lang_Object_2(){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(this.java_util_Vector_arrayList);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_Vector_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this.java_util_Vector_arrayList, a);
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Collection, Q$java_util_List]);
_.java_util_Vector_arrayList = null;
function java_util_Stack_Stack__V(){
  java_util_Vector_Vector__V.call(this);
}

function java_util_Stack(){
}

_ = java_util_Stack_Stack__V.prototype = java_util_Stack.prototype = new java_util_Vector;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Collection, Q$java_util_List]);
function java_util_TreeMap_$clinit__V(){
  java_util_TreeMap_$clinit__V = nullMethod;
  java_util_TreeMap_DEFAULT_1COMPARATOR = new java_util_TreeMap$1_TreeMap$1__V;
}

function java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$Node_2(this$static, key){
  var c, tree;
  tree = this$static.java_util_TreeMap_root;
  while (tree) {
    c = java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(key, tree.java_util_TreeMap$Node_key);
    if (c == 0) {
      return tree;
    }
    c < 0?(tree = tree.java_util_TreeMap$Node_child[0]):(tree = tree.java_util_TreeMap$Node_child[1]);
  }
  return null;
}

function java_util_TreeMap_$insert__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$State_2Ljava_util_TreeMap$Node_2(this$static, tree, newNode, state){
  var c, childNum;
  if (!tree) {
    return newNode;
  }
   else {
    c = java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(tree.java_util_TreeMap$Node_key, newNode.java_util_TreeMap$Node_key);
    if (c == 0) {
      state.java_util_TreeMap$State_value = tree.java_util_TreeMap$Node_value;
      state.java_util_TreeMap$State_found = true;
      tree.java_util_TreeMap$Node_value = newNode.java_util_TreeMap$Node_value;
      return tree;
    }
    childNum = c > 0?0:1;
    tree.java_util_TreeMap$Node_child[childNum] = java_util_TreeMap_$insert__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$State_2Ljava_util_TreeMap$Node_2(this$static, tree.java_util_TreeMap$Node_child[childNum], newNode, state);
    if (java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[childNum])) {
      if (java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[1 - childNum])) {
        tree.java_util_TreeMap$Node_isRed = true;
        tree.java_util_TreeMap$Node_child[0].java_util_TreeMap$Node_isRed = false;
        tree.java_util_TreeMap$Node_child[1].java_util_TreeMap$Node_isRed = false;
      }
       else {
        java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[childNum].java_util_TreeMap$Node_child[childNum])?(tree = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree, 1 - childNum)):java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[childNum].java_util_TreeMap$Node_child[1 - childNum]) && (tree = (tree.java_util_TreeMap$Node_child[1 - (1 - childNum)] = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree.java_util_TreeMap$Node_child[1 - (1 - childNum)], 1 - (1 - childNum)) , java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree, 1 - childNum)));
      }
    }
  }
  return tree;
}

function java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(node){
  return !!node && node.java_util_TreeMap$Node_isRed;
}

function java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  var node, state;
  node = new java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value);
  state = new java_util_TreeMap$State_TreeMap$State__V;
  this$static.java_util_TreeMap_root = java_util_TreeMap_$insert__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$State_2Ljava_util_TreeMap$Node_2(this$static, this$static.java_util_TreeMap_root, node, state);
  state.java_util_TreeMap$State_found || ++this$static.java_util_TreeMap_size;
  this$static.java_util_TreeMap_root.java_util_TreeMap$Node_isRed = false;
  return state.java_util_TreeMap$State_value;
}

function java_util_TreeMap_$remove__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, keyObj){
  var state;
  state = new java_util_TreeMap$State_TreeMap$State__V;
  java_util_TreeMap_$removeWithState__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$State_2Z(this$static, keyObj, state);
  return state.java_util_TreeMap$State_value;
}

function java_util_TreeMap_$removeWithState__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$State_2Z(this$static, key, state){
  var c, dir, dir2, found, grandparent, head, last, newNode, node, parent, sibling;
  if (!this$static.java_util_TreeMap_root) {
    return false;
  }
  found = null;
  parent = null;
  head = new java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V(null, null);
  dir = 1;
  head.java_util_TreeMap$Node_child[1] = this$static.java_util_TreeMap_root;
  node = head;
  while (node.java_util_TreeMap$Node_child[dir]) {
    last = dir;
    grandparent = parent;
    parent = node;
    node = node.java_util_TreeMap$Node_child[dir];
    c = java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(node.java_util_TreeMap$Node_key, key);
    dir = c < 0?1:0;
    c == 0 && (!state.java_util_TreeMap$State_matchValue || com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(node.java_util_TreeMap$Node_value, state.java_util_TreeMap$State_value)) && (found = node);
    if (!(!!node && node.java_util_TreeMap$Node_isRed) && !java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(node.java_util_TreeMap$Node_child[dir])) {
      if (java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(node.java_util_TreeMap$Node_child[1 - dir])) {
        parent = parent.java_util_TreeMap$Node_child[last] = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(node, dir);
      }
       else if (!java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(node.java_util_TreeMap$Node_child[1 - dir])) {
        sibling = parent.java_util_TreeMap$Node_child[1 - last];
        if (sibling) {
          if (!java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(sibling.java_util_TreeMap$Node_child[1 - last]) && !java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(sibling.java_util_TreeMap$Node_child[last])) {
            parent.java_util_TreeMap$Node_isRed = false;
            sibling.java_util_TreeMap$Node_isRed = true;
            node.java_util_TreeMap$Node_isRed = true;
          }
           else {
            dir2 = grandparent.java_util_TreeMap$Node_child[1] == parent?1:0;
            java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(sibling.java_util_TreeMap$Node_child[last])?(grandparent.java_util_TreeMap$Node_child[dir2] = (parent.java_util_TreeMap$Node_child[1 - last] = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(parent.java_util_TreeMap$Node_child[1 - last], 1 - last) , java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(parent, last))):java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(sibling.java_util_TreeMap$Node_child[1 - last]) && (grandparent.java_util_TreeMap$Node_child[dir2] = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(parent, last));
            node.java_util_TreeMap$Node_isRed = grandparent.java_util_TreeMap$Node_child[dir2].java_util_TreeMap$Node_isRed = true;
            grandparent.java_util_TreeMap$Node_child[dir2].java_util_TreeMap$Node_child[0].java_util_TreeMap$Node_isRed = false;
            grandparent.java_util_TreeMap$Node_child[dir2].java_util_TreeMap$Node_child[1].java_util_TreeMap$Node_isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    state.java_util_TreeMap$State_found = true;
    state.java_util_TreeMap$State_value = found.java_util_TreeMap$Node_value;
    if (node != found) {
      newNode = new java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V(node.java_util_TreeMap$Node_key, node.java_util_TreeMap$Node_value);
      java_util_TreeMap_$replaceNode__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2V(this$static, head, found, newNode);
      parent == found && (parent = newNode);
    }
    parent.java_util_TreeMap$Node_child[parent.java_util_TreeMap$Node_child[1] == node?1:0] = node.java_util_TreeMap$Node_child[!node.java_util_TreeMap$Node_child[0]?1:0];
    --this$static.java_util_TreeMap_size;
  }
  this$static.java_util_TreeMap_root = head.java_util_TreeMap$Node_child[1];
  !!this$static.java_util_TreeMap_root && (this$static.java_util_TreeMap_root.java_util_TreeMap$Node_isRed = false);
  return state.java_util_TreeMap$State_found;
}

function java_util_TreeMap_$replaceNode__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2V(this$static, head, node, newNode){
  var direction, parent;
  parent = head;
  direction = parent.java_util_TreeMap$Node_key == null || java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(node.java_util_TreeMap$Node_key, parent.java_util_TreeMap$Node_key) > 0?1:0;
  while (parent.java_util_TreeMap$Node_child[direction] != node) {
    parent = parent.java_util_TreeMap$Node_child[direction];
    direction = java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(node.java_util_TreeMap$Node_key, parent.java_util_TreeMap$Node_key) > 0?1:0;
  }
  parent.java_util_TreeMap$Node_child[direction] = newNode;
  newNode.java_util_TreeMap$Node_isRed = node.java_util_TreeMap$Node_isRed;
  newNode.java_util_TreeMap$Node_child[0] = node.java_util_TreeMap$Node_child[0];
  newNode.java_util_TreeMap$Node_child[1] = node.java_util_TreeMap$Node_child[1];
  node.java_util_TreeMap$Node_child[0] = null;
  node.java_util_TreeMap$Node_child[1] = null;
}

function java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree, rotateDirection){
  var save;
  save = tree.java_util_TreeMap$Node_child[1 - rotateDirection];
  tree.java_util_TreeMap$Node_child[1 - rotateDirection] = save.java_util_TreeMap$Node_child[rotateDirection];
  save.java_util_TreeMap$Node_child[rotateDirection] = tree;
  tree.java_util_TreeMap$Node_isRed = true;
  save.java_util_TreeMap$Node_isRed = false;
  return save;
}

function java_util_TreeMap_TreeMap__V(){
  java_util_TreeMap_$clinit__V();
  java_util_TreeMap_TreeMap__Ljava_util_Comparator_2V.call(this, null);
}

function java_util_TreeMap_TreeMap__Ljava_util_Comparator_2V(c){
  this.java_util_TreeMap_root = null;
  !c && (c = java_util_TreeMap_DEFAULT_1COMPARATOR);
  this.java_util_TreeMap_cmp = c;
}

function java_util_TreeMap(){
}

_ = java_util_TreeMap_TreeMap__V.prototype = java_util_TreeMap.prototype = new java_util_AbstractMap;
_.containsKey__Ljava_lang_Object_2Z = function java_util_TreeMap_containsKey__Ljava_lang_Object_2Z(key){
  return !!java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$Node_2(this, key);
}
;
_.entrySet__Ljava_util_Set_2 = function java_util_TreeMap_entrySet__Ljava_util_Set_2(){
  return new java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_TreeMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(k){
  var entry;
  entry = java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$Node_2(this, k);
  return entry?entry.java_util_TreeMap$Node_value:null;
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_TreeMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value){
  return java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value);
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_TreeMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(keyObj){
  return java_util_TreeMap_$remove__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, keyObj);
}
;
_.size__I = function java_util_TreeMap_size__I(){
  return this.java_util_TreeMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Map]);
_.java_util_TreeMap_cmp = null;
_.java_util_TreeMap_root = null;
_.java_util_TreeMap_size = 0;
var java_util_TreeMap_DEFAULT_1COMPARATOR;
function java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Comparable_2Ljava_lang_Comparable_2I(a, b){
  if (a == null || b == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return a.compareTo__Ljava_lang_Object_2I$(b);
}

function java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(a, b){
  return java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Comparable_2Ljava_lang_Comparable_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(a, Q$java_lang_Comparable), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(b, Q$java_lang_Comparable));
}

function java_util_TreeMap$1_TreeMap$1__V(){
}

function java_util_TreeMap$1(){
}

_ = java_util_TreeMap$1_TreeMap$1__V.prototype = java_util_TreeMap$1.prototype = new java_lang_Object;
function java_util_TreeMap$EntryIterator_$inOrderAdd__Ljava_util_TreeMap$EntryIterator_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, list, type, current, fromKey, toKey){
  if (!current) {
    return;
  }
  !!current.java_util_TreeMap$Node_child[0] && java_util_TreeMap$EntryIterator_$inOrderAdd__Ljava_util_TreeMap$EntryIterator_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, list, type, current.java_util_TreeMap$Node_child[0], fromKey, toKey);
  java_util_TreeMap$EntryIterator_$inRange__Ljava_util_TreeMap$EntryIterator_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, type, current.java_util_TreeMap$Node_key, fromKey, toKey) && list.add__Ljava_lang_Object_2Z(current);
  !!current.java_util_TreeMap$Node_child[1] && java_util_TreeMap$EntryIterator_$inOrderAdd__Ljava_util_TreeMap$EntryIterator_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, list, type, current.java_util_TreeMap$Node_child[1], fromKey, toKey);
}

function java_util_TreeMap$EntryIterator_$inRange__Ljava_util_TreeMap$EntryIterator_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, type, key, fromKey, toKey){
  if (type.toKeyValid__Z()) {
    if (java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(key, toKey) >= 0) {
      return false;
    }
  }
  if (type.fromKeyValid__Z()) {
    if (java_util_TreeMap$1_$compare__Ljava_util_TreeMap$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(key, fromKey) < 0) {
      return false;
    }
  }
  return true;
}

function java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V(this$0){
  java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2Ljava_lang_Object_2V.call(this, this$0, (java_util_TreeMap$SubMapType_$clinit__V() , java_util_TreeMap$SubMapType_All));
}

function java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$0, type){
  var list;
  this.java_util_TreeMap$EntryIterator_this$0 = this$0;
  list = new java_util_ArrayList_ArrayList__V;
  java_util_TreeMap$EntryIterator_$inOrderAdd__Ljava_util_TreeMap$EntryIterator_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, list, type, this$0.java_util_TreeMap_root, null, null);
  this.java_util_TreeMap$EntryIterator_iter = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(list);
}

function java_util_TreeMap$EntryIterator(){
}

_ = java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V.prototype = java_util_TreeMap$EntryIterator.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_TreeMap$EntryIterator_hasNext__Z(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this.java_util_TreeMap$EntryIterator_iter);
}
;
_.next__Ljava_lang_Object_2 = function java_util_TreeMap$EntryIterator_next__Ljava_lang_Object_2(){
  return this.java_util_TreeMap$EntryIterator_last = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this.java_util_TreeMap$EntryIterator_iter), Q$java_util_Map$Entry);
}
;
_.remove__V = function java_util_TreeMap$EntryIterator_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this.java_util_TreeMap$EntryIterator_iter);
  java_util_TreeMap_$remove__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_TreeMap$EntryIterator_this$0, this.java_util_TreeMap$EntryIterator_last.getKey__Ljava_lang_Object_2());
}
;
_.java_util_TreeMap$EntryIterator_iter = null;
_.java_util_TreeMap$EntryIterator_last = null;
_.java_util_TreeMap$EntryIterator_this$0 = null;
function java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V(this$0){
  this.java_util_TreeMap$EntrySet_this$0 = this$0;
}

function java_util_TreeMap$EntrySet(){
}

_ = java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V.prototype = java_util_TreeMap$EntrySet.prototype = new java_util_AbstractSet;
_.contains__Ljava_lang_Object_2Z = function java_util_TreeMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  var entry, lookupEntry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(o, Q$java_util_Map$Entry)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, Q$java_util_Map$Entry);
  lookupEntry = java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$Node_2(this.java_util_TreeMap$EntrySet_this$0, entry.getKey__Ljava_lang_Object_2());
  return !!lookupEntry && java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(lookupEntry.java_util_TreeMap$Node_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_TreeMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V(this.java_util_TreeMap$EntrySet_this$0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_TreeMap$EntrySet_remove__Ljava_lang_Object_2Z(o){
  var entry, state;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(o, Q$java_util_Map$Entry)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, Q$java_util_Map$Entry);
  state = new java_util_TreeMap$State_TreeMap$State__V;
  state.java_util_TreeMap$State_matchValue = true;
  state.java_util_TreeMap$State_value = entry.getValue__Ljava_lang_Object_2();
  return java_util_TreeMap_$removeWithState__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$State_2Z(this.java_util_TreeMap$EntrySet_this$0, entry.getKey__Ljava_lang_Object_2(), state);
}
;
_.size__I = function java_util_TreeMap$EntrySet_size__I(){
  return this.java_util_TreeMap$EntrySet_this$0.java_util_TreeMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Collection, Q$java_util_Set]);
_.java_util_TreeMap$EntrySet_this$0 = null;
function java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value){
  this.java_util_TreeMap$Node_key = key;
  this.java_util_TreeMap$Node_value = value;
  this.java_util_TreeMap$Node_child = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1util_1TreeMap$Node_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$java_util_TreeMap$Node, 2, 0);
  this.java_util_TreeMap$Node_isRed = true;
}

function java_util_TreeMap$Node(){
}

_ = java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V.prototype = java_util_TreeMap$Node.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = function java_util_TreeMap$Node_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(o, Q$java_util_TreeMap$Node)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, Q$java_util_TreeMap$Node);
  return java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_TreeMap$Node_key, other.java_util_TreeMap$Node_key) && java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_TreeMap$Node_value, other.java_util_TreeMap$Node_value);
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_TreeMap$Node_getKey__Ljava_lang_Object_2(){
  return this.java_util_TreeMap$Node_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_TreeMap$Node_getValue__Ljava_lang_Object_2(){
  return this.java_util_TreeMap$Node_value;
}
;
_.hashCode__I$ = function java_util_TreeMap$Node_hashCode__I(){
  var keyHash, valueHash;
  keyHash = this.java_util_TreeMap$Node_key != null?com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this.java_util_TreeMap$Node_key):0;
  valueHash = this.java_util_TreeMap$Node_value != null?com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this.java_util_TreeMap$Node_value):0;
  return keyHash ^ valueHash;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_TreeMap$Node_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value){
  var old;
  old = this.java_util_TreeMap$Node_value;
  this.java_util_TreeMap$Node_value = value;
  return old;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_util_Map$Entry, Q$java_util_TreeMap$Node]);
_.java_util_TreeMap$Node_child = null;
_.java_util_TreeMap$Node_isRed = false;
_.java_util_TreeMap$Node_key = null;
_.java_util_TreeMap$Node_value = null;
function java_util_TreeMap$State_TreeMap$State__V(){
}

function java_util_TreeMap$State(){
}

_ = java_util_TreeMap$State_TreeMap$State__V.prototype = java_util_TreeMap$State.prototype = new java_lang_Object;
_.java_util_TreeMap$State_done = false;
_.java_util_TreeMap$State_found = false;
_.java_util_TreeMap$State_matchValue = false;
_.java_util_TreeMap$State_value = null;
function java_util_TreeMap$SubMapType_$clinit__V(){
  java_util_TreeMap$SubMapType_$clinit__V = nullMethod;
  java_util_TreeMap$SubMapType_All = new java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV('All', 0);
  java_util_TreeMap$SubMapType_Head = new java_util_TreeMap$SubMapType$1_TreeMap$SubMapType$1__Ljava_lang_String_2IV;
  java_util_TreeMap$SubMapType_Range = new java_util_TreeMap$SubMapType$2_TreeMap$SubMapType$2__Ljava_lang_String_2IV;
  java_util_TreeMap$SubMapType_Tail = new java_util_TreeMap$SubMapType$3_TreeMap$SubMapType$3__Ljava_lang_String_2IV;
  java_util_TreeMap$SubMapType_$VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1util_1TreeMap$SubMapType_12_1classLit, makeCastMap([Q$java_io_Serializable, Q$java_lang_Object_$1]), Q$java_util_TreeMap$SubMapType, [java_util_TreeMap$SubMapType_All, java_util_TreeMap$SubMapType_Head, java_util_TreeMap$SubMapType_Range, java_util_TreeMap$SubMapType_Tail]);
}

function java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function java_util_TreeMap$SubMapType(){
}

_ = java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV.prototype = java_util_TreeMap$SubMapType.prototype = new java_lang_Enum;
_.fromKeyValid__Z = function java_util_TreeMap$SubMapType_fromKeyValid__Z(){
  return false;
}
;
_.toKeyValid__Z = function java_util_TreeMap$SubMapType_toKeyValid__Z(){
  return false;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum, Q$java_util_TreeMap$SubMapType]);
var java_util_TreeMap$SubMapType_$VALUES, java_util_TreeMap$SubMapType_All, java_util_TreeMap$SubMapType_Head, java_util_TreeMap$SubMapType_Range, java_util_TreeMap$SubMapType_Tail;
function java_util_TreeMap$SubMapType$1_TreeMap$SubMapType$1__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'Head', 1);
}

function java_util_TreeMap$SubMapType$1(){
}

_ = java_util_TreeMap$SubMapType$1_TreeMap$SubMapType$1__Ljava_lang_String_2IV.prototype = java_util_TreeMap$SubMapType$1.prototype = new java_util_TreeMap$SubMapType;
_.toKeyValid__Z = function java_util_TreeMap$SubMapType$1_toKeyValid__Z(){
  return true;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum, Q$java_util_TreeMap$SubMapType]);
function java_util_TreeMap$SubMapType$2_TreeMap$SubMapType$2__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, $intern_183, 2);
}

function java_util_TreeMap$SubMapType$2(){
}

_ = java_util_TreeMap$SubMapType$2_TreeMap$SubMapType$2__Ljava_lang_String_2IV.prototype = java_util_TreeMap$SubMapType$2.prototype = new java_util_TreeMap$SubMapType;
_.fromKeyValid__Z = function java_util_TreeMap$SubMapType$2_fromKeyValid__Z(){
  return true;
}
;
_.toKeyValid__Z = function java_util_TreeMap$SubMapType$2_toKeyValid__Z(){
  return true;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum, Q$java_util_TreeMap$SubMapType]);
function java_util_TreeMap$SubMapType$3_TreeMap$SubMapType$3__Ljava_lang_String_2IV(){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, 'Tail', 3);
}

function java_util_TreeMap$SubMapType$3(){
}

_ = java_util_TreeMap$SubMapType$3_TreeMap$SubMapType$3__Ljava_lang_String_2IV.prototype = java_util_TreeMap$SubMapType$3.prototype = new java_util_TreeMap$SubMapType;
_.fromKeyValid__Z = function java_util_TreeMap$SubMapType$3_fromKeyValid__Z(){
  return true;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_lang_Comparable, Q$java_lang_Enum, Q$java_util_TreeMap$SubMapType]);
function java_util_TreeSet_$add__Ljava_util_TreeSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_TreeSet_map, o, (java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE)) == null;
}

function java_util_TreeSet_TreeSet__V(){
  this.java_util_TreeSet_map = new java_util_TreeMap_TreeMap__V;
}

function java_util_TreeSet(){
}

_ = java_util_TreeSet_TreeSet__V.prototype = java_util_TreeSet.prototype = new java_util_AbstractSet;
_.add__Ljava_lang_Object_2Z = function java_util_TreeSet_add__Ljava_lang_Object_2Z(o){
  return java_util_TreeSet_$add__Ljava_util_TreeSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_TreeSet_contains__Ljava_lang_Object_2Z(o){
  return !!java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_TreeMap$Node_2(this.java_util_TreeSet_map, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_TreeSet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2Ljava_util_Set_2(this.java_util_TreeSet_map));
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_TreeSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_TreeMap_$remove__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_TreeSet_map, o) != null;
}
;
_.size__I = function java_util_TreeSet_size__I(){
  return this.java_util_TreeSet_map.java_util_TreeMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$java_io_Serializable, Q$java_util_Collection, Q$java_util_Set]);
_.java_util_TreeSet_map = null;
function pur_gwtplatform_samples_events_InsertCompleteEvent_$clinit__V(){
  pur_gwtplatform_samples_events_InsertCompleteEvent_$clinit__V = nullMethod;
  pur_gwtplatform_samples_events_InsertCompleteEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function pur_gwtplatform_samples_events_InsertCompleteEvent(){
}

_ = pur_gwtplatform_samples_events_InsertCompleteEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.pur_gwtplatform_samples_events_InsertCompleteEvent_data = null;
var pur_gwtplatform_samples_events_InsertCompleteEvent_TYPE;
function pur_gwtplatform_samples_model_Data_Data__Ljava_lang_String_2Ljava_lang_String_2V(id, value){
  this.pur_gwtplatform_samples_model_Data_id = id;
  this.pur_gwtplatform_samples_model_Data_value = value;
}

function pur_gwtplatform_samples_model_Data(){
}

_ = pur_gwtplatform_samples_model_Data_Data__Ljava_lang_String_2Ljava_lang_String_2V.prototype = pur_gwtplatform_samples_model_Data.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$pur_gwtplatform_samples_model_Data]);
_.pur_gwtplatform_samples_model_Data_id = null;
_.pur_gwtplatform_samples_model_Data_value = null;
function pur_gwtplatform_samples_modules_IGinjectorImpl_$com$gwtplatform$dispatch$client$gin$DispatchAsyncModule_1provideDispatchAsync_1methodInjection__Lpur_gwtplatform_samples_modules_IGinjectorImpl_2Lcom_gwtplatform_dispatch_client_gin_DispatchAsyncModule_2Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2Lcom_gwtplatform_dispatch_shared_DispatchAsync_2(injectee, _0, _1, _2){
  return injectee.provideDispatchAsync__Lcom_gwtplatform_dispatch_client_ExceptionHandler_2Lcom_gwtplatform_dispatch_shared_SecurityCookieAccessor_2Lcom_gwtplatform_dispatch_client_actionhandler_ClientActionHandlerRegistry_2Lcom_gwtplatform_dispatch_shared_DispatchAsync_2(_0, _1, _2);
}

function pur_gwtplatform_samples_presenter_MessageInsertPresenter(){
}

_ = pur_gwtplatform_samples_presenter_MessageInsertPresenter.prototype = new com_gwtplatform_mvp_client_Presenter;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_shared_HasHandlers, Q$com_gwtplatform_mvp_client_PresenterWidget]);
_.pur_gwtplatform_samples_presenter_MessageInsertPresenter_eventBus = null;
_.pur_gwtplatform_samples_presenter_MessageInsertPresenter_placeManager = null;
function pur_gwtplatform_samples_presenter_MessageInsertPresenter$1(){
}

_ = pur_gwtplatform_samples_presenter_MessageInsertPresenter$1.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_dom_client_ClickHandler, Q$com_google_gwt_event_shared_EventHandler]);
_.pur_gwtplatform_samples_presenter_MessageInsertPresenter$1_this$0 = null;
function pur_gwtplatform_samples_presenter_MessageInsertPresenter$2(){
}

_ = pur_gwtplatform_samples_presenter_MessageInsertPresenter$2.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$com_google_gwt_event_dom_client_ClickHandler, Q$com_google_gwt_event_shared_EventHandler]);
_.pur_gwtplatform_samples_presenter_MessageInsertPresenter$2_this$0 = null;
function pur_gwtplatform_samples_views_MessageInsertView(){
}

_ = pur_gwtplatform_samples_views_MessageInsertView.prototype = new com_gwtplatform_mvp_client_ViewImpl;
_.java_lang_Object_castableTypeMap$ = makeCastMap([Q$pur_gwtplatform_samples_views_IMessageInsertView, Q$pur_gwtplatform_samples_views_MessageInsertView]);
_.pur_gwtplatform_samples_views_MessageInsertView_cancelButton = null;
_.pur_gwtplatform_samples_views_MessageInsertView_dataStock = null;
_.pur_gwtplatform_samples_views_MessageInsertView_insertButton = null;
_.pur_gwtplatform_samples_views_MessageInsertView_keyStock = null;
_.pur_gwtplatform_samples_views_MessageInsertView_widget = null;
function pur_gwtplatform_samples_views_MessageInsertView_1BinderImpl(){
}

_ = pur_gwtplatform_samples_views_MessageInsertView_1BinderImpl.prototype = new java_lang_Object;
var com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2('[Lcom.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl;'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_154, $intern_67), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'Style$Display;'), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1dom_1client_1Style$Overflow_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'Style$Overflow;'), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2('[Lcom.google.gwt.i18n.client.', 'HasDirection$Direction;'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1IncompatibleRemoteServiceException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_235, 'IncompatibleRemoteServiceException'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1RpcTokenException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_235, 'RpcTokenException'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1XsrfToken_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_235, 'XsrfToken'), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_180, 'Widget;'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'ArrayList'), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_180, 'ValueBoxBase$TextAlignment;'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1ActionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_185, 'ActionException'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1ActionImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_185, 'ActionImpl'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1BatchResult_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_185, 'BatchResult'), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1gwtplatform_1dispatch_1shared_1BatchResult_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_236, 'BatchResult;'), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1gwtplatform_1dispatch_1shared_1Result_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_236, 'Result;'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1ServiceException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_185, 'ServiceException'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1UnsecuredActionImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_185, 'UnsecuredActionImpl'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1dispatch_1shared_1UnsupportedActionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_185, 'UnsupportedActionException'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Arrays$ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'Arrays$ArrayList'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'Collections$EmptyList'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$SingletonList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'Collections$SingletonList'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'LinkedList'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'Vector'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Stack_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_169, 'Stack'), com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Integer;'), com_google_gwt_lang_ClassLiteralHolder__13Ljava_1util_1TreeMap$Node_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_237, 'TreeMap$Node;'), com_google_gwt_lang_ClassLiteralHolder__13Ljava_1util_1TreeMap$SubMapType_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_237, 'TreeMap$SubMapType;');
$entry(com_google_gwt_core_client_impl_AsyncFragmentLoader_onLoad__IV)(3);
