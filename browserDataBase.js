class browserDatabase{
    constructor(databaseName,show) {

        this.databaseName=databaseName;
        this.show=show;
        this.initiate();
        
    }

initiate() {

    if(localStorage.getItem(this.databaseName))
    {
        console.log('collection already exists', this.databaseName)
        this.show(this.getList())
    }

    else{
        localStorage.setItem(this.databaseName, JSON.stringify([]))
    }
        
    }
    getList(){
        return JSON.parse(localStorage.getItem(this.databaseName))||[];
    }

    setToLS(list){
        localStorage.setItem(this.databaseName, JSON.stringify(list))
    }

    save(rowData){
        const list = this.getList(); 

        list.push(rowData);

        this.setToLS(list);
        this.show(list);
    }


}