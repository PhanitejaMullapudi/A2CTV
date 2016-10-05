import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/tabcomponent.html',
})

export class AppComponent {
  dragedAsset: AssetItem;

  tabs = Tabs;
  selectedTab: Tab = Tabs.filter(a => a.isSelected == true)[0];
  TabtoDelete: Tab;
  TabtoRename: Tab;
  assetItems: AssetItem[] = Assets;
  ErrorMessage: string;

  NewName: string;
  showConfirm: boolean;

  
  /****************Drag and Drop Methods*******************/
  /********************************************************/
  
   Dragstar(ev, Dasset: AssetItem) {
    this.dragedAsset = Dasset;
  }

  AssetDroped(ev) {
    if (this.dragedAsset != null) {
      if (this.selectedTab.Childs == null || this.selectedTab.Childs == undefined) {
        this.selectedTab.Childs = [];
        this.selectedTab.hasChilds = true;
        this.selectedTab.Childs.push(this.dragedAsset);
      }
      else if(this.selectedTab.Childs.findIndex(a => a.id == this.dragedAsset.id) == -1) {
        this.selectedTab.Childs.push(this.dragedAsset);
      }
      else{
        console.log("Asset already exists");
      }
    }

    this.dragedAsset = null;
    ev.preventDefault();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
 
/******************** Click Methods **********************/
/********************************************************/

  TabClick(ev, STab: Tab) {
    let prevTab: Tab;
    prevTab = this.tabs.filter(a => a.isSelected == true)[0];

    if (prevTab != undefined && prevTab != null) {
      prevTab.isSelected = false;
    }
    STab.isSelected = true;
    this.selectedTab = STab;
  }

 RemoveTab(ev, STab: Tab) {
    if (this.tabs.length > 1) {
      this.tabs = this.tabs.filter(function (el) { return el.id != STab.id });
      this.tabs[0].isSelected = true;
      this.TabClick(ev, this.tabs[0]);
    }
    else {
      console.log("you alread have minimum number of tabs");
    }
    this.TabtoDelete = null;
  }

  AddTab(ev) {
    if (this.tabs.length < 5) {
      let ids: number[] = [];
      this.tabs.forEach(function (el) { ids.push(el.id) });
      let nxtTabid = this.getFirstSmallestMissingID(ids);

      this.tabs.push({ id: nxtTabid, Childs: null, hasChilds: false, isSelected: false, name: "Tab " + nxtTabid })
      this.TabClick(ev, this.tabs[this.tabs.length - 1]);
    }
  }

/********************** PopUp Methods ********************/
/********************************************************/

  ConfirmDelete(ev, STab: Tab) {
    this.TabtoDelete = STab;
  }

  RenameTab(ev, reTab: Tab) {
    this.TabtoRename = reTab;
  }

  RenameClose(ev) {
    this.TabtoRename = null;
  }

  ConfirmClose(ev) {
    this.TabtoDelete = null;
  }

/********************* Private Methods *******************/
/********************************************************/
  private getFirstSmallestMissingID(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let j = arr[i] - 1;

      while (j >= 0 && j < arr.length && arr[j] >= 0) {
        let temp = arr[j] - 1;
        arr[j] = -arr[j];
        if (arr[j] == 0)
          arr[j] = -1;
        j = temp;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        return i + 1;
      }
    }
    return arr.length + 1;
  }

}

export class Tab {
  id: number;
  name: string;
  isSelected: boolean;
  Childs: AssetItem[];
  hasChilds: boolean;
}

export class AssetItem {
  id: number;
  name: string;
  AssetImageURl: string;
}


const Tabs: Tab[] = [
  { id: 1, name: 'Tab 1', isSelected: true, hasChilds: false, Childs: null },
  { id: 2, name: 'Tab 2', isSelected: false, hasChilds: false, Childs: null },
  { id: 3, name: 'Tab 3', isSelected: false, hasChilds: false, Childs: null },
  { id: 4, name: 'Tab 4', isSelected: false, hasChilds: false, Childs: null },
  { id: 5, name: 'Tab 5', isSelected: false, hasChilds: false, Childs: null },
];

const Assets: AssetItem[] = [
  { id: 1, name: 'Asset 1', AssetImageURl: './images/asset.jpg' },
  { id: 2, name: 'Asset 2', AssetImageURl: './images/asset.jpg' },
  { id: 3, name: 'Asset 3', AssetImageURl: './images/asset.jpg' },
  { id: 4, name: 'Asset 4', AssetImageURl: './images/asset.jpg' },
  { id: 5, name: 'Asset 5', AssetImageURl: './images/asset.jpg' },
];


