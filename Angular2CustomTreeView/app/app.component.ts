import { Component } from '@angular/core';
require('lodash');

//const CUSTOM_TEMPLATE_STRING = '{{ node.data.name }}';

@Component({
  selector: 'my-app',
  template: '<Tree [nodes]="nodes" [options]="customTemplateStringOptions"></Tree>'
})
export class AppComponent {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            {
              id: 7, name: 'subsub', 
              children: [
                { id: 9, name: 'child1' },
                { id: 10, name: 'child2',children: [
                { id: 11, name: 'child1' },
                { id: 12, name: 'child2' }
              ] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 13,
      name: 'asyncroot',
      hasChildren: true
    }
  ];
  // nodes = [
  //   {
  //     id: uuid(),
  //     name: 'asyncroot',
  //     hasChildren: true
  //   }
  // ];

  asyncChildren = [
    {
      id:14,
      name: 'child2.1',
      hasChildren: true,
      subTitle: 'new and improved',
      parentid:13
    },
    {
      id:15,
      name: 'child2.2',
      hasChildren: false,
      subTitle: 'new and improved',
      parentid:13
    },
    {
      id:16,
      name: 'child2.3',
      hasChildren: false,
      subTitle: 'new and improved',
      parentid:15
    },
    {
      id:17,
      name: 'child2.1',
      hasChildren: true,
      subTitle: 'new and improved',
      parentid:15
    },
    {
      id:18,
      name: 'child2.2',
      hasChildren: false,
      subTitle: 'new and improved',
      parentid:14
    },
    {
      id:19,
      name: 'child2.3',
      hasChildren: false,
      subTitle: 'new and improved',
      parentid:14
    }
  ];
filteredChilds:any;
  getChildren(node: any) {
    this.filteredChilds= this.asyncChildren.filter(a=>a.parentid==node.id);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.filteredChilds.map((c) => { 
        return Object.assign(c);
      })), 2000);
    });
  }

  customTemplateStringOptions = {
    // treeNodeTemplate: MyTreeNodeTemplate,
    // displayField: 'subTitle',
    expandedField: 'expanded',
    getChildren: this.getChildren.bind(this)
  }
  onEvent = ($event: any) => console.log($event);
}

let id = 17;
function uuid() {
  id = id + 1;
  return id;
}

