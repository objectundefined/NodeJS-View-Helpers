First:

	FormHelpers = require('./FormHelpers.js')

Checkbox:

	FormHelpers.checkbox({
		name:'checkname',
		options:[
			{label:'labelname1',value:'differentvalue1'},
			{label:'labelname2',value:'differentvalue2', checked: true}
		]
	});
	
	// GENERATES:
	//	<INPUT TYPE="CHECKBOX" NAME="SAMENAME" VALUE="DIFFERENTVALUE1"/>LABELNAME1
	//	<INPUT TYPE="CHECKBOX" NAME="SAMENAME" VALUE="DIFFERENTVALUE2" CHECKED/>LABELNAME2
	
Radio:

	FormHelpers.radio({
		name:'radioname',
		options:[
			{label:'labelname1',value:'differentvalue1'},
			{label:'labelname2',value:'differentvalue2', checked: true}
		]
	});

	// GENERATES:
	//	<INPUT TYPE="RADIO" NAME="SAMENAME" VALUE="DIFFERENTVALUE"/>LABELNAME1
	//	<INPUT TYPE="RADIO" NAME="SAMENAME" VALUE="DIFFERENTVALUE" CHECKED/>LABELNAME2

Text:
	
	FormHelpers.text({
		name:'InputName',
		value:'DefaultValue'
	});
	
	// GENERATES:
	//	<INPUT TYPE=TEXT NAME="InputName" value="DefaultValue"/>

TextArea:

	FormHelpers.textArea({
		name:'textAreaName',
		value:'DefaultValue'
	});

	// GENERATES:
	//	<textarea NAME="InputName">DefaultValue</textarea>
	
Select:
	FormHelpers.select({
		name:'selectname',
		options:[
			{label:'labelname1',value:'differentvalue1'},
			{label:'labelname2',value:'differentvalue2', checked:true}
		]
	});
	
	// GENERATES:
	//	<SELECT NAME="INPUTNAME">
	//		<option value="differentvalue1">labelName1</option>
	//		<option value="differentvalue2" CHECKED>labelName2</option>
	//	</SELECT>


Select Multiple:
	FormHelpers.selectMultiple({
		name:'selectname',
		options:[
			{label:'labelname1',value:'differentvalue1', checked:true},
			{label:'labelname2',value:'differentvalue2', checked:true}
		]
	});

	// GENERATES:
	//	<SELECT NAME="INPUTNAME" multiple="multiple">
	//		<option value="differentvalue1" CHECKED>labelName1</option>
	//		<option value="differentvalue2" CHECKED>labelName2</option>
	//	</SELECT>
