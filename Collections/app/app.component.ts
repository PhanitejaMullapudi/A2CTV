import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/tabcomponent.html',
})

export class AppComponent {
  dragedAsset: AssetItem;

  tabs = Tabs;
  selectedTab: Tab = Tabs.filter(a => a.isSelected == true)[0];
  prevTab: Tab;
  assetItems: AssetItem[] = Assets;

  onClick(ev, STab: Tab) {
    this.prevTab = this.tabs.filter(a => a.isSelected == true)[0];

    if (this.prevTab != undefined && this.prevTab != null) {
      this.prevTab.isSelected = false;
    }
    STab.isSelected = true;
    this.selectedTab = STab;
  }

  RemoveTab(ev, STab: Tab) {
    this.tabs = this.tabs.filter(function (el) { return el.id != STab.id });
  }

  Dragstar(ev, Dasset: AssetItem) {
    this.dragedAsset = Dasset;
    console.log(Dasset);
  }

  AssetDroped(ev) {
    if (this.dragedAsset != null) {
      if (this.selectedTab.Childs == null || this.selectedTab.Childs == undefined) {
        this.selectedTab.Childs = [];
        this.selectedTab.hasChilds = true;
        this.selectedTab.Childs.push(this.dragedAsset);
      }
      else {
        this.selectedTab.Childs.push(this.dragedAsset);
      }
    }

    this.dragedAsset = null;
    ev.preventDefault();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  AddTab(ev) {
    if (this.tabs.length < 5) {
      let ids: number[] = [];
      this.tabs.forEach(function (el) { ids.push(el.id) });
      console.log(ids);
      let nxtTabid = this.getFirstSmallestMissingID(ids);
      console.log(nxtTabid);
      this.tabs.push({ id: nxtTabid, Childs: null, hasChilds: false, isSelected: false, name: "Tab " + nxtTabid })
    }
  }

  getFirstSmallestMissingID(arr: number[]) {
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


