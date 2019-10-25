<template>
    <div>
        <div class="md-layout md-gutter center">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header>
                    </md-card-header>

                    <md-card-content>
                    vue-gl ball example
                    </md-card-content>

                    <md-card-actions>
                    <router-link to="/visualization1"><md-button>Launch</md-button></router-link>
                    </md-card-actions>
                </md-card>
            </div>
        </div>
        <div class="md-layout md-gutter center">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header>
                    </md-card-header>

                    <md-card-content>
                    line movement experiment
                    </md-card-content>

                    <md-card-actions>
                    <router-link to="/visualization2"><md-button>Launch</md-button></router-link>
                    </md-card-actions>
                </md-card>
            </div>
        </div>
        <div class="md-layout md-gutter center">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header>
                    </md-card-header>

                    <md-card-content>
                    line creation experiment
                    </md-card-content>

                    <md-card-actions>
                    <router-link to="/visualization3"><md-button>Launch</md-button></router-link>
                    </md-card-actions>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}

.md-layout.md-gutter {
    margin-right: -20px;
    margin-left: -20px;
    margin-top: 2vw;
}
</style>