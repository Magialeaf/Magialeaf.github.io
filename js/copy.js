// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "复制成功",
                    message: "转载记得保留原文链接哦! ",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})

// 禁用控制台
document.onkeydown = function (e) 
{
    console.log(e.key);
    if (123 == window.event.keyCode || (e.ctrlKey && e.shiftKey && (74 === window.event.keyCode || 73 === window.event.keyCode|| 67 === window.event.keyCode)) || (e.ctrlKey && 85 === window.event.keyCode))
    {
        
        debounce(function () {
            new Vue({
                data: function () {
                    this.$notify({
                        title: "",
                        message: "不能打开F12哦!",
                        position: 'top-left',
                        offset: 50,
                        showClose: true,
                        type: "success",
                        duration: 5000
                    });
                }
            })
        }, 300);
        // return window.event.keyCode = 0,window.event.preventDefault(),!1
    }
};