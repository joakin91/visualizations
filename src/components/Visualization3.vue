<template>
  <div id="container">
    <vgl-renderer antialias style="height: 100vh;">
        <vgl-scene>
        <vgl-axes-helper size=140></vgl-axes-helper>
        <!--position-attribute: The x, y, and z coordinates of each vertex in this geometry. Goes in triplets-->
        <template v-for="(line, index) in lines">
            <vgl-geometry :name="index+'-id-line'" :position-attribute="`${line.vertices}`" v-bind:key="index+'-geometry'"></vgl-geometry>
            <vgl-line-loop :geometry="index+'-id-line'" material="line" v-bind:key="index+'-line'"></vgl-line-loop>
        </template>
        <vgl-line-basic-material name="line" :color="`#${[r, g, b].map(v => parseInt(v).toString(16)).map(v => v.length < 2 ? '0' + v : v).join('')}`"></vgl-line-basic-material>
        </vgl-scene>
        <!--perspective camera I think it's in 2d already-->
        <vgl-perspective-camera :orbit-position="`${op1} ${op2} ${op3}`"></vgl-perspective-camera>
    </vgl-renderer>

    <aside class="control-panel">
        <section>
        <h3>Color</h3>
        <label>R<input type="range" max="255" v-model="r"></label>
        <label>G<input type="range" max="255" v-model="g"></label>
        <label>B<input type="range" max="255" v-model="b"></label>
        </section>
        <section>
        <h3>Spherical position</h3>
        <label>op1<input type="range" max="90" v-model="op1"></label>
        <label>op2<input type="range" max="10" step="0.02" v-model="op2"></label>
        <label>op3<input type="range" max="10" step="0.02" v-model="op3"></label>
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

const LINE_LENGTH = 10;
const BRANCHES = 4;
const LINE_LIMIT = 500;
const INTERVAL_T0_DRAW = 500;

export default {
    name: 'Visualization3',
    mounted(){
        let pushLine = (isLeft, vertices) => {
            this.$data.lines.push({
                left: isLeft,
                vertices,
            });
        }
        let createLinesOnVertices = (indexOfLine) => {
            let line = this.$data.lines[indexOfLine],
                lineVertices = line.vertices,
                startVertex = [lineVertices[0], lineVertices[1], lineVertices[2]],
                endVertex = [lineVertices[3], lineVertices[4], lineVertices[5]];

            if( indexOfLine == 0 ){
                pushLine(true, startVertex.concat(0, 0, 0));
                pushLine(false, endVertex.concat(0, 0, 0));
            }else{
                for( let i = 0; i < BRANCHES; i++ ){
                    let xAxis = Math.floor(Math.random() * LINE_LENGTH),
                        yAxis = Math.floor(Math.random() * LINE_LENGTH)
                    if( line.left ){
                        pushLine(true, endVertex.concat(endVertex[0]-xAxis, endVertex[1]-yAxis, 0));
                        pushLine(true, endVertex.concat(endVertex[0]+xAxis, endVertex[1]+yAxis, 0));
                    }else{
                        pushLine(false, endVertex.concat(endVertex[0]+xAxis, endVertex[1]+yAxis, 0));
                        pushLine(false, endVertex.concat(endVertex[0]-xAxis, endVertex[1]-yAxis, 0));
                    }
                }
            }
        }
        setInterval(() => {
            if( this.$data.lines.length < LINE_LIMIT ){
                this.$data.lines.forEach((line, index) => {
                    if( !this.$data.mutatedLines.includes(index) ){
                        this.$data.mutatedLines.push(index);
                        createLinesOnVertices(index);
                    }
                });
            }
        }, INTERVAL_T0_DRAW);
    },
    data: () => {
        return {
            r: 255,
            g: 255,  
            b: 255,
            op1: 30,
            op2: 1,
            op3: 0,
            mutatedLines: [],
            lines: [
                {
                    vertices: [0,0,0,0,0,0],   
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