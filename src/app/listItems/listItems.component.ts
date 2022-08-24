import { Component } from "@angular/core";

@Component({
    selector: 'app-listItems',
    templateUrl: './listItems.component.html',
    styles: [`
    .five{
        color: white
    }
    `]
})

export class ListItemsComponent {
    pVisible = true;
    itemsList=[];
    onClick() {
        this.pVisible = !this.pVisible;
        console.log(this.pVisible);
        this.itemsList.push({display:'This is item number ' + (this.itemsList.length + 1) + '.', id: (this.itemsList.length + 1), color: this.getBackground()})
    }

    getBackground () {
        return (this.itemsList.length > 3) ? 'blue' : '';
    }

    
}