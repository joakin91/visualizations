<template>
  <div id="container">
    <vgl-renderer antialias style="height: 100vh;">
        <vgl-scene>
        <vgl-axes-helper size=140></vgl-axes-helper>
        <!--position-attribute: The x, y, and z coordinates of each vertex in this geometry. Goes in triplets-->
        <template v-for="line in lines">
            <vgl-geometry :name="`${line.name}`" :position-attribute="`${line.vertices}`" v-bind:key="line.name"></vgl-geometry>
            <vgl-line-loop :geometry="`${line.name}`" material="line" v-bind:key="line.name"></vgl-line-loop>
        </template>
        <vgl-line-basic-material name="line" :linewidth="linewidth" :color="`#${[r, g, b].map(v => parseInt(v).toString(16)).map(v => v.length < 2 ? '0' + v : v).join('')}`"></vgl-line-basic-material>
        </vgl-scene>
        <!--perspective camera I think it's in 2d already-->
        <vgl-perspective-camera orbit-position="30 1 0"></vgl-perspective-camera>
    </vgl-renderer>

    <aside class="control-panel">
        <section>
        <h3>Color</h3>
        <label>R<input type="range" max="255" v-model="r"></label>
        <label>G<input type="range" max="255" v-model="g"></label>
        <label>B<input type="range" max="255" v-model="b"></label>
        </section>
        <section>
        <h3>Line</h3>
        <label>Width<input type="range" max="100" step="0.1" v-model="linewidth"></label>
        </section>
    </aside>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGL from 'vue-gl'

Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name]);
});

export default {
    name: 'Visualization2',
    mounted(){
        setInterval(() => {
            let indexOfLineToMove = Math.floor(Math.random() * this.$data.lines.length),
                lineToMove = this.$data.lines[indexOfLineToMove];
            let vertixToBaseChanges = lineToMove.vertices[1]
            if( vertixToBaseChanges == 8 ){
                lineToMove.increase = false
            }else if( vertixToBaseChanges == -8 ){
                lineToMove.increase = true
            }
            let newValue = vertixToBaseChanges + 1
            if( !lineToMove.increase ){
                newValue = vertixToBaseChanges - 1
            }
            Vue.set(lineToMove.vertices, 1, newValue)
            Vue.set(lineToMove.vertices, 4, newValue)
            // this.$date.lines.forEach((line, index, arr) => {
                
            // });
        }, 50);
    },
    data: () => {
        return {
            r: 255,
            g: 255,  
            b: 255,
            linewidth: 2,
            increase: true, 
            vertices: [-10,0,0,5,0,0],
            lines: [
                {
                    name: 'line1',
                    increase: true, 
                    vertices: [-15,0,0,5,0,0],   
                },
                {
                    name: 'line2',
                    increase: true, 
                    vertices: [-10,0,0,5,0,0],   
                },
            ]
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.control-panel {
	background: #fff;
	font-family: 'Architects Daughter', 'Helvetica Neue', Helvetica, Arial, serif;
	left: 1ex;
	margin: 0;
	max-height: calc(100vh - 4ex);
	opacity: 0.85;
	overflow: auto;
	padding: 1ex;
	position: fixed;
	top: 1ex
}

.control-panel h3 {
	font-size: 1rem;
	margin: 0
}

.control-panel label {
	display: block;
	text-align: center
}

.control-panel input:not([type=checkbox]) {
	display: block
}
</style>