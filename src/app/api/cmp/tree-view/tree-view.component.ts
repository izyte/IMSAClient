import { AppDataset } from './../../../svc/app-dataset.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() treeData:Array<any>=[];
  @Input() rootId:number=0;
  @Input() nodeHeight:number=20;

  constructor(public ds:AppDataset) { }

  ngOnInit(): void {
    //console.log(this.td,this.FlatTree());
    // this.ProcessTree();
  }

  public ProcessTree(){
    console.log("FLATTREE!:",this.FlatTree());
  }

  FlatTree(node?:any,level?:number):Array<any>{
    if(this.treeData.length==0)return [];

    let ret:Array<any> = [];

    if(node == undefined) node = this.treeData.find(n=>n.id == this.rootId);
    if(node.id == this.rootId) level = 0;

    node.level = level;
    ret.push(node);

    if(node.exp){
      let children:Array<any> = this.treeData.filter(n=>(n.pid == node.id && n.id != 0));
      children.forEach(n=>{
        this.FlatTree(n,level+1).forEach(n2=>{
          ret.push(n2);
        });
      })
    }

    return ret;
  }



}
