<template>
  <div id="container">
    <vgl-renderer antialias style="height: 100vh;">
        <vgl-scene>
        <vgl-geometry name="vertices" position-attribute="-5, 0, 0, 10, 10, 0"></vgl-geometry>
        <vgl-line-basic-material name="line" :linewidth="linewidth" :color="`#${[r, g, b].map(v => parseInt(v).toString(16)).map(v => v.length < 2 ? '0' + v : v).join('')}`"></vgl-line-basic-material>
        <vgl-line-loop geometry="vertices" material="line"></vgl-line-loop>
        </vgl-scene>
        <vgl-perspective-camera orbit-position="20 0.8 0.7"></vgl-perspective-camera>
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
    mounted: () => {},
    data: () => {
        return {
            r: 255,
            g: 255,
            b: 255,
            linewidth: 60,
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