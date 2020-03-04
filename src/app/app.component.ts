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

      { id: 'n1', label: 'N_1', x: 0.9, y: -0.1, size: 1, color: '#008cc2' },
      { id: 'n2', label: 'N_2', x: 0.8, y: -0.2, size: 1, color: '#008cc2' },
      { id: 'n3', label: 'N_3', x: 0.7, y: -0.3, size: 1, color: '#008cc2' },
      { id: 'n4', label: 'N_4', x: 0.6, y: -0.4, size: 1, color: '#008cc2' },

      { id: 's1', label: 'S_1', x: -0.9, y: 0.1, size: 1, color: '#008cc2' },
      { id: 's2', label: 'S_2', x: -0.8, y: 0.2, size: 1, color: '#008cc2' },
      { id: 's3', label: 'S_3', x: -0.7, y: 0.3, size: 1, color: '#008cc2' },
      { id: 's4', label: 'S_4', x: -0.6, y: 0.4, size: 1, color: '#008cc2' },

      { id: 'e1', label: 'E_1', x: -0.1, y: 0.9, size: 1, color: '#008cc2' },
      { id: 'e2', label: 'E_2', x: -0.2, y: 0.8, size: 1, color: '#008cc2' },
      { id: 'e3', label: 'E_3', x: -0.3, y: 0.7, size: 1, color: '#008cc2' },
      { id: 'e4', label: 'E_4', x: -0.4, y: 0.6, size: 1, color: '#008cc2' },

      { id: 'w1', label: 'W_1', x: 0.1, y: -0.9, size: 1, color: '#008cc2' },
      { id: 'w2', label: 'W_2', x: 0.2, y: -0.8, size: 1, color: '#008cc2' },
      { id: 'w3', label: 'W_3', x: 0.3, y: -0.7, size: 1, color: '#008cc2' },
      { id: 'w4', label: 'W_4', x: 0.4, y: -0.6, size: 1, color: '#008cc2' },
    ],
    edges: [
      { id: 'en1', source: 'parent_node', target: 'n1', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'en2', source: 'parent_node', target: 'n2', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'en3', source: 'parent_node', target: 'n3', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'en4', source: 'parent_node', target: 'n4', color: '#282c34', type: 'line', size: 0.1 },

      { id: 'es1', source: 'parent_node', target: 's1', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'es2', source: 'parent_node', target: 's2', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'es3', source: 'parent_node', target: 's3', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'es4', source: 'parent_node', target: 's4', color: '#282c34', type: 'line', size: 0.1 },

      { id: 'ee1', source: 'parent_node', target: 'e1', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'ee2', source: 'parent_node', target: 'e2', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'ee3', source: 'parent_node', target: 'e3', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'ee4', source: 'parent_node', target: 'e4', color: '#282c34', type: 'line', size: 0.1 },

      { id: 'ew1', source: 'parent_node', target: 'w1', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'ew2', source: 'parent_node', target: 'w2', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'ew3', source: 'parent_node', target: 'w3', color: '#282c34', type: 'line', size: 0.1 },
      { id: 'ew4', source: 'parent_node', target: 'w4', color: '#282c34', type: 'line', size: 0.1 },
    ]
  };

  constructor() { }

  ngOnInit() {
    this.sigma = new sigma(
      {
        renderer: {
          container: document.getElementById("sigma-container"),
          type: 'canvas'
        },
        settings: {}
      }
    );
    this.sigma.graph.read(this.graph);
    this.sigma.refresh();
    console.log(this.sigma)
  }
}
