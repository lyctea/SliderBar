(function(){   //立即执行函数，所有的变量都会置于其内部

	var Menubar = function(){
// 		获取文档中 id="demo" 的第一个元素：
// document.querySelector("#demo");
		this.el = document.querySelector('#sidebar ul');
		this.state = 'allClosed';
		this.el.addEventListener('click',function(e){
			// event.stopPropagation() 方法阻止事件冒泡到父元素，
			// 阻止任何父事件处理程序被执行
			e.stopPropagation();
		});
		var self = this;
		this.currentOpendMenuContent = null;
		this.menuList = document.querySelectorAll('#sidebar ul > li');
		for (var i = 0; i < this.menuList.length; i++) {
			this.menuList[i].addEventListener('click',function(e){
				var menuContenEl = document.getElementById(e.currentTarget.id + '-content');
				console.log(menuContenEl);
				if (self.state === 'allClosed') {
					console.log('打开' + menuContenEl.id);
					self.state = 'hasOpened';
					self.currentOpendMenuContent = menuContenEl;
				}else{
					console.log('关闭' + self.currentOpendMenuContent.id);
					console.log('打开' + menuContenEl.id);
					self.state = 'hasOpened';
					self.currentOpendMenuContetn = menuContenEl;
				}
			});
		 }  //for循环结束
	};


	var Sidebar = function(eId,closeBarId){   //构造函数
		this.state = 'opened';
		this.el = document.getElementById(eId || 'sidebar');
		this.closeBarEl = document.getElementById(closeBarId || 'closeBar');
		var self = this;
		this.menubar = new Menubar();
		this.el.addEventListener('click',function(event){
			if (event.target !== self.el) {		//点击的对象不是本身
				self.triggerSwitch();			//在函数的内部，this是指向函数的调用者 
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