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
      { id: 'parent_node', label: 'N_0', x: 0, y: 0, size: 1, color: '#008cc2' },

      // { id: 'n1', label: 'N_1', x: 0.9, y: -0.1, size: 1, color: '#008cc2' },
      // { id: 'n2', label: 'N_2', x: 0.8, y: -0.2, size: 1, color: '#008cc2' },
      // { id: 'n3', label: 'N_3', x: 0.7, y: -0.3, size: 1, color: '#008cc2' },
      // { id: 'n4', label: 'N_4', x: 0.6, y: -0.4, size: 1, color: '#008cc2' },
      // { id: 'n5', label: 'N_5', x: 0.5, y: -0.5, size: 1, color: '#008cc2' },
      // { id: 'n6', label: 'N_6', x: 0.4, y: -0.6, size: 1, color: '#008cc2' },
      // { id: 'n7', label: 'N_7', x: 0.3, y: -0.7, size: 1, color: '#008cc2' },
      // { id: 'n8', label: 'N_8', x: 0.2, y: -0.8, size: 1, color: '#008cc2' },
      // { id: 'n9', label: 'N_9', x: 0.1, y: -0.9, size: 1, color: '#008cc2' },

      // { id: 's1', label: 'S_1', x: -0.9, y: 0.1, size: 1, color: '#008cc2' },
      // { id: 's2', label: 'S_2', x: -0.8, y: 0.2, size: 1, color: '#008cc2' },
      // { id: 's3', label: 'S_3', x: -0.7, y: 0.3, size: 1, color: '#008cc2' },
      // { id: 's4', label: 'S_4', x: -0.6, y: 0.4, size: 1, color: '#008cc2' },

      // { id: 'e1', label: 'E_1', x: -0.1, y: 0.9, size: 1, color: '#008cc2' },
      // { id: 'e2', label: 'E_2', x: -0.2, y: 0.8, size: 1, color: '#008cc2' },
      // { id: 'e3', label: 'E_3', x: -0.3, y: 0.7, size: 1, color: '#008cc2' },
      // { id: 'e4', label: 'E_4', x: -0.4, y: 0.6, size: 1, color: '#008cc2' },

      // { id: 'w1', label: 'W_1', x: 0.1, y: -0.9, size: 1, color: '#008cc2' },
      // { id: 'w2', label: 'W_2', x: 0.2, y: -0.8, size: 1, color: '#008cc2' },
      // { id: 'w3', label: 'W_3', x: 0.3, y: -0.7, size: 1, color: '#008cc2' },
      // { id: 'w4', label: 'W_4', x: 0.4, y: -0.6, size: 1, color: '#008cc2' },
    ],
    edges: [
      // { id: 'en1', source: 'parent_node', target: 'n1', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en2', source: 'parent_node', target: 'n2', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en3', source: 'parent_node', target: 'n3', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en4', source: 'parent_node', target: 'n4', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en5', source: 'parent_node', target: 'n5', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en6', source: 'parent_node', target: 'n6', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en7', source: 'parent_node', target: 'n7', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en8', source: 'parent_node', target: 'n8', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'en9', source: 'parent_node', target: 'n9', color: '#282c34', type: 'line', size: 0.1 },

      // { id: 'es1', source: 'parent_node', target: 's1', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'es2', source: 'parent_node', target: 's2', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'es3', source: 'parent_node', target: 's3', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'es4', source: 'parent_node', target: 's4', color: '#282c34', type: 'line', size: 0.1 },

      // { id: 'ee1', source: 'parent_node', target: 'e1', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'ee2', source: 'parent_node', target: 'e2', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'ee3', source: 'parent_node', target: 'e3', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'ee4', source: 'parent_node', target: 'e4', color: '#282c34', type: 'line', size: 0.1 },

      // { id: 'ew1', source: 'parent_node', target: 'w1', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'ew2', source: 'parent_node', target: 'w2', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'ew3', source: 'parent_node', target: 'w3', color: '#282c34', type: 'line', size: 0.1 },
      // { id: 'ew4', source: 'parent_node', target: 'w4', color: '#282c34', type: 'line', size: 0.1 },
    ]
  };

  constructor() {
    const items = 50;

    const x0 = 0;
    const y0 = 0;
    const r = 1;

    for (let i = 0; i < items; i++) {

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
