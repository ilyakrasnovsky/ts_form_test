class Form_Data
{
    private first_name : string;
    private last_name : string;
    public constructor(first_name : string, last_name : string)
    {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    public get_first_name() : string
    {
        return this.first_name;
    }
    public get_last_name() : string
    {
        return this.last_name;
    }
}

function get_form_data() : Form_Data
{
    let first_name = document.forms.namedItem("form1")["form1_firstname"].value;
    let last_name = document.forms.namedItem("form1")["form1_lastname"].value;
    let form_data = new Form_Data(first_name, last_name);
    console.log(form_data.get_first_name() + " " + form_data.get_last_name());
    return form_data;
}
/*
function main() : void
{

}

document.addEventListener('DOMContentLoaded', main);
*/