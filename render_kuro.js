function $get_id(name){
	return document.getElementById(name);
}

function $get_class(name){
	return document.getElementsByClassName(name);
}

function $get_name(name){
	return document.getElementsByTagName(name);
}

function $create_element(name){
	return document.createElement(name);
}

function $text_on_element(text, element){
	element.textContent = text;
}

function $html_on_element(html, element){
	element.innerHTML = html;
}


function $add_event(element,event_name, callback){
	element.addEventListener(event_name, callback);
}



function $file_change(file,change_name, callback){
	let reader = new FileReader();
	let file_model = file.type;

	if(change_name == "base64"){
		reader.onload = function(e){
			debugger;
			callback(e.target.result);
		}
		reader.readAsDataURL(file);

	}else if(change_name == "blob_url"){
		let url = URL.createObjectURL(file, {type: file_model});
		if(url.match(/null/)){
			console.warn("this blob url includes null   " + url);
		}
		callback(url);
		URL.revokeObjectURL(file);
		
	}else if(change_name == "blob"){
		$file_change(file, 'blob_url', function(url){
			let req = new XMLHttpRequest();
			req.open("GET", url, true);
			req.responseType = "blob";
			req.onload = function(){
				callback(this.response);
			}
			req.send();
		});

	}
}



function $file_set_on_element(file, element){
	element.files = file;
}
