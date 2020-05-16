import { AppDataset } from './../../../svc/app-dataset.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
  @Input() treeData: Array<any> = [];
  @Input() rootId: number = 0;
  @Input() nodeHeight: number = 20;
  @Input() nodeIndent: number = 20;
  @Input() treeLeftPadding: number = 5;
  @Input() colorDefinitions: any = null;

  @Output() nodeClick: EventEmitter<any> = new EventEmitter();
  @Output() nodePMClick: EventEmitter<any> = new EventEmitter();
  //@Output() nodePMClick: EventEmitter<any> = new EventEmitter();

  //20 +
  constructor() {}

  ngOnInit(): void {
    // console.log(this.td,this.FlatTree());
    //this.ProcessTree();
  }

  SetButtonTitle(type: string): string {
    return 'Sorry. This action is not yet avialable...';
  }

  public ProcessTree() {
    this._FlatTree = this.SetFlatTree();
    //console.log("FLATTREE!:",this.FlatTree);
  }

  public NodeClick(n: any) {
    const currentNode = this.treeData.find((r) => r.current);
    if (currentNode != null) currentNode.current = false;
    n.current = true;
    this.nodeClick.emit(n);
  }

  public get NodePath(): string {
    let currentNode = this.treeData.find((r) => r.current);
    if (!currentNode) return '/';
    let ret: string = currentNode.text;
    while (currentNode.id != this.rootId) {
      currentNode = this.treeData.find((r) => r.id == currentNode.pid);
      if (!currentNode) break;
      ret = currentNode.text + ' / ' + ret;
    }
    return ret;
  }

  private _FlatTree: Array<any> = [];
  get FlatTree(): Array<any> {
    return this._FlatTree;
  }
  SetFlatTree(node?: any, level?: number): Array<any> {
    if (this.treeData.length == 0) return [];

    let ret: Array<any> = [];

    if (node == undefined)
      node = this.treeData.find((n) => n.id == this.rootId);
    if (node.id == this.rootId) level = 0;

    node.level = level;

    // temporarily assign node color
    switch (node.level) {
      case 0:
        node.sta = 'red';
        break;
      case 1:
        node.sta = 'ora';
        break;
      case 2:
        node.sta = 'grn';
        break;
    }

    ret.push(node);

    if (node.exp) {
      let children: Array<any> = this.treeData.filter(
        (n) => n.pid == node.id && n.id != 0
      );
      children.forEach((n) => {
        this.SetFlatTree(n, level + 1).forEach((n2) => {
          ret.push(n2);
        });
      });
    }

    return ret;
  }

  TreeData() {
    return JSON.stringify(this.treeData);
  }

  NodePMClick(node: any) {
    // skip routine if pm is not available
    if (this.NodePM(node) == '') return;

    if (this.treeData.find((n) => n.pid == node.id) == null) {
      this.nodePMClick.emit({
        node: node,
        options: { childNodesMissing: true },
      });
      return;
    }
    node.exp = !node.exp;
    this.nodePMClick.emit({ node: node, options: {} });
    this.ProcessTree();
  }

  NodePMCursor(node: any): string {
    return this.treeData.find((n) => n.pid == node.id) == null
      ? 'default'
      : 'pointer';
  }

  NodePMColor(node: any) {
    return this.treeData.find((n) => n.pid == node.id) == null
      ? 'moccasin'
      : 'black';
  }

  NodePM(node: any): string {
    const chiNode = this.treeData.find((n) => n.pid == node.id);

    let ret: string = '';
    if (chiNode || node.ccnt > 0) {
      if (node.exp) {
        ret = '-';
      } else {
        ret = '+';
      }
    }

    return ret;
  }

  NodeIconColor(n): string {
    const cdef = this.colorDefinitions;

    if (this.colorDefinitions == null) return cdef.default;

    switch (n.sta) {
      case undefined:
        return cdef.default;
      case 'red':
        return cdef.danger;
      case 'ora':
        return cdef.warning;
      case 'grn':
        return cdef.success;
      default:
        return cdef.secondary;
    }
  }
  NodeIcon(n): string {
    return n.exp ? 'fa fa-folder-open' : 'fa fa-folder';
  }
}
