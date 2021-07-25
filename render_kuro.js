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
		reader.onload = callback;
		reader.readAsDataURL(file);

	}else if(change_name == "blob_url"){

		callback(URL.createObjectURL(file, {type: file_model}));
		URL.revokeObjectURL(file);
		
	}else if(change_name == "blob"){
		//まだここは書いてないです
	}

}

function $file_set_on_element(file, element){
	element.files = file;
}
