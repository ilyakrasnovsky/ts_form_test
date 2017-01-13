class Form_Data
{
    private first_name : string;
    private last_name : string;
    public constructor(first_name : string, last_name : string)
    {

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