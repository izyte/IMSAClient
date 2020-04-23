export class FieldInfo{
    constructor(
        public name:string,
        public type?:string,
        public caption?:string,
        public alias?:string,
        public isParameter?:boolean
    ){
        if(this.type==undefined) this.type="string";
        if(this.caption==undefined) this.caption="";
        if(this.alias==undefined) this.alias="";
        if(this.isParameter==undefined) this.isParameter=true;
    }
}

export class ColumnInfo extends FieldInfo{

    constructor(
        public name:string,
        public type?:string,
        public caption?:string,
        public alias?:string,

        public keyPosition:number=-1,
        public uniquePosition:number=-1,
        public groupPosition:number=-1,
        public sortPosition:number=-1,
        public displayPosition:number=-1,

        public isParameter:boolean=false,
        public isRequired:boolean=false,
        public isLong:boolean=false,

        public table:any=null

    ){
        super(name,type,caption,alias,isParameter);
    }

    get isCreated():boolean{
        return this.isToggleField("created");
    }

    get isCreatedBy():boolean{
        return this.isToggleField("createdby","created_by");
    }

    get isUpdated():boolean{
        return this.isToggleField("updated");
    }

    get isUpdatedBy():boolean{
        return this.isToggleField("updatedby","updated_by");
    }

    get isLocked():boolean{
        return this.isToggleField("locked");
    }

    get isLockedBy():boolean{
        return this.isToggleField("lockedby","locked_by");
    }

    get IsStampField():boolean{
        return this.isCreated || this.isCreatedBy || this.isLocked || this.isLockedBy || this.isUpdated || this.isUpdatedBy;
    }    

    get IsKeyField():boolean{
        return this.keyPosition != -1;
    }    

    get IsForRestore():boolean{
        return !this.IsKeyField && !this.IsStampField;
    }    

    private isToggleField(compareName:string, orCompareName?:string):boolean
    {
        if (name == null || this.table.tableFieldPrefix == null) return false;

        let prefix:string=this.table.tableFieldPrefix.toLowerCase();
        let ret:boolean = (this.name.toLowerCase() == (prefix + compareName));
        if(!ret && orCompareName != undefined) ret = (this.name.toLowerCase() == (prefix + orCompareName));

        return ret;
    }


}
