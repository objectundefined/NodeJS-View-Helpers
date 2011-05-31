formHelper = {
	'text': function(data){
		return '<input type=\"text\" value=\"'+ (data.vaue || '') +'\" name=\"'+ data.name + '\" \/>';
	},
	'textarea': function(data){
		return '<textarea name=\"'+ data.name + '\">'+ (data.vaue || '') + '<\/textarea>';
	},
	'radio': function(data){
		if(data.options)
		{
			var arr = data.options && data.options.map(function(option){
				return '<input type=\"radio\" name=\"'+ data.name + '\" value=\"'+ option.value + '\"'+ (option.checked?'CHECKED':'') +' \/>'+ option.label+'<\/br>';
			});
			return arr.join('');
		}
	},
	'checkbox': function(data){
		if(data.options)
		{
			var arr = data.options && data.options.map(function(option){
				return '<input type=\"checkbox\" name=\"'+ data.name + '\" value=\"'+ option.value + '\"'+ (option.checked?'CHECKED':'') +' \/>' + option.label+'<\/br>';
			});
			return arr.join('');
		}	
	},
	'select': function(data){
		if(data.options)
		{
			var arr = data.options && data.options.map(function(option){
				return '<option value=\"'+ option.value + '\">'+ option.label+'<\/option>'+'<\/br>';
			});
			return '<select name=\"'+data.name+'\">'+arr.join('')+'<\/select>';
		}			
	},
	'select_multiple': function(data){
		if(data.options)
		{
			var arr = data.options && data.options.map(function(option){
				return '<option value=\"'+ option.value + '\">'+ option.label+'<\/option>'+'<\/br>';
			});
			return '<select multiple=\"multiple\" name=\"'+data.name+'\">'+arr.join('')+'<\/select>';
		}				
	}
};
