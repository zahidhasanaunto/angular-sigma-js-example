import { Component, OnInit } from '@angular/core';
import * as sigma from 'sigma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trmdb-web';

  private sigma: any;

  private graph = {
    nodes: [
      { id: 'parent_node', label: 'N_0', x: 0, y: 0, size: 1, color: '#008cc2' }
    ],
    edges: []
  };

  constructor() {
    const items = 50;

    const x0 = 0;
    const y0 = 0;

    for (let i = 0; i < items; i++) {
      // For Random Radius
      const r = Math.floor(Math.random() * 50) + 10;
      // For Fixed Radius
      // const r = 1;

      const x = x0 + r * Math.cos(2 * Math.PI * i / items);
      const y = y0 + r * Math.sin(2 * Math.PI * i / items);

      const node = { id: `n${i}`, label: `Node_Name_${i}`, x, y, size: 1, color: '#008cc2' };
      const edge = { id: `e${i}`, source: 'parent_node', target: `n${i}`, color: '#282c34', type: 'line', size: 0.1 };

      this.graph.nodes.push(node);
      this.graph.edges.push(edge);
    }
  }

  ngOnInit() {
    this.sigma = new sigma(
      {
        renderer: {
          container: document.getElementById('sigma-container'),
          type: 'canvas'
        },
        settings: {}
      }
    );
    this.sigma.graph.read(this.graph);
    this.sigma.refresh();
    console.log(this.sigma);
  }
}
