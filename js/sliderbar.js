(function(){   //立即执行
	var Sidebar = function(eId,closeBarId){   //构造函数
		this.state = 'opened';
		this.el = document.getElementById(eId || 'sidebar');
		this.closeBarEl = document.getElementById(closeBarId || 'closeBar');
		var self = this;
		this.el.addEventListener('click',function(event){
			if (event.target !== self.el) {

				self.triggerSwitch();
			}
		});
	};
	//在函数的内部，this是指向函数的调用者 
	//将时间绑定到原型链中
	Sidebar.prototype.close = function(){
		console.log('关闭sideabr');
		this.state = 'closed';
	};
	Sidebar.prototype.open = function(){
		console.log('打开sideabr');
		this.state = 'opened';
	};
	Sidebar.prototype.triggerSwitch = function(){
		if (this.state == 'opened') {
			this.close();
		}else{
			this.open();
		}
	};
	var sidebar = new Sidebar();
})();   