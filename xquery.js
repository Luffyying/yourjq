function Myjquery(arg){
	this.elements = [];
	switch(typeof arg){
		case 'string'://#div  .div 
			var item = arg.charAt(0);
			switch(item){
			case '#':
				var a = document.getElementById(arg.substring(1));
				if(a)
				this.elements.push(a);
			break;
			case '.':
				this.elements = document.getElementsByClassName(arg.substring(1));
			break;
			default:
			    this.elements = document.getElementsByTagName(arg);
			}
		break;
		case 'object':
		
		break;
		case 'function':
		window.addEventListener('load',arg,false);
		break;
	}
}
Myjquery.prototype.on = function(type,selector,fn){
	if(selector &&typeof selector == 'string'){
        for(var i =0;i<this.elements.length;i++){
        	this.elements[i].addEventListener(type, function(e){
        		var item = selector.charAt(0);
			switch(item){
			case '#':
				if(e.target.id == selector.substring(1)){
							fn.call(e.target);
						}
			break;
			case '.':
			
				if(e.target.className == selector.substring(1)){
							fn.call(e.target);
						}
			
			break;
			default:
			break;
			    
			}
        		}, false);
        }
	}else if(selector &&typeof selector == 'function'){
		for(var i=0; i<this.elements.length; i++){
			fn = selector;
			this.elements[i].addEventListener(type, fn, false);
		}
	}
	
	return this;
}
Myjquery.prototype.click = function(fn){
	for(var i =0;i<this.elements.length;i++){
		this.elements[i].addEventListener('click',fn,false);
	}
	return this;//come true the link manipulate
}
Myjquery.prototype.mouseover = function(fn){
	for(var i =0;i<this.elements.length;i++){
		this.elements[i].addEventListener('mouseover',fn,false);
	}
	return this;
}
function $(arg){
	return new Myjquery(arg);
}